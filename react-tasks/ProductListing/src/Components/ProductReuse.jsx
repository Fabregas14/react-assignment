import '../Components/ProductReuse.css'

const Product = ({Image,ProductNAme,Price,Description}) => {
    return ( 
        <div className="ProductCard">
            <img src={Image} alt="" />
            <h1>{ProductNAme}</h1>
            <p>{Price}</p>
            <p>{Description}</p>
        </div>
     );
}
 
export default Product;
