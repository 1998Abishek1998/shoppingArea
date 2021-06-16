/** @format */

import React from "react"

const ProductCard = ({ product }) => {
	return (
		<div className="product">
			<div className="product__container">
				<div className="product__img">
					<img src={product.image} alt={product.name} />
				</div>
				<div className="product__info">
					<h4>{product.brand}</h4>
					<h5>{product.name}</h5>
					<h6>{product.rating}</h6>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
