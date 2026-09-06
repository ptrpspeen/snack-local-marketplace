# Snack Local for Codex

Build React Native apps with Codex, keep source on your computer, and preview complete edit batches in a browser or Expo Go. Start from a neutral screen or continue an existing Snack-compatible app. This is for anyone building personal tools, business prototypes, learning projects, or other app ideas.

This repository is a **Codex plugin marketplace**, not a hosted MCP service. Both plugins include a local MCP server and a compressed Node runtime. You do not need to install Node, npm, Expo CLI, or run a server yourself. The runtime is extracted on first launch without downloading another program. Internet access is needed for Expo services. Expo Go on a phone is optional.

## Install on Windows

Windows x64 preview release. Ask Codex to install this marketplace and its Windows plugin:

> Add the GitHub plugin marketplace https://github.com/Leoberus/snack-local-marketplace and install snack-local-windows from snack-local-marketplace. Use the existing Codex CLI; do not install Node or Expo CLI.

The equivalent Codex CLI commands are:

```text
codex plugin marketplace add Leoberus/snack-local-marketplace
codex plugin add snack-local-windows@snack-local-marketplace
```

Open a **new Codex task** after installation, then try:

> Use Snack Local to create a habit tracker in this project. Show the web preview and Expo Go QR. Keep the code in this folder and sync after each complete edit batch.

Choose Luna if available in your account. Its token usage and quality with this plugin have not yet been measured. Install only the plugin for your operating system.

## Install on Mac

macOS Apple Silicon:

```text
codex plugin marketplace add Leoberus/snack-local-marketplace
codex plugin add snack-local@snack-local-marketplace
```

Start a new Codex task. Intel Mac, Windows ARM64, Linux, and cloud execution are not verified targets of this release.

## Preview and save

Keep the returned local browser preview open; it maintains the live Snack connection. Open the QR/link in Expo Go for native preview. After a full set of edits, Codex calls `sync_project` once. The MCP reads local source itself and returns compact status instead of echoing code into model context.

To save a Snack to your own Expo account, ask Codex to connect your Expo account and save the project. It opens a local setup page where **you** enter an Expo access token from Expo Settings. Enter tokens only on that page. The local MCP reads the token internally and uploads the allowlisted source directly to Expo. Save again after subsequent syncs to update the saved Snack. Live preview URLs and QR codes change between sessions; the saved Snack URL is separate and can be opened later.

Credentials are stored as plaintext in `~/.config/snack-local/expo-token` (Windows: the equivalent directory under your user profile). macOS uses mode 0600; Windows uses inherited filesystem ACLs. This release does not use Keychain or Windows Credential Manager. Tokens are outside project source and the plugin package. Revoke in Expo and remove the local file to disconnect.

## Scope

App behavior follows your request, within the capabilities of the selected Snack SDK and Expo Go. Custom native modules require a different build workflow; backend features require a separate backend. This release uses SDK 54 and `App.js` as the entry point.

`snack.config.json` lists exactly which source files and dependencies are synced:

```json
{
  "name": "my-unique-app",
  "sdkVersion": "54.0.0",
  "files": ["App.js", "components/HomeScreen.js"],
  "dependencies": {}
}
```

Use forward slashes in file names on every OS. Add only files that exist. Dependency format: `{"package-name":{"version":"compatible-version"}}`. Up to 100 JS/JSX/TS/TSX/JSON files and 1 MB total source are supported; local binary assets are not uploaded by this release. Hidden paths, node_modules, and symlinks escaping the project are rejected. Saved identity is recorded in `.snack-local/saved.json`. Choose a unique account/project name because saving may overwrite the Snack with that name. Local source is authoritative; online editor changes are not pulled back.

## Update

```text
codex plugin marketplace upgrade snack-local-marketplace
codex plugin add snack-local-windows@snack-local-marketplace
```

Use `snack-local` instead for Mac, then start a new task.

## Windows test checklist

1. Install through the marketplace and start a new task with Luna.
2. Create an app in a directory containing spaces or Thai characters.
3. Open web preview and the Expo Go QR. Confirm the requested app appears.
4. Ask for a visible change; confirm both previews update after sync.
5. Connect your Expo account through the local page and save. Open the saved link.
6. End the task, reopen the same local project in a new task, change it and save again. Check that the saved link stays the same.

Automated CI exercises the packaged launcher and MCP protocol on Windows and Mac, including source sync, no-op sync, stale feedback, missing-account setup and request boundaries. It does not prove the Codex desktop install flow, Luna behavior, real-account saving, or visible web/Expo Go rendering on Windows. Mac web/iOS preview and an earlier account-saving prototype were tested locally.

## Development

Shared source is in `src/`; distributable plugins are in `plugins/`. Install pinned dependencies with `pnpm install --frozen-lockfile`, then run `node build.mjs`. Run `node --test test/integration.test.mjs` on Apple Silicon or set `SNACK_TEST_PLUGIN=snack-local-windows` on Windows. The test removes Node from the child process PATH so the packaged runtime must work.

Bundled runtime: Node v24.19.0 from nodejs.org. `runtime/SHA256SUMS` verifies each compressed archive before extraction. Original Windows archive SHA256: `57f71ab3652e797d84acddc79c81cc9ff1c6ddb2a1974cdb83f00fee9bff4c73`. The macOS executable was copied from the local Codex Node v24.19.0 runtime. See each package's `runtime/LICENSE.node` and `THIRD-PARTY-NOTICES.txt` for third-party licenses.

Report reproducible issues at https://github.com/Leoberus/snack-local-marketplace/issues. Include OS, plugin version and the short error; exclude tokens and private source.
