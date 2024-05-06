import { mode } from '~/utils/mode'

// Update to use environment variable
export function getSwotUrl(): string {
	if (mode === 'development') {
		return 'http://localhost:4200'
	} else if (mode === 'test') {
		return 'https://test.swot.zone'
	}

	return 'https://app.swot.zone'
}
