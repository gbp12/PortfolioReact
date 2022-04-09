import { HMain, P } from "../components/Styles"
import { fadeUp } from "../components/animaciones"
export const Main = () => {
	return (
		<div>
			<HMain className={fadeUp}>Hello there, I´m Gonzalo Bonilla, Web Developer:</HMain>

			<P className={fadeUp + " animate__delay-1s"}>
				I have been programming in web develoment for over 3 years, and it continues till this day.
			</P>

			<P className={fadeUp + " animate__delay-1s"}>
				I´m a curius person who likes to learn constantly, this is why im interested in problem analisys and solution.
			</P>

			<HMain bottom={true} className={fadeUp}>
				You can watch some of my projects below, and get my contact in the header.
			</HMain>
		</div>
	)
}
