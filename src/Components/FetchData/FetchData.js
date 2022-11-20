import { useState, useEffect } from "react";

const productApi = "https://fe-assignment.vaimo.net/";

function FetchData () {
    const [productData, setProductData] = useState({});

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        const response = await fetch(productApi);
        const jsonData = await response.json();

        console.log(jsonData);
        
        setProductData(jsonData);
    };   

    if (productData.success) {
        return (
            <div className="FetchData">
                <h5 className="info-item">{productData.product.name}</h5>
            </div>
        )
    } else {
        return (
            <div className="loader">
                <h5 className="info-item">ERROR</h5>
            </div>
        )
    }
}

export default FetchData;