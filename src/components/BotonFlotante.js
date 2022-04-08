import { DivFlotante } from "./Styles"
import { useState } from "react"

export const BotonFlotante = () => {
	const [state, setstate] = useState("animate__animated animate__fadeIn animate__slow animate__delay-4s")
	const string = "</>"
	return (
		<DivFlotante
			className={state}
			onClick={() => {
				setstate("animate__animated animate__flip")
				setTimeout(() => {
					setstate("")
				}, 2000)
			}}>
			{string}
		</DivFlotante>
	)
}
