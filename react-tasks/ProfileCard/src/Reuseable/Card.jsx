import "../Reuseable/Card.css"

const Card = ({Name,Location,Alias,Image}) => {
    return ( 
      <div className="Cards">
          <img src={Image} alt="" />
          <h1>{Name}</h1>
          <p id="Location"><b>Location</b> : {Location}</p>
          <p id="Alias"><b>Alias</b> : {Alias}</p>
          
      </div>
     );
}
 
export default Card;
