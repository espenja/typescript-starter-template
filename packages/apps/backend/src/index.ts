import "@espenja/utilities/src/node/loadDotEnv"
import { createServer } from "./server/createServer"

const start = async () => {
	await createServer()
}

start().catch((err) => {
	console.error(err)
})
