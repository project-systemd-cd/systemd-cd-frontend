.PHONY: clear-aspida
clear-aspida:
	-rm -r domain/backend

.PHONY: openapi2aspida
openapi2aspida: clear-aspida
	pnpm openapi2aspida \
		-i https://raw.githubusercontent.com/tingtt/systemd-cd/main/presentation/echo/oas.yml \
		-o domain/backend
