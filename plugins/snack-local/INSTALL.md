# Install Snack Local

Instructions for Codex running on the user's local computer. The user can give the same installation request on Mac or Windows.

1. Detect the local OS and hardware architecture from the available environment. If needed, use `uname -s` and `uname -m` on macOS. On Windows, use PowerShell `(Get-CimInstance Win32_Processor).Architecture` (9 = x64, 12 = ARM64). Use the host hardware architecture, not an emulated process architecture. Ask the user only if detection is unavailable or ambiguous.
2. Select exactly one package:

   | Local host | Plugin |
   | --- | --- |
   | macOS, Apple Silicon / arm64 | `snack-local` |
   | Windows, x64 / AMD64 | `snack-local-windows` |

   Other platforms are not supported by this preview release. Explain the detected mismatch and stop before installing.
3. Use the existing Codex CLI. If `codex` is not on PATH, locate the CLI bundled with the installed Codex app. Do not install a separate Node, npm, Expo CLI, or shell. If no existing CLI can be found, report that specific blocker.
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

6. Verify the install command succeeded and report the installed package and version. Ask the user to start a new Codex task to load the plugin, then describe the app they want. Installation is complete when the matching package is installed; rendering and Expo account saving are separate checks.

The package extracts its bundled runtime on first MCP launch. The user's source and Expo credential stay outside the plugin cache. Existing Expo account setup does not need to be repeated on updates.
