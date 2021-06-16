/** @format */

import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<section className="navbar">
			<div className="navbar__container">
				<div className="navbar__logo">
					<Link to="/" className="navbar__logo">
						logo
					</Link>
				</div>
				<div>
					<ul className="navbar__items">
						<li>
							<Link to="/login" className="navbar__item">
								login
							</Link>
						</li>
						<li>
							<Link to="/cart" className="navbar__item">
								Cart
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
export default Navbar
