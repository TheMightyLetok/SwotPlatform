import type { AppLoadContext } from '@remix-run/cloudflare'

export async function log(env: AppLoadContext, message: string) {
	if (env.DEBUG_ENABLED === '1') {
		console.log(message)
	}
}
