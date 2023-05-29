/**
 * Combines a url with or without existing query parameters with additional query
 * parameters encoded for a URI (if encode is not defined or true).
 * @param url The base url to combine with, will remain unchanged.
 * @param data The additional data to append.
 */
export const makeQueryString = (url: string, data?: Record<string, unknown>) => {
	if (!data) return url

	const queryParameters: Array<string> = []

	for (const [key, value] of Object.entries(data)) {
		if (value === undefined) continue

		const safeName = encodeURIComponent(key)
		const valueIsObject = typeof value === "object"
		const safeValue = valueIsObject ? JSON.stringify(value) : value
		queryParameters.push(`${safeName}=${safeValue}`)
	}

	// If there are existing query parameters
	if (url.indexOf("?") >= 0) {
		return `${url}&${queryParameters.join("&")}`
	}

	return `${url}?${queryParameters.join("&")}`
}
