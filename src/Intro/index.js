import "./index.css";
import newsImage from "../images/news_ill.svg";

const Intro = () =>
    <div className="intro">
        <div className="wrapper wrapper--mod">
            <img src={newsImage} alt="illustration"/>
            <div className="intro__description">
                <h1>Saiown</h1>
                <span>Get the latest Computer science and Entrepreneurship News</span>
            </div>
        </div>
    </div>

export default Intro;