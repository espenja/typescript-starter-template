import bodyparser from "body-parser"
import cors from "cors"
import express from "express"
import helmet from "helmet"

import { getEnv } from "@espenja/utilities/src/node/pickFromObject"

import { asyncMiddleware } from "../middleware/asyncHandler"

export const createServer = async () => {
	const config = getEnv((req) => ({
		env: req("NODE_ENV")
	}))

	if (config.env !== "production") {
		console.log("Loaded configuration", config)
	}

	console.log("Creating server")
	const app = express()

	app.use(bodyparser.urlencoded({ extended: true }))
	app.use(cors())
	app.use(helmet())

	app.get(
		"/",
		asyncMiddleware(async () => {
			return "Hello, World!"
		})
	)

	app.get(
		"/helloworld",
		asyncMiddleware(async () => {
			return {
				hello: "world"
			}
		})
	)

	const port = 3000
	app.listen(port, () => {
		console.log(`Running server at http://localhost:${port}`)
	})
}
