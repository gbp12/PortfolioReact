import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components"
import Contacto from "../pages/PageContact"
import { Main } from "../pages/PageLanding"

const Generalrouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index path="*" element={<Main />} />
					<Route path="/contacto" element={<Contacto />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Generalrouters
