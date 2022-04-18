import { DivFlotante } from "./Styles"
import { useState } from "react"
import { fadeIn } from "./animaciones"
export const BotonFlotante = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		})
	}

	window.addEventListener("scroll", toggleVisible)

	return (
		<DivFlotante className={fadeIn} visible={visible} onClick={scrollToTop}>
			Up
		</DivFlotante>
	)
}