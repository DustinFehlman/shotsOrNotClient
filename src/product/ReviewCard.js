import React from "react";

export default function ReviewCard({review}) {
    return (
        <div className={"reviewList"}>
            <h3 className={""}>{review.user}</h3>
            <div className={"reviewInfo"}>
                <p>{review.text}</p>
            </div>
            <div className={"reviewRating"}>
                <h4 className={"reviewRatingHeader"}>Rating</h4>
                <h1 className={"reviewScore"}>{review.score}</h1>
            </div>
        </div>
    )
}