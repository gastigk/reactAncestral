import "./Error.css"
import {Link} from "react-router-dom"

export const Error = () => {
    
    return (
        <div className="error">
            <h2>NOT FOUND</h2>
            <img className="error__img" src="../../assets/error.jpg" alt="error" />
            <h3>Sorry, but yu are looking for something that isn't here.</h3>
            <Link to="/">Volver al home</Link>
        </div>
    );
};
