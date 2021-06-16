/** @format */
import React from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SingleProduct from "./pages/SingleProduct"
import LoginRegister from "./pages/LoginRegister"
import Footer from "./components/Footer"
import "./dist/style.css"
import Cart from "./pages/Cart"

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/singleProduct/:slug" component={SingleProduct} />
				<Route exact path="/login" component={LoginRegister} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
