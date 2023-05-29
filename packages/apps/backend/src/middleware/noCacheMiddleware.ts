import { asyncMiddleware } from "./asyncHandler"

/**
 * This middleware prevents all browser-caching of the current request.
 */
export const noCacheMiddleware = asyncMiddleware((req, res) => {
	if (!res.headersSent) {
		res.removeHeader("etag")
		res.setHeader("Cache-Control", "no-store,no-cache")
	}
})
