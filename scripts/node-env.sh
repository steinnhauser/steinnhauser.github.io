#!/usr/bin/env bash
# Run a command with the project's Node version (.nvmrc).
#
# Used by the Makefile and the pre-commit hooks so they never fall back to an
# older default Node from your shell. If nvm is installed it switches to the
# .nvmrc version; otherwise (e.g. CI, where setup-node provides Node) the
# command runs as-is. Either way, a too-old Node fails with a clear message.
#
# Usage: scripts/node-env.sh <command> [args...]
set -eo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
wanted="$(tr -d '[:space:]v' < "$root/.nvmrc")"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$NVM_DIR/nvm.sh" --no-use
  if ! nvm use --silent "$wanted" >/dev/null 2>&1; then
    echo "Node $wanted (from .nvmrc) is not installed. Run: make install" >&2
    exit 1
  fi
fi

actual="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
if [ "$actual" -lt "${wanted%%.*}" ]; then
  echo "Node ${wanted} is required (found $(node -v 2>/dev/null || echo none))." >&2
  echo "Install nvm and run 'make install', or switch Node manually." >&2
  exit 1
fi

exec "$@"
