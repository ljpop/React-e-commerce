import Product from './Product'

const MainContent = ({ products }) => {
    return ( 
    <div className = 'main-content' > 

        <h2>Products</h2>
               
                <div className='products'>
                    {products.map((product)=>(<Product key={product.id} product={product}/>))}
                </div>
    </div>
   
)
}

export default MainContent