import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
import { StyledHeader, DivCentrado, H3, TopHeader } from "./Styles.js"
import { Skills } from "./Skills"
import { DivSecond, H1, H2 } from "./Styles"
import { Projects } from "./Projects"
import { useState } from "react"

const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 5px 10px 5px 10px;
	border-radius: 1px;
	border-bottom: ${(props) => (props.selected ? "2px #fff solid" : "none")};
	:hover {
		border-bottom: 2px #fff solid;
	}
`

export const Header = () => {
	const [selected, setselected] = useState({
		landing: false,
		contacto: false,
	})

	const seleccionnar = (elemento) => {
		switch (elemento) {
			case "landing":
				setselected({ landing: true, contacto: false })
				break
			case "contacto":
				setselected({ landing: false, contacto: true })
				break

			default:
				break
		}
		return
	}
	return (
		<div>
			<TopHeader />
			<StyledHeader>
				<H3>Gonzalo Bonilla</H3>

				<H3>
					<StyledLink
						selected={selected.landing}
						to={"/PortfolioReact"}
						onClick={() => {
							seleccionnar("landing")
						}}>
						My landing page
					</StyledLink>
				</H3>

				<H3>
					<StyledLink
						to={"/contacto"}
						selected={selected.contacto}
						onClick={() => {
							seleccionnar("contacto")
						}}>
						Contact Me
					</StyledLink>
				</H3>
			</StyledHeader>

			<DivCentrado>
				<Outlet />
			</DivCentrado>

			<DivSecond>
				<H1>I´m specialized in</H1>
				<Skills />
				<H2>Some of my projects</H2>
				<Projects />
			</DivSecond>
		</div>
	)
}
