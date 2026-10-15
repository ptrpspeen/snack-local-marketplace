#!/bin/sh
set -eu
plugin_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if [ "$(uname -s)" != Linux ]; then
  echo 'Snack Local Linux requires Linux x64.' >&2
  exit 1
fi
case "$(uname -m)" in
  x86_64|amd64) ;;
  *) echo 'Snack Local Linux requires Linux x64.' >&2; exit 1 ;;
esac
if ! command -v node >/dev/null 2>&1; then
  echo 'Snack Local Linux requires Node.js 24 on PATH.' >&2
  exit 1
fi
if ! node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 24 ? 0 : 1)' >/dev/null 2>&1; then
  echo 'Snack Local Linux requires Node.js 24 or newer.' >&2
  exit 1
fi
if [ ! -f "$plugin_dir/dist/server.cjs" ]; then
  echo 'Snack Local Linux is missing dist/server.cjs. Rebuild the package.' >&2
  exit 1
fi
exec node "$plugin_dir/dist/server.cjs"
