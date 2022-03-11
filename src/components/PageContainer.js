import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
import { StyledHeader, DivCentrado, H3, TopHeader } from "./Styles.js"
import { Skills } from "./Skills"
import { DivSecond, H1, H2 } from "./Styles"
import { Projects } from "./Projects"

const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 5px 10px 5px 10px;
	:hover {
		background-color: #fff;
		color: #231f2d;
	}
`

export const Header = () => {
	return (
		<div>
			<TopHeader />
			<StyledHeader>
				<H3>Gonzalo Bonilla</H3>

				<H3>
					<StyledLink to={"/main"}>My landing page</StyledLink>
				</H3>

				<H3>
					<StyledLink to={"/contacto"}>Contact Me</StyledLink>
				</H3>
			</StyledHeader>

			<DivCentrado>
				<Outlet />
			</DivCentrado>

			<DivSecond>
				<H1>I´m specialised in</H1>
				<Skills />
				<H2>Some of my projects</H2>
				<Projects />
			</DivSecond>
		</div>
	)
}
