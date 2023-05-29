import React, { useState } from "react"

export const App = () => {
	const [count, setCount] = useState(0)

	const handleButtonClick = () => {
		setCount(count + 1)
	}

	return (
		<>
			<button onClick={handleButtonClick}>Click me!</button>
			<p>Hello, World! {count}</p>
		</>
	)
}
