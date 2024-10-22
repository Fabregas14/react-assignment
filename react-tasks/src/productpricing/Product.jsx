import "./Product.css"

const Product = ({image,name,price,description}) => {
    
    return ( 
        <div className="Product">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p id="price">{price}</p>
            <p id="description">{description}</p>

        </div>
     );
}
 
export default Product;