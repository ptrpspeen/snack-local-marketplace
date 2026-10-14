# Snack Local for Linux x64 MCP hosts

This package runs the same five Snack Local tools as the macOS and Windows packages through a standard stdio MCP server: `open_project`, `sync_project`, `get_status`, `account_setup`, and `save_project`. It can be used by Manus or another MCP host without Codex.

Requirements: Linux x64, Node.js 24 or newer on `PATH`, and internet access for Expo services. Start `/bin/sh` with argument `./launch.sh` and set the working directory to this plugin folder. See [INSTALL.md](INSTALL.md) for a configuration example.

Ask the agent: “Open `/absolute/path/to/my-app` with Snack Local, sync the completed edit batch, and report the preview URL.” For a new project, `open_project` creates `App.js` and `snack.config.json`; for an existing one, keep its source. The config must list `App.js`. Up to 100 JS/JSX/TS/TSX/JSON files and 1 MB total source are supported. List only project files; hidden paths, `node_modules`, absolute paths, and symlinks outside the project are rejected. Dependencies use `{"package":{"version":"compatible-version"}}`.

The preview server listens on `127.0.0.1` and an ephemeral port by default. `SNACK_LOCAL_HOST` and `SNACK_LOCAL_PORT` can change the bind address and port for a sandbox that exposes a browser port. Set these only in a trusted environment. The returned URL is reachable only if the MCP process and browser share the host or the sandbox provides routing to that port. Keep the preview browser session open for live feedback.

Saving to Expo requires a user access token. Call `account_setup` and enter the token on its local setup page, never in a prompt, issue, log, or MCP argument. The token is stored under `SNACK_LOCAL_DATA_DIR` if set, otherwise `~/.config/snack-local`, with user-only permissions on Linux. `save_project` reads it internally.
