import {Component} from "react"
import {Link} from "react-router-dom"
import './index.css'

import Header from "../Header"
import LoadingPage from "../LoadingPage"
import ErrorPage from "../ErrorPage"

class Products extends Component {
    state = {productsList: [], productsLoading: false, ProductsError: false}

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        this.setState({productsLoading: true})
        const response = await fetch('https://fakestoreapi.com/products')
        if (response.ok === true) {
        const data = await response.json()
        this.setState({productsList: data, productsLoading: false, ProductsError: false})
        } else {
            this.setState({productsLoading: false, ProductsError: true})
        }
    }

    render() {
        const {productsList, productsLoading, ProductsError} = this.state

        const productsView = () => (
            <div className="products-main-cont" >
            <ul className="products-ul-elem">{
                productsList.map(eachProduct => (
                    <Link className="products-link-elem" key={eachProduct.id} to={`/products/${eachProduct.id}`}>
                        <li className="products-li-elem" key={eachProduct.id}>
                            <img className="products-img" src={eachProduct.image} alt={eachProduct.title} />
                            <p className="products-name">{eachProduct.title}</p>
                        </li>
                    </Link>
                ))
            }</ul>
            </div>
        )

        const productsUi = ProductsError ? (<ErrorPage clickRetry={this.getProducts}/>) : productsView()
        return(
            <div>
                <Header />
                {productsLoading ? (<LoadingPage />) : (productsUi)}
            </div>
        )
    }
}

export default Products