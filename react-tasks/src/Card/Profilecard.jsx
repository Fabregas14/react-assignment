import "./profilecard.css"

const Profilecard = ({image,name,para}) => {
    
    return ( 
        <div className="profilecard">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{para}</p>

        </div>
     );
};
 
export default Profilecard;