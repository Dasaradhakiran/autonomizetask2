import "./index.css"
import Header from "../Header"

const NotFound = () => (
    <div>
        <Header />
        <div className="not-found-cont">
            <img className="not-found-image" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" alt="not-found" />
            <h1 className="not-found-head">Page Not Found</h1>
            <p className="not-found-text">We are sorry, the page you requested could not be found.</p>
        </div>
    </div>
)

export default NotFound