import './index.css'

const ErrorPage = (props) => {
    const {clickRetry} = props 

    return (
        <div className='error-cont'>
            <img 
                className='error-image'
                src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                alt="error" 
            />
            <h1 className='error-text'>Oops! Something went Wrong</h1>
            <button className='error-btn' type='button' onClick={clickRetry} >Retry</button>
        </div>
    )
}

export default ErrorPage