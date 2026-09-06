---
name: snack
description: Create or edit local React Native apps and sync complete edit batches to Expo Snack for web and Expo Go preview. Use when the user asks for Snack apps or live Snack preview.
---

Use the Snack Local MCP tools. Call `open_project` with an absolute directory and a unique name when starting; use an existing project's `snack.config.json` on later sessions.

Build the app the user describes, for any audience or domain. New projects start with a minimal neutral screen; preserve existing source when continuing a project. Match UI language to the user. Choose libraries supported by the selected Snack SDK and Expo Go; explain when a requested feature needs a custom native build or a separate backend.

Edit local source using normal file tools. Keep `snack.config.json` files and dependencies explicit. Call `sync_project` once after a complete edit batch; it reads files itself. Open its preview URL in Browser. The user opens the Expo Go link or QR on their device.

Call `get_status` after the preview has connected. A submitted revision is not proof of rendering: inspect preview/client feedback. Errors belong to the reported revision. Attempt at most two repair rounds per user request, then summarize the remaining error.

Call `account_setup` when an Expo token is missing. The user enters the token directly on that local page. Never request it in chat or read its storage file. `save_project` reads the credential internally and saves directly to Expo; it never accepts a token argument. Saving uploads the allowlisted source and can update the same account/name Snack.

Keep replies and tool context short. Return changed files, relevant errors and the saved link. Preview needs the local browser and MCP session to remain open; saved Snacks can be opened later. This package targets Windows x64. Simulator is optional. Use forward slashes in snack.config.json file names, including on Windows.
