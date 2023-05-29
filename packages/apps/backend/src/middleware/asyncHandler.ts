import { isPromise } from "util/types"

import type { NextFunction, Request, RequestHandler, Response } from "express"

export type TRequestAsyncHandler<
	TRequest extends Request = Request,
	TResponse extends Response = Response,
	TNextFunction extends NextFunction = NextFunction
> = (request: TRequest, response: TResponse, next: TNextFunction) => any | Promise<any>

export const asyncMiddleware = <
	TRequest extends Request = Request,
	TResponse extends Response = Response,
	TNextFunction extends NextFunction = NextFunction
>(
	handler: TRequestAsyncHandler<TRequest, TResponse, TNextFunction>
): RequestHandler => {
	return (request, response, nextFunction) => {
		try {
			const handlerResponse = handler(request as any, response as any, nextFunction as any)

			if (!handlerResponse) {
				nextFunction()
				return
			}

			if (isPromise(handlerResponse)) {
				handlerResponse
					.then((data) => {
						if (!data) {
							nextFunction()
							return
						}
						response.send(data)
					})
					.catch((error) => {
						nextFunction(error)
					})
				return
			}
			response.send(handlerResponse)
			return
		} catch (error) {
			nextFunction(error)
		}
	}
}
