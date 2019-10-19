import React from "react";
import ReviewCard from "./ReviewCard";

export default function ProductList({reviews}){
    return(
        <div className={"reviewList"}>
            {parseReviews(reviews)}
        </div>
    );
}

function parseReviews(reviews){
    const reviewList = [];
    reviews.forEach((item, ) => {
        reviewList.push(
            <div key={item.user}>
                <ReviewCard review={item}/>
                <hr/>
            </div>
        )
    });
    return reviewList;
}

