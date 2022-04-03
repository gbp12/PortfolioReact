import styled from "styled-components"
import "animate.css"

export const DivSecond = styled.div`
	margin-top: 30vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	@media only screen and (max-width: 600px) {
		margin-top: 10vh;
	}
`

export const H1 = styled.h1`
	background-color: #4b4656;
	color: #fff;
	width: 55%;
	text-align: center;
	border-radius: 25px;
	@media only screen and (max-width: 600px) {
		width: 100%;
		border-radius: 0px;
	}
`

export const H2 = styled(H1)`
	width: 75%;
	margin-top: 15%;
	padding-top: 5px;
	padding-bottom: 10px;
	@media only screen and (max-width: 600px) {
		width: 100%;
	}
`

export const H3 = styled.h3`
	color: #fff;
	margin-top: auto;
	padding: 20px 30px 10px 30px;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	@media only screen and (max-width: 500px) {
		font-size: 10px;
		padding: 10px 10px 10px 10px;
	}
`

export const HMain = styled(H3)`
	margin-top: 5%;
	color: #231f2d;
	font-size: 30px;
	@media only screen and (max-width: 500px) {
		font-size: 20px;
	}
`

export const P = styled.p`
	color: #4b4656;
	font-size: 20px;
	padding-left: 30px;

	@media only screen and (max-width: 600px) {
		font-size: 15px;
	}
`

export const P2 = styled(P)`
	text-align: center;
	padding-left: 0px;
	padding-right: 0px;
`

export const Div = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`

export const DivContact = styled(Div)`
	margin-top: 20%;
`

export const Img = styled.img`
	width: 90px;
	@media only screen and (max-width: 600px) {
		width: 50px;
		height: 50px;
	}
`

export const ImgContact = styled(Img)`
	padding-top: 5px;

	:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 600px) {
		width: 60px;
		height: auto;
	}
`

export const Rotation = styled(Img)`
	animation-name: rotation;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-duration: 8s;
	width: 160px;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@media only screen and (max-width: 600px) {
		width: 80px;
	}
`

export const StyledHeader = styled.header`
	background-color: #4b4656;
	width: auto;
	display: flex;
	justify-content: space-around;
	position: relative;
`

export const DivCentrado = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`

export const TopHeader = styled.div`
	background-color: #231f2d;
	height: 1vh;
`

export const ProjectImg = styled.img`
	width: 500px;
	border: 5px solid #4b4656;
	:hover {
		transition: transform 0.2s linear;
		transform: scale(1.15);
	}

	align-items: center;
	@media only screen and (max-width: 500px) {
		width: 80%;
		margin-left: 10%;
	}
`
