import './Hometwo.css'
import Product from '../productpricing/product'
import totalstation from '../../assets/totalstation.jpeg'
import stand from '../../assets/stand.jpeg'
import lasers from '../../assets/lasers.jpeg'
import measuringtape from '../../assets/measuringtape.jpeg'
import rangingrod from '../../assets/rangingrod.jpeg'

const Hometwo = () => {
    return ( 
        <div className='product'>
            <Product image={totalstation} name="Totalstation" description="A total station or total station theodolite is an electronic/optical instrument used for surveying and building construction." price="$150"/>
            <Product image={rangingrod} name="RangingRod" description="A ranging rod (or range rod) is a surveying instrument used for marking the position of stations." price="$12"/>
            <Product image={lasers} name="Laser" description="A laser is a coherent and focused beam of photons;" price="$35"/>
            <Product image={stand} name="TS Stand" description="A reliable total station tripod resists vibrations and prevents even the slightest movement," price="$35"/>
            <Product image={measuringtape} name="Tape" description="Surveying tapes are measuring tools used in land surveying to measure distances." price="$10"/>
        </div>
    );
}
 
export default Hometwo;