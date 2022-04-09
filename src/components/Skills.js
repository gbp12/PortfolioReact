import { Div, ImgSkill } from "./Styles"
import { fadeLeft, fadeRight } from "./animaciones"
import { useEffect } from "react"
import WOW from "wowjs"
//logos de las skills
export const Skills = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init()
	}, [])

	return (
		<>
			<Div>
				<ImgSkill className={fadeLeft + " animate__slower animate__delay-4s"} src="https://cdn-icons-png.flaticon.com/512/174/174854.png" />
				<ImgSkill
					className={fadeLeft + " animate__slower  animate__delay-3s"}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
				/>
				<ImgSkill
					className={fadeLeft + " animate__slower animate__delay-2s"}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
				/>
				<ImgSkill
					className={fadeRight + " animate__slower animate__delay-2s"}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png"
				/>
				<ImgSkill
					className={fadeRight + " animate__slower animate__delay-3s"}
					src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
				/>
				<ImgSkill
					className={fadeRight + " animate__slower animate__delay-4s"}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
				/>
			</Div>
			<Div>
				<ImgSkill
					className={fadeLeft + " animate__slower animate__delay-4s"}
					src="https://res.cloudinary.com/escuela-frontend/image/upload/v1629831240/tags/npm_owh460.png"
				/>
				<ImgSkill
					className={fadeLeft + " animate__slower animate__delay-3s"}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
				/>
				<ImgSkill
					className={fadeLeft + " animate__slower animate__delay-2s"}
					src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
				/>
				<ImgSkill
					className={fadeRight + " animate__slower animate__delay-2s"}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJci6CMvZC_4J1CEhCjoTY4E8wL-jA0qPP-h561-y_RXPDBYKSgxkKPEL7VWPR8KGBgu4&usqp=CAU"
				/>
				<ImgSkill
					className={fadeRight + " animate__slower animate__delay-3s"}
					src="https://res.cloudinary.com/practicaldev/image/fetch/s--bvQtwOo5--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://reacttraining.com/images/blog/reach-react-router-future.png"
				/>
				<ImgSkill
					className={fadeRight + " animate__slower animate__delay-4s"}
					src="https://cdn-media-1.freecodecamp.org/images/1*p1TndLk3UsGPBsM7qHPZIw.png"
				/>
			</Div>
		</>
	)
}
