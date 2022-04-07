import { HMain, P } from "../components/Styles"

export const Main = () => {
	return (
		<div>
			<HMain className={"animate__animated animate__fadeInUp animate__slow"}>Hello there, I´m Gonzalo Bonilla, front-end developer:</HMain>

			<P className={"animate__animated animate__fadeIn animate__slow animate__delay-1s"}>
				I have been learning and improving my programming and front-end skills for over 3 years, and it continues till this day.
			</P>

			<P className={"animate__animated animate__fadeIn animate__slow animate__delay-1s"}>
				I´m a curius person who want´s to learn constantly, this is why im interested in challenges.
			</P>

			<HMain bottom={true} className={"animate__animated animate__fadeInUp animate__slow "}>
				You can watch some of my projects below, and get my contact in the header.
			</HMain>
		</div>
	)
}
