
const ProductCard = ({key, product}) => {

    return(
        <ul className="card">
            <p>{product.category}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </ul>
    )
}

export default ProductCard;