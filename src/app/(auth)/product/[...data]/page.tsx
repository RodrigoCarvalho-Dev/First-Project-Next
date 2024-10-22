'use client';


interface ProductProps {
    params : {
        data : string[]
    }
}



export default function Product({ params } : ProductProps ){
    const [ productID , producttSize ,  ProductColor ] = params.data;
    
    return (
        <h1>
            ID do produto: {productID } - Tamanho do produto: {producttSize} - Cor do produto: {ProductColor} 
        </h1>
    );
}