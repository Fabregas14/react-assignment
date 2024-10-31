import Card from "../Reuseable/Card";
import Imageone from "../assets/Images/Fullstack.jpeg";
import Imagetwo from "../assets/Images/Gustavonew.jpeg"
import Imagethree from "../assets/Images/Ademolanew.jpeg"
import Imagefour from "../assets/Images/MiT.jpg"
import Imagefive from "../assets/Images/Faruk.jpeg"
import Imagesix from "../assets/Images/hamzah.jpeg"
import "../Homepage/Home.css"
const Homepage = () => {
    return (  
        <main>
            <h1 id="mainHeading">Meet the Team</h1>
          <div className="CardImages">
              <Card Name="Jide" Location="Lasgidi" Alias="FullStack" Image={Imageone}/>
              <Card Name="Rashidah" Location="Lasgidi" Alias="Gustavo" Image={Imagetwo}/>
              <Card Name="Ademola" Location="Lasgidi" Alias="EventDeco " Image={Imagethree}/>
              <Card Name="Taiwo" Location="Lasgidi" Alias="MiT" Image={Imagefour}/>
              <Card Name="Farouk" Location="Lasgidi" Alias="React" Image={Imagefive}/>
              <Card Name="Lanre" Location="Lasgidi" Alias="Olotu" Image={Imagefive}/>
              <Card Name="Hamza" Location="Lasgidi" Alias="Honourable" Image={Imagesix}/>
          </div>

        
        </main>
    );
}
 
export default Homepage
