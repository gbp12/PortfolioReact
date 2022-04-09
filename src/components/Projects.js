import ecomerce from "../images/ecomerce.png"
import form from "../images/form.png"
import tracker from "../images/tracker.png"
import { ProjectImg, P, H1, ContainerProjects } from "./Styles"
import { fadeIn, fadeUp } from "./animaciones"
export const Projects = () => {
	return (
		<>
			<ContainerProjects>
				<H1 className={"wow " + fadeIn} titulo>
					My ecomerce
				</H1>

				<a className={"wow " + fadeUp} target="_blank" href="https://gbp12.github.io/ecommerce/">
					<ProjectImg src={ecomerce} />
				</a>
				<P description className={"wow " + fadeIn}>
					My ecormerce is a simple emulation of a little shop where we can add to the cart, remove one product, or complete the shopping. I
					build this with <b>react, redux and styled-components.</b>
				</P>
			</ContainerProjects>
			<ContainerProjects>
				<H1 className={"wow " + fadeIn} titulo>
					My Form
				</H1>
				<a className={"wow " + fadeUp} target="_blank" href="https://gbp12.github.io/formulario/">
					<ProjectImg src={form} />
				</a>
				<P description className={"wow " + fadeIn}>
					This project is just a responsive form build with <b>react, formik, styled-components and Yup</b> for the validations.
				</P>
			</ContainerProjects>
			<ContainerProjects>
				<H1 className={"wow " + fadeIn} titulo>
					My Champion Tracker
				</H1>
				<a className={"wow " + fadeUp} target="_blank" href="https://gbp12.github.io/Champ-Tracker/">
					<ProjectImg src={tracker} />
				</a>
				<P description className={"wow " + fadeIn}>
					I created a web app which get all the characters from League of Legends, you can filter them by role, and select yours to find out
					some information about it. Just used <b>React and Styled-components</b>.
				</P>
			</ContainerProjects>
		</>
	)
}
