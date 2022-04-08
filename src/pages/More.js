import { HMain, P, DivPreguntas } from "../components/Styles"

export const More = () => {
	const aparicion = "animate__animated animate__fadeInLeft animate__fast"
	const aparicion2 = "animate__animated animate__fadeInRight animate__fast"

	return (
		<DivPreguntas>
			<div>
				<HMain className={aparicion}>What do you do in your free time?</HMain>
				<P className={aparicion2}>
					Well, i usually like to be in my house maybe whatching some film or playing games or just hang out with some friends.
				</P>
			</div>
			<div>
				<HMain className={aparicion}>what are your professional goals?</HMain>
				<P className={aparicion2}></P>
			</div>
			<div>
				<HMain className={aparicion}>¿Cual es tu objetivo profesional a largo plazo?</HMain>
				<P className={aparicion2}> hola mundo</P>
			</div>
			<div>
				<HMain className={aparicion}>¿Cual es tu objetivo profesional a largo plazo?</HMain>
				<P className={aparicion2}>hola mundo</P>
			</div>
			<div>
				<HMain className={aparicion}>¿Cual es tu objetivo profesional a largo plazo?</HMain>
				<P>hola mundo</P>
			</div>
		</DivPreguntas>
	)
}
