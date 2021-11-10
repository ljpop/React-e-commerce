import { FaShoppingCart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <div> 
                <h1><span>Eco</span>mmerce</h1>
            </div>
            <div >
                <form >
                    <input type="text" placeholder="Search.." name="search" />
                    <button ><FaSearch style={{color:'mediumaquamarine', fontSize: '24px', fontWeight: '300'}} /></button>
                </form>
            </div>
            <div>
            <FaShoppingCart style={{backgroundColor:'white', color: 'black', fontSize: '24px', cursor:'pointer'}} onClick={()=>console.log('OBRISI')}/>
            </div>
           
            
        </header>
    )
}

export default Header
