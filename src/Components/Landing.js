import "./Landing.css"
import { Link } from 'react-router-dom'


export default function Landing() {

    return (
        <div className="main" style={{
            backgroundImage: `url("/images/landing/Landing\ page\ background\ gradient.png")`
        }}>
            <div className="header">
                <div className="nav-bar" width="346px" height="30px" style={{
                    backgroundImage: `url("/images/Nav\ Bar_landing\ page.png")`
                }}></div>
            </div>
            <div className="upper-content">
                <div className="title">Facebook events without Facebook.</div>
                <div className="sub-title">Easily host and share events with your friends across any social media.</div>
            </div>
            <div className="create-btn" style={{
                backgroundImage: `url("/images/Create\ event\ button.png")`
            }}><Link className="create-btn" to="/create"></Link></div>
            <div className="lower-content" >
                <div className="icon-group" style={{
                    backgroundImage: `url("images/Social Media icons.png")`
                }}></div>
                <div className="left-img" style={{
                    backgroundImage: `url("images/Product Image _ Left.png")`
                }}></div>
                <div className="middle-img" style={{
                    backgroundImage: `url("images/Product Image _ Middle.png")`
                }}></div>
                <div className="right-img" style={{
                    backgroundImage: `url("images/Product Image _ Right.png")`
                }}></div>
            </div>





        </div>
    )
}