import styled from "styled-components";
import { FcBbc } from "react-icons/fc";

const Header = () => {
    return ( 
        <Nav>
            <FcBbc className="Img"/>
            <h1>NEWS YORUBA</h1>
        </Nav>
     );
}
 
export default Header;

const Nav=styled.div`
    background-color: #b80000;
    height: 70px;
    /* border: 1px solid; */
    display: flex;
    align-items: center;

    h1{
        color: white;
    }
    .Img{
        color: white;
        font-size: 90px;
        margin-right: 20px;
        margin-left: 90px;
    }
`
