import './Homeiii.css'
import Blogpost from '../blogpost/Blogpost'
import Hojlund from "../../assets/Hojlund.jpg.webp"
import Zirkzee from "../../assets/Zirkzee.jpg"
import psg from "../../assets/psg.jpg"
import liverpool from "../../assets/liverpool.jpg"
import Palmer from "../../assets/Palmer.jpg.webp"


const Link = () => {
    return ( 
        <div className='blogg'>
            <Blogpost image={Zirkzee}
            title="ffff" 
            author="name of author"
            content="content"
            date="date"/>
             <Blogpost image={psg}
            title="ffff" 
            author="name of author"
            content="content"
            date="date"/>
             <Blogpost image={liverpool}
            title="ffff" 
            author="name of author"
            content="content"
            date="date"/>
             <Blogpost image={Hojlund}
            title="ffff" 
            author="name of author"
            content="content"
            date="date"/>
             <Blogpost image={Palmer}
            title="ffff" 
            author="name of author"
            content="content"
            date="date"/>
             
        </div>
     );
}
 
export default Link;