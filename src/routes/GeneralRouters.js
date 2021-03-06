import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components"
import Contacto from "../pages/PageContact"
import { Main } from "../pages/PageLanding"
import { More } from "../pages/More"

const Generalrouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index path="/PortfolioReact" element={<Main />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/more" element={<More />} />
					<Route path="*" element={<h1> Error 404 </h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Generalrouters
