import { Div, Img, Rotation, ImgSkill } from "./Styles"

//logos de las skills
export const Skills = () => {
	return (
		<Div>
			<ImgSkill
				className={"animate__animated animate__fadeInLeft animate__slow animate__delay-5s"}
				src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInLeft animate__slow animate__delay-4s"}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInLeft animate__slow animate__delay-3s"}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInRight animate__slow animate__delay-3s"}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInRight animate__slow animate__delay-4s"}
				src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInRight animate__slow animate__delay-5s"}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
			/>
		</Div>
	)
}
