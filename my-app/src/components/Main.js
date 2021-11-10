import Menu from './Menu'
import MainContent from './MainContent'

const Main = ({products}) => {
    return (
        <main >
            <Menu />
            <MainContent products={products} />
        </main>
    )
}

export default Main
