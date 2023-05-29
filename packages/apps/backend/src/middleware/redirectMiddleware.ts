import { RequestHandler } from "express"

import { makeQueryString } from "src/utils/makeQueryString"

/**
 * Creates a middleware that will perform redirect to the target upon request.
 * Status: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection
 * @param targetUrl
 * @param status
 */
export const redirectMiddleware =
	(targetUrl: string, status: 301 | 302 | 303 | 304 | 305 | 307 | 308 = 302): RequestHandler =>
	(req, res) => {
		if (req.method === "POST") {
			status = 307 // Redirect as a new post to the targetUrl
		}
		res.redirect(status, makeQueryString(targetUrl, req.query as any))
	}
