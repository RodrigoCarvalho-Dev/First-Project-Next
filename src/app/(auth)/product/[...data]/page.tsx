
import { Children, useState } from "react";
import { AddToCard } from "./addToCard-button";
import Test from "./test";


interface ProductProps {
    params : {
        data : string[]
    }
}



export default async function Product({ params } : ProductProps ){

    const response = await fetch('https://api.github.com/users/diego3g');
    const user = await response.json();

    const [ productID , producttSize ,  ProductColor ] = params.data;

    


    return (
        <h1>
            ID do produto: {productID } - Tamanho do produto: {producttSize} - Cor do produto: {ProductColor}

            <br />
            <br />  

                <AddToCard>
                <Test/>
                </AddToCard>
        </h1>
    );
}