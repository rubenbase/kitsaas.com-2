.PHONY: help

help: ## List of commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

frontend-deps: ## Require frontend deps
	brew install node
	brew install pnpm

frontend-install: frontend-env ## Initial install for frontend
	cd ui && pnpm install

frontend-env: ## Copy and link local env variables
	cp ui/.env.example ui/.env.local
	ln -sf $$(pwd)/ui/.env.local $$(pwd)/ui/web/dashboard/.env.local

frontend-run-web: ## Run dashboard locally
	cd ui/apps/web && pnpm run dev