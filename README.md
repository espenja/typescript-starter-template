# What is this?

This is a TypeScript starter project with a monorepo workspace in pnpm.

Workspace is setup with separation of concerns in mind:

- Projects that can be run live under the `packages\apps` directory
- Projects that function more as libraries live under the `packages\libs` directory

## Backend

A simple backend is setup in the `packages\apps\backend` directory.  
The `build` script typechecks the project with `tsc` and bundles the project with `tsup`  
The `dev` script runs the server with `nodemon`, providing reloads when files are changed.

### Debugging

The `.vscode` folder contains a `launch.json` and `tasks.json`, providing debug launch options for `VS Code` using `ts-node` with `swc` as the transpiler, making it a lot faster than using the default `ts-node` with `tsc` option. Since `swc` does not do typechecking, a typechecking task using `tsc` is setup to run continuously in an additional terminal, providing quick feedback for type errors.

## Frontend

A simple frontend is setup in the `packages\apps\frontend` directory, using `vite` and `react`.  
The `build` script typechecks the project with `tsc` and bundles the project using `vite`

- Starter project for backend with `express` and `nodemon` for reloading, build using `tsup`, debugging with `ts-node` and `swc`.
- Starter project for frontend with `react` and `vite`.
- Build, debug and typechecking tasks setup for VSCode.
- Linting setup with `eslint`, linting tasks for all projects.
