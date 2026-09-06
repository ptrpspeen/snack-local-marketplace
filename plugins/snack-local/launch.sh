#!/bin/sh
set -eu
plugin_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if [ "$(uname -s)" != Darwin ] || [ "$(uname -m)" != arm64 ]; then
  echo 'Install snack-local-windows on Windows x64; this package requires macOS Apple Silicon.' >&2
  exit 1
fi
runtime_dir="$plugin_dir/runtime"
if [ ! -x "$runtime_dir/node" ]; then
  (cd "$runtime_dir" && shasum -a 256 -c SHA256SUMS >/dev/null)
  staging=$(mktemp "$runtime_dir/node.XXXXXX")
  trap 'rm -f "$staging"' EXIT HUP INT TERM
  gzip -dc "$runtime_dir/node.gz" > "$staging"
  chmod 755 "$staging"
  mv "$staging" "$runtime_dir/node"
fi
exec "$runtime_dir/node" "$plugin_dir/dist/server.cjs"
