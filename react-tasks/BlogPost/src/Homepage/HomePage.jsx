import BlogProps from "../BlogProps";
import styled from "styled-components";
import Image1 from "../assets/Images/Ajibade.webp"
import Image2 from "../assets/Images/england.webp"
import Image3 from "../assets/Images/joshua.webp"
import Image4 from "../assets/Images/usxk.webp"


const Homepage = () => {
    return ( 
        <Main>
            <BlogProps Image={Image1} Time="31 Agẹmo 2024" Post="Japan dáná sun Super Falcons Nàìjíríà ráúráú nínú ìdíje Olympics saájú ìwọ́de 'ebi ń pa wá'"/>
            <BlogProps Image={Image2} Time="31 Agẹmo 2024" Post="England tún ṣubú dàánù lẹ́ẹ̀kan si, Spain pòko ìyà fún wọn gba ife ẹ̀yẹ EURO"/>
            <BlogProps Image={Image3} Time="22 Owewe 2024" Post="Anthony Joshua sọ̀rọ̀ lẹ́yìn tí Daniel Dubois fi ẹ̀ṣẹ́ àlùwó dá a dùbúlẹ̀"/>
            <BlogProps Image={Image4} Time="19 Èbibi 2024" Post="Usyk fẹ̀ṣẹ́ dárà sí Fury lójú láti gbadé ògo ẹ̀ṣẹ́ kíkàn lágbàáyé, Fury yarí pé òun lóun borí"/>
        </Main>
     );
}
export default Homepage;

const Main = styled.div`
    /* border: 1px solid; */
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    width: 85%;
    margin: 0px auto;
   
`