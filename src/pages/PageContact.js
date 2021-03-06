import { ImgContact, DivContact, P2 } from "../components/Styles"
import { useState } from "react"
import styled from "styled-components"
import { fadeDown, fadeUp } from "../components/animaciones"

var mail = "Mail me at gonzalobonilla2709@gmail.com"
var discord = "Message me in discord: Gonsalo#9106"
var tlf = "Message me at 609 95 36 87"

const Div = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
`

const Contacto = () => {
	const [valor, setValor] = useState("")

	const Aparition = (tipo) => {
		if (valor === tipo) {
			setValor("")
		} else {
			switch (tipo) {
				case mail:
					setValor(mail)
					break

				case discord:
					setValor(discord)
					break

				case tlf:
					setValor(tlf)
					break
			}
		}
	}

	return (
		<div>
			<P2>You can contact me by:</P2>

			<DivContact className={fadeDown}>
				<ImgContact
					src="https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png"
					onClick={() => {
						Aparition(mail)
					}}
				/>

				<a target="blank" href="https://www.linkedin.com/in/gonzalo-bonilla-p%C3%A9rez-8a6a831b1/">
					<ImgContact src="https://logos-marcas.com/wp-content/uploads/2020/04/Linkedin-s%C3%ADmbolo.png" />
				</a>
			</DivContact>
			<DivContact className={fadeUp}>
				<a target="blank" href="https://github.com/gbp12">
					<ImgContact src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />{" "}
				</a>
				<ImgContact
					src="https://i.pinimg.com/originals/20/27/3c/20273cfda041b47e89e057a4c2296928.png"
					onClick={() => {
						Aparition(tlf)
					}}
				/>
			</DivContact>

			<Div>
				<P2>{valor}</P2>
			</Div>
		</div>
	)
}

export default Contacto
