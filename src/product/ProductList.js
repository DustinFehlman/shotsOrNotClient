import React, {useState} from "react";
import products from "./productFetcher"
import ProductListCard from "./ProductListCard";

export default function ProductList({setView, setProduct}){
    return(
        <div>
            {parseProducts(setView, setProduct)}
        </div>
    );
}

function parseProducts(setView, setProduct){
    const productList = [];
    products().forEach((item) => {
        productList.push(
            <div key={item.name}>
                <ProductListCard product={item} setProduct={setProduct} setView={setView}/>
            </div>
        )
    });
    return productList;
}

