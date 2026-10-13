# Day-to-day tasks for steinnhm.com. Run `make` or `make help` for the list.
#
# Every Node command goes through scripts/node-env.sh, which switches to the
# Node version in .nvmrc (via nvm), so these work whatever Node your shell
# defaults to.

SHELL := bash
.DEFAULT_GOAL := help

NODE := ./scripts/node-env.sh
PORT ?= 5173

.PHONY: help install run build preview validate fix precommit clean

help: ## Show this help
	@awk 'BEGIN { FS = ":.*## " } /^[a-z-]+:.*## / { printf "  \033[36mmake %-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

# Reinstall dependencies whenever package-lock.json changes.
node_modules: package-lock.json
	@$(NODE) npm ci
	@touch node_modules

install: ## Install the .nvmrc Node version (via nvm) and npm dependencies
	@if [ -s "$${NVM_DIR:-$$HOME/.nvm}/nvm.sh" ]; then \
		. "$${NVM_DIR:-$$HOME/.nvm}/nvm.sh" && nvm install; \
	fi
	@$(NODE) npm ci
	@touch node_modules

run: node_modules ## Run the site locally with hot reload (PORT=5173)
	@$(NODE) npm run dev -- --port $(PORT)

build: node_modules ## Type-check and build the production site into dist/
	@$(NODE) npm run build

preview: build ## Build, then serve the production site locally (port 4173)
	@$(NODE) npm run preview

validate: node_modules ## Check formatting, lint, types and tests, then build
	@echo "==> format";    $(NODE) npm run --silent format:check
	@echo "==> lint";      $(NODE) npm run --silent lint
	@echo "==> typecheck"; $(NODE) npm run --silent typecheck
	@echo "==> test";      $(NODE) npm run --silent test
	@echo "==> build";     $(NODE) npm run --silent build
	@echo "All checks passed."

fix: node_modules ## Auto-fix formatting and lint issues
	@$(NODE) npm run --silent format
	@$(NODE) npm run --silent lint:fix

precommit: node_modules ## Run every pre-commit hook on all files (as CI does)
	@pre-commit run --all-files

clean: ## Remove build output and tool caches
	@rm -rf dist coverage node_modules/.vite node_modules/.tmp
