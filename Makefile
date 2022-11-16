install:
	npm ci

run:
	bin/brain-games.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8


publish:
	npm publish --dry-run

.PHONY: test