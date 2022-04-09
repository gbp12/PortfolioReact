import { HMain, P, DivPreguntas } from "../components/Styles"
import { fadeLeft, fadeRight } from "../components/animaciones"
export const More = () => {
	return (
		<DivPreguntas>
			<div>
				<HMain className={fadeLeft + " animate__faster"}>What do you do in your free time?</HMain>
				<P className={fadeRight + " animate__faster"}>
					Well, i usually like to be in my house maybe watching some film or playing games or just hang out with some friends.
				</P>
			</div>
			<div>
				<HMain className={fadeLeft + " animate__faster"}>which are your soft skills?</HMain>
				<P className={fadeRight + " animate__faster"}>
					Actually i think that i'm a pretty good communicator, also i'm creative and i feel pretty well working in teams.
				</P>
			</div>
		</DivPreguntas>
	)
}
