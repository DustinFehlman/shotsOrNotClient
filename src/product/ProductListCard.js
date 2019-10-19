import React, {useState} from "react";

export default function ProductListCard({product, setView, setProduct}){
    return(
        <div className={"productListCard"}>
            <img width={"150"} src={product.imgUrl} onClick={() => {setView("ProductPage"); setProduct(product)}}/>
            <h3>{product.name}</h3>
            <p>{product.info}</p>
            <div>
                Rating: {getReviewRatings(product.reviews)}
            </div>
            <hr/>
        </div>
    );
}

function getReviewRatings(reviews){
    let totalScore = 0;
    reviews.forEach((review) =>{
        totalScore += review.score
    } )

    return totalScore / reviews.length
}
