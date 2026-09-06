---
name: snack
description: Create or edit local React Native apps and sync complete edit batches to Expo Snack for web and Expo Go preview. Use when the user asks for Snack apps, live Snack preview, or recovery of a disconnected Snack session.
---

For `Transport closed`, `Broken pipe`, an unreachable preview, or a request to reconnect, follow [connection recovery](references/recovery.md) before further tool calls.

Use the Snack Local MCP tools. Call `open_project` with an absolute directory and a unique name when starting; use an existing project's `snack.config.json` on later sessions.

Build the app the user describes, for any audience or domain. New projects start with a minimal neutral screen; preserve existing source when continuing a project. Match UI language to the user. Choose libraries supported by the selected Snack SDK and Expo Go; explain when a requested feature needs a custom native build or a separate backend.

Organize source according to the app’s scope: separate screens, reusable components and shared logic by responsibility. Keep App.js focused on composing the app. Add services when external data or persistence needs them. Use readable formatting and follow the user’s requested structure.

Edit local source using normal file tools. Keep `snack.config.json` files and dependencies explicit. Call `sync_project` once after a complete edit batch; it reads files itself. Open its preview URL in Browser. The user opens the Expo Go link or QR on their device.

Call `get_status` after the preview has connected. A submitted revision is not proof of rendering: inspect preview/client feedback. Errors belong to the reported revision. Fix reproducible app errors and verify the result; report any unresolved blocker with evidence.

Call `account_setup` when an Expo token is missing. The user enters the token directly on that local page. Never request it in chat or read its storage file. `save_project` reads the credential internally and saves directly to Expo; it never accepts a token argument. Saving uploads the allowlisted source and can update the same account/name Snack.

Report the changes, verification results, relevant errors and the saved link. Preview needs the local browser and MCP session to remain open; saved Snacks can be opened later. This package targets Windows x64. Simulator is optional. Use forward slashes in snack.config.json file names, including on Windows.
