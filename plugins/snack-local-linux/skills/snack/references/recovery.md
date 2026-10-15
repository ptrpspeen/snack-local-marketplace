# Recover a disconnected Snack Local session on Linux

A `Transport closed`, `Broken pipe`, or refused local preview connection means the current MCP process or preview may have ended. It does not mean project source or Expo credentials were lost.

## If MCP tools still respond

1. Call `get_status` once and record the project directory, revision, and preview URL.
2. If no project is open, call `open_project` with the existing absolute directory and no new name. Preserve `snack.config.json`, source files, and `.snack-local/saved.json`.
3. After a complete local edit batch, call `sync_project` once. Open its latest preview URL and inspect current-revision errors.

## If the MCP transport is closed

1. Stop calling the closed transport. Start a fresh MCP session in the host. In Manus, restart or reconnect the configured `snack` stdio server; in Codex, start a new task in the same project directory.
2. Call `open_project` with the existing absolute project directory, then open the new preview URL. The URL and QR may change; saved Snack identity is separate.
3. Call `account_setup` only if `open_project` reports `configured: false` or the user asks for account setup. Never read the token file or ask for a token in chat.

If a fresh session fails, inspect the MCP host's command, args, working directory, Node.js version, and the Linux plugin's `launch.sh` output. Keep credentials and environment values out of diagnostic messages. Confirm Linux x64 and Node.js 24 or newer. A replacement process must respond to MCP and serve the existing app before recovery is considered verified. Browser reachability may require sandbox port routing; an HTTP URL alone does not prove the app rendered.
