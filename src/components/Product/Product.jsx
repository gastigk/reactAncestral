import './Product.css'
import {Link} from "react-router-dom"

const Product = ( {element} ) => {
    
    return (
        <div className="card">
            <h2>{element.name}</h2>
            <img src={element.img} alt="" />
            <h3>${element.price}</h3>
            <Link to={`/ProductDetail/${element.id}`}>Ver más</Link>
        </div>
    );
};

export default Product;