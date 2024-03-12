import React , {useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa6"
import './index.css'
import Header from '../Header'
import ErrorPage from "../ErrorPage"
import LoadingPage from "../LoadingPage"

const ProductItem = () => {
    const [productData, setProductData] = useState({});
    const [productLoading, setProductLoading] = useState(false)
    const [productError, setProductError] = useState(false)
    const [productRating, setProductRating] = useState(0)
    const [productCount, setProductCount] = useState(0)

    useEffect(() => {
        getProductDetails();
    }, []);
    const params = useParams()
    const getProductDetails = async () => { 
        setProductLoading(true)
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const data = await response.json()
            if (response.ok === true) {
                setProductData(data)
                setProductLoading(false)
                setProductError(false)
                setProductRating(data.rating.rate)
                setProductCount(data.rating.count)
            } else {
                setProductError(true)
                setProductLoading(false)
            }  
        }  catch (error) {
            setProductError(true)
            setProductLoading(false)
        } 
    } 

    
    const productView = () => (
        <div className="product-main-cont">
            <img className="product-image" src={productData.image} alt={productData.title} />
            <div className="product-main-sub-cont">
                <h1 className="product-title">{productData.title}</h1>
                <p className="product-price">RS {productData.price}</p>
                <div className="product-rating-cont">
                    <div className="product-sub-rating-cont">
                        <p className="product-rating">{productRating}</p>
                        <FaStar className="product-rating-icon" />
                    </div>
                    <p className="product-count">{productCount} count</p>
                </div>
                <p className="product-description">{productData.description}</p>
                <p className="product-category"><span className="product-category-span">Category: </span>{productData.category}</p>
            </div>
        </div>
    )
    const productUi = productError ? (<ErrorPage clickRetry={getProductDetails} />) : (productView())

    return(
        <div>
            <Header />
            {productLoading ? (<LoadingPage />) : (productUi)}
        </div>
    )
}

export default ProductItem