#!/usr/bin/env bash
# Run a command with the project's Node version (.nvmrc).
#
# Used by the Makefile and the pre-commit hooks so they never fall back to an
# older default Node from your shell:
# - If the Node on PATH is already new enough (e.g. CI, where setup-node
#   provides it), the command runs as-is. GitHub's runners ship nvm without
#   our version installed, so nvm must not be consulted first.
# - Otherwise, if nvm is installed, switch to the .nvmrc version.
# - Otherwise, fail with a clear message.
#
# Usage: scripts/node-env.sh <command> [args...]
set -eo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
wanted="$(tr -d '[:space:]v' < "$root/.nvmrc")"
wanted_major="${wanted%%.*}"

node_major() {
  node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0
}

if [ "$(node_major)" -lt "$wanted_major" ]; then
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck disable=SC1091
    . "$NVM_DIR/nvm.sh" --no-use
    if ! nvm use --silent "$wanted" >/dev/null 2>&1; then
      echo "Node $wanted (from .nvmrc) is not installed. Run: make install" >&2
      exit 1
    fi
  fi
fi

if [ "$(node_major)" -lt "$wanted_major" ]; then
  echo "Node ${wanted} is required (found $(node -v 2>/dev/null || echo none))." >&2
  echo "Install nvm and run 'make install', or switch Node manually." >&2
  exit 1
fi

exec "$@"
