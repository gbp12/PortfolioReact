import { HMain, P } from "../components/Styles"

export const Main = () => {
	const aparicionDelay = "animate__animated animate__fadeIn animate__slow animate__delay-1s"
	const aparicionSlow = "animate__animated animate__fadeInUp animate__slow"
	return (
		<div>
			<HMain className={aparicionSlow}>Hello there, I´m Gonzalo Bonilla, Web Developer:</HMain>

			<P className={aparicionDelay}>I have been programming in web develoment for over 3 years, and it continues till this day.</P>

			<P className={aparicionDelay}>
				I´m a curius person who likes to learn constantly, this is why im interested in problem analisys and solution.
			</P>

			<HMain bottom={true} className={"animate__animated animate__fadeInUp animate__slow "}>
				You can watch some of my projects below, and get my contact in the header.
			</HMain>
		</div>
	)
}
