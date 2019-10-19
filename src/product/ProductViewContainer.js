import React, {useState} from "react";
import ProductPage from "../product/ProductPage";
import ProductList from "../product/ProductList.js"

export default function ProductViewContainer(){
    const [view, setView] = useState("ProductList");
    const [product, setProduct] = useState(null);

    return(
        <div className={"view"}>
            {view === "ProductList" && <ProductList setProduct={setProduct} setView={setView}/>}
            {view === "ProductPage" && <ProductPage  product={product}/>}
        </div>
    );
}
