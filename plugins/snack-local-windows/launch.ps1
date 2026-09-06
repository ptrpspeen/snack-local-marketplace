$ErrorActionPreference = 'Stop'
# A parent PowerShell 7 process can supply a module path without Windows PowerShell modules.
$env:PSModulePath = (Join-Path $PSHOME 'Modules') + [IO.Path]::PathSeparator + $env:PSModulePath
$runtimeDir = Join-Path $PSScriptRoot 'runtime'
$nodePath = Join-Path $runtimeDir 'unpacked\node.exe'
if (-not [Environment]::Is64BitOperatingSystem) {
    [Console]::Error.WriteLine('Snack Local requires 64-bit Windows.')
    exit 1
}
if (-not (Test-Path -LiteralPath $nodePath)) {
    $archive = Join-Path $runtimeDir 'node.zip'
    $expected = ((Get-Content -LiteralPath (Join-Path $runtimeDir 'SHA256SUMS') -Raw).Trim() -split '\s+')[0]
    if ((Get-FileHash -LiteralPath $archive -Algorithm SHA256).Hash.ToLowerInvariant() -ne $expected) {
        throw 'Bundled Node archive checksum mismatch. Reinstall the plugin.'
    }
    $staging = Join-Path $runtimeDir ('extract-' + [Guid]::NewGuid().ToString('N'))
    try {
        Expand-Archive -LiteralPath $archive -DestinationPath $staging
        $destination = Join-Path $runtimeDir 'unpacked'
        if (-not (Test-Path -LiteralPath $nodePath)) {
            try { Move-Item -LiteralPath $staging -Destination $destination -ErrorAction Stop }
            catch { if (-not (Test-Path -LiteralPath $nodePath)) { throw } }
        }
    } finally {
        if (Test-Path -LiteralPath $staging) { Remove-Item -LiteralPath $staging -Recurse -Force }
    }
}
& $nodePath (Join-Path $PSScriptRoot 'dist\server.cjs')
exit $LASTEXITCODE
