# Install Snack Local

Instructions for Codex running on the user's local computer. For Codex on Mac or Windows, select the matching package. For Manus on Linux, use the separate instructions below.

1. Detect the local OS and hardware architecture from the available environment. If needed, use `uname -s` and `uname -m` on macOS. On Windows, use PowerShell `(Get-CimInstance Win32_Processor).Architecture` (9 = x64, 12 = ARM64). Use the host hardware architecture, not an emulated process architecture. Ask the user only if detection is unavailable or ambiguous.
2. Select exactly one package:

   | Local host | Plugin |
   | --- | --- |
   | macOS, Apple Silicon / arm64 | `snack-local` |
   | Windows, x64 / AMD64 | `snack-local-windows` |
   | Linux, x64 / AMD64 | `snack-local-linux` |

   Other platforms are not supported by this preview release. Explain the detected mismatch and stop before installing.
3. For Codex installations, use the existing Codex CLI. Linux x64 also needs Node.js 24 or newer on `PATH`. If `codex` is not on PATH, locate the CLI bundled with the installed Codex app. Do not install a separate Node, npm, Expo CLI, or shell. If no existing CLI can be found, report that specific blocker.
4. Inspect `codex plugin marketplace list`. Add the marketplace if absent; otherwise refresh it:

   ```text
   codex plugin marketplace add ptrpspeen/snack-local-marketplace
   ```

   ```text
   codex plugin marketplace upgrade snack-local-marketplace
   ```

5. Install the selected plugin (run only the matching command):

   macOS Apple Silicon:

   ```text
   codex plugin add snack-local@snack-local-marketplace
   ```

   Windows x64:

   ```text
   codex plugin add snack-local-windows@snack-local-marketplace
   ```

   Linux x64 with Codex and Node.js 24+: `codex plugin add snack-local-linux@snack-local-marketplace`

6. Verify the install command succeeded and report the installed package and version. Ask the user to start a new Codex task to load the plugin, then describe the app they want. Installation is complete when the matching package is installed; rendering and Expo account saving are separate checks.

The macOS and Windows packages extract their bundled runtime on first MCP launch. The Linux package uses the host Node.js 24+ runtime. The user's source and Expo credential stay outside the plugin cache. Existing Expo account setup does not need to be repeated on updates.

## Manus or another Linux MCP host

Use [plugins/snack-local-linux/INSTALL.md](plugins/snack-local-linux/INSTALL.md) to configure the standard stdio MCP server directly. This path does not use the Codex CLI or marketplace. Linux x64 requires Node.js 24 or newer on `PATH`; the macOS and Windows packages carry their own runtimes.
