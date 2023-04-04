import Header from "./Components/Header"
import Cart from "./Pages/Cart"
import Photos from "./Pages/Photos"
import {Routes, Route} from "react-router-dom"

export default function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Photos />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</div>
	)
}
