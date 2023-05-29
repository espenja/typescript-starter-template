import { defineConfig, Options, build as tsupBuild } from "tsup"

const config = defineConfig({
	entry: ["src/index.ts"],
	splitting: true,
	sourcemap: true,
	clean: true
}) as Options

const build = async () => {
	tsupBuild(config)
}

build().catch((error) => {
	console.error(error)
	process.exit(1)
})
