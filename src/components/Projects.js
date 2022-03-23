import ecomerce from "../images/ecomerce.png"
import form from "../images/form.png"
import champTracker from "../images/champTracker.png"
import { ProjectImg, P2 } from "./Styles"
export const Projects = () => {
	return (
		<div>
			<P2>My ecomerce</P2>
			<a target="_blank" href="https://gbp12.github.io/ecommerce/">
				<ProjectImg src={ecomerce} />
			</a>
			<P2>My Form</P2>
			<a target="_blank" href="https://gbp12.github.io/formulario/">
				<ProjectImg src={form} />
			</a>
			<P2>My Champion Tracker</P2>
			<a target="_blank" href="https://gbp12.github.io/Champ-Tracker/">
				<ProjectImg src={champTracker} />
			</a>

		</div>
	)
}
