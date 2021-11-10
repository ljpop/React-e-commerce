const Product = ({product}) => {
    return ( 
    <div className='product'>
        <h3>{product.text}</h3>
        <p>{product.price}</p>

    </div>
    )
}

export default Product