import { Div, Img, Rotation, ImgSkill } from "./Styles"

//logos de las skills
export const Skills = () => {
	return (
		<Div>
			<ImgSkill
				className={"animate__animated animate__fadeInLeft animate__slow animate__delay-5s"}
				src="https://w7.pngwing.com/pngs/47/692/png-transparent-responsive-web-design-html-logo-world-wide-web-angle-text-rectangle-thumbnail.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInLeft animate__slow animate__delay-4s"}
				src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInLeft animate__slow animate__delay-3s"}
				src="https://serobo.com/assets/img/javascript2.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInRight animate__slow animate__delay-3s"}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInRight animate__slow animate__delay-4s"}
				src="https://w1.pngwing.com/pngs/1002/616/png-transparent-python-logo-programming-language-computer-programming-professional-python-highlevel-programming-language-scripting-language-data-type-php-thumbnail.png"
			/>
			<ImgSkill
				className={"animate__animated animate__fadeInRight animate__slow animate__delay-5s"}
				src="https://w7.pngwing.com/pngs/705/814/png-transparent-github-repository-commit-bitbucket-github-angle-orange-logo-thumbnail.png"
			/>
		</Div>
	)
}
