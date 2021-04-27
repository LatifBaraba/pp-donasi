import Header from '../header/header'
import Footer from '../footer/footer'

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout