import Profilecard from "../Card/Profilecard";
import hamza from "../../assets/hamza.jpg"
import fulstack from "../../assets/fulstack.jpg"
import mit from "../../assets/mit.jpg"
import bae from "../../assets/bae.jpg"
import lanre from "../../assets/lanre.jpg"
import faruq from "../../assets/faruq.jpg"
import "./homeone.css"

const Home = () => {
    return (
        <div className="profilehome">
        <Profilecard name="Hamza"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi asperiores exercitationem ullam explicabo mollitia enim."
        image={hamza}/>
         <Profilecard name="fulstack"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi asperiores exercitationem ullam explicabo mollitia enim."
        image={fulstack}/>
         <Profilecard name="MIT"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi asperiores exercitationem ullam explicabo mollitia enim."
        image={mit}/>
         <Profilecard name="Adejumoke"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi asperiores exercitationem ullam explicabo mollitia enim."
        image={bae}/>
         <Profilecard name="Lanre"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi asperiores exercitationem ullam explicabo mollitia enim."
        image={lanre}/>
         <Profilecard name="faruq"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi asperiores exercitationem ullam explicabo mollitia enim."
        image={faruq}/>
        </div>
      );
}
 
export default Home;