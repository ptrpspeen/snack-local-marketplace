# Recover a disconnected Snack Local session

Use this procedure for `Transport closed`, `Broken pipe`, a refused localhost connection, or a preview that stopped updating. A transport error means the MCP connection is unusable; it does not establish why the process stopped or that Expo credentials expired.

## When MCP tools still respond

1. Call `get_status` once. Record the current project directory, preview URL and revision.
2. If no project is open, call `open_project` with the existing absolute project directory. Preserve its `snack.config.json`, source files and `.snack-local/saved.json`; omit a new name for an existing project.
3. If local edits are pending, call `sync_project` once after completing the batch. Open the latest returned preview URL, then inspect the visible app and current-revision errors. Reopen the latest native link/QR if needed.
4. A disconnected preview client alone is not a dead MCP connection. Keep the local preview page open so it can maintain the Snack session.

## When MCP returns Transport closed or Broken pipe

1. Stop calling that broken transport. Repeating `open_project` through it cannot start a replacement process. Separate this from app-code errors; do not rewrite the app to fix a transport failure.
2. Determine the existing project directory from this task or local `snack.config.json`. Tell the user to open a **new Codex task in that same directory**, with this prompt filled in with the actual path:

   > Use Snack Local to reopen the existing project at <absolute project directory>. Preserve the source and Snack identity. Open a fresh live preview and check that it renders. Check account configuration before requesting setup.

3. In the new task, call `open_project` on that directory. Open its returned URL and verify rendering. The new live URL/QR may differ; a saved Snack link is separate. `open_project` reports `configured`; call `account_setup` only if it is false or the user requests account setup. Never read or ask for tokens in chat.
4. Explain the boundary: a new task starts a new connection. Reopening the app and returning to the old task is not a verified substitute. This is recovery, not proof that the original cause is fixed.

## If a fresh task also fails

Use the existing Codex CLI to inspect `codex mcp list --json`. Keep only the Snack entry's enabled state, command, args, cwd and timeouts; redact secrets and omit environment values. Confirm the selected package matches the OS and the launch files exist in that installed cache. Check for duplicate Snack installations from different marketplaces and identify which one is selected; report duplicates without assuming they caused the failure.

Inspect only relevant local MCP startup/exit log entries, with secrets redacted. Report the observed error and installed version. If files are missing or the package is outdated, follow the plugin root's `INSTALL.md` to refresh the matching marketplace/package, then use a new task. On Windows, a local path need not be the same as on Mac. Preserve source and credentials during repairs.

A separate MCP client can start a replacement process and reopen the project for temporary preview recovery. This package does not ship that standalone recovery client. Do not claim that launching a server in a terminal reconnects the old task's MCP tools, or that the plugin automatically reconnects. Keep any diagnostic replacement process alive while using its preview and label it temporary.

Recovery is verified only when the replacement MCP responds and the existing app visibly renders. Report any remaining limitation, including an old task whose tools are still disconnected. If the cause cannot be reproduced, request the relevant redacted startup/exit logs instead of declaring a root cause.
