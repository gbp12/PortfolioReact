import ecomerce from "../images/ecomerce.png"
import { ProjectImg, P2 } from "./Styles"
export const Projects = () => {
	return (
		<div>
			<P2>My ecomerce</P2>
			<a href="#">
				<ProjectImg src={ecomerce} />
			</a>
		</div>
	)
}
