import ProductReuse from "../Components/ProductReuse.jsx"
import MenCasual from "../assets/Images/mencasual.jpg"
import Sandals from "../assets/Images/sandals.jpg"
import Fashionshoe from "../assets/Images/fashionShoes.jpg"
import  WomenCasual from "../assets/Images/womenshoes.jpg"
import Beachwear from "../assets/Images/beachwear.jpg"
import WomenBreathe from "../assets/Images/breathewomen.jpg"
import "./Homepage.css"
import Button from "../Components/Button.jsx"
const Homepage = () => {
    return ( 
        <div className="section">
            <h1>Fashion Forward Deals</h1>
           
            <div className="ProductItems">
                <div className="products">
                    <ProductReuse Image={MenCasual} ProductNAme="Men's Casual" Price="$4.58" Description="Men's casual buisness dual purpose shirt"/>
                    <Button Name="ADD TO CART"/>
                </div>
                <div className="products">
                    <ProductReuse Image={Sandals} ProductNAme="Men's Palm Sandals" Price="$2.35" Description="Men's Palm Sandal leather shoes"/>
                    <Button Name="ADD TO CART"/>
                </div>
                <div className="products">
                    <ProductReuse Image={Fashionshoe} ProductNAme="Men's Fashion Shoes" Price="$1.38" Description="Men's Fashio shoe flyinh mesh"/>
                    <Button Name="ADD TO CART"/>
                </div>
                <div className="products">
                    <ProductReuse Image={WomenCasual} ProductNAme="Women's Casual Shoes" Price="$10.01" Description="Women's casual running shoes"/>
                    <Button Name="ADD TO CART"/>
                </div>
                <div className="products">
                    <ProductReuse Image={Beachwear} ProductNAme="Women's beach Wear" Price="$4.58" Description="Men's casual buisness dual purpose shirt"/>
                    <Button Name="ADD TO CART"/>
                </div>
                <div className="products">
                    <ProductReuse Image={WomenBreathe} ProductNAme="Kitty2Cool" Price="$3.28" Description="Women's breatheable shoes"/>
                    <Button Name="ADD TO CART"/>
                </div>
            </div>
           
        </div>
     );
}
 
export default Homepage
