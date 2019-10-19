import React, {useState} from "react";
import ProductReviewList from "./ProductReviewList";

export default function ProductPage({product}) {
    return (
        <div className={"productPage"}>
            <div className={"productHeader"}>
                <img width={"150"} src={product.imgUrl}/>
                <div className={"productPageInfoContainer"}>
                    <h3 className={"productPageHeader"}>{product.name}</h3>
                    <div className={"productPageInfo"}>
                        <p>{product.info}</p>
                    </div>
                </div>
                <div className={"rating"}>
                    <h4 className={"ratingLabel"}>Rating</h4>
                    <h1 className={"ratingNumber"}>{getReviewRatings(product.reviews)}</h1>
                </div>
            </div>
            <div className={"reviewsContainer"}>
                <h3>Reviews</h3>
                <hr/>
                <div>
                    <ProductReviewList reviews={product.reviews}/>
                </div>
            </div>
        </div>
    )
}

function getReviewRatings(reviews){
    let totalScore = 0;
    reviews.forEach((review) =>{
        totalScore += review.score
    } )

    return totalScore / reviews.length
}