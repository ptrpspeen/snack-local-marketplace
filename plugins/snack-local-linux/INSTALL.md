# Install Snack Local for Manus / Linux x64

1. Place this package in a persistent location inside the Linux x64 environment. Keep its `dist/`, HTML, skill, and launcher files together.
2. Install Node.js 24 or newer on the host, or use the host's existing Node.js 24 runtime. The launcher checks the OS, architecture, Node.js version, and built server file before starting.
3. Configure Manus or another MCP client to spawn this standard stdio server. Replace the example with the package's absolute path:

```json
{
  "mcpServers": {
    "snack": {
      "command": "/bin/sh",
      "args": ["/absolute/path/to/plugins/snack-local-linux/launch.sh"],
      "cwd": "/absolute/path/to/plugins/snack-local-linux"
    }
  }
}
```

4. Ask the agent to call `open_project` with an absolute project directory and a unique lowercase name for a new app. It must keep `snack.config.json` with `App.js` in `files`, then call `sync_project` after each complete edit batch.
5. Open the returned preview URL in a browser that can reach the MCP host. In an isolated Manus Sandbox, configure port access if its browser is outside the process network namespace. Default binding is localhost only.

Do not provide an Expo token in MCP arguments or chat. If saving to Expo, use `account_setup` and enter the token on the local page. `SNACK_LOCAL_DATA_DIR` can select a persistent private user data directory. `SNACK_LOCAL_HOST` defaults to `127.0.0.1`; `SNACK_LOCAL_PORT` defaults to `0` (an available port).
