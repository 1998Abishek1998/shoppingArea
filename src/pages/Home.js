/** @format */

import React from "react"

import ProductCard from "../components/ProductCard"
import data from "../data"

const Home = () => {
	return (
		<div className="page">
			<section className="component">
				{data.products.map((product) => (
					<ProductCard product={product} key={product._id} />
				))}
			</section>
		</div>
	)
}

export default Home
