import Homepage from "./Homepage/HomePage";
import Header from "./Homepage/Header";
import styled from "styled-components";

const App = () => {
    return ( 
        <Main>
            <Header/>
            <Homepage/>
        </Main>
     );
}

export default App;

const Main=styled.div`
   /* background-color: red; */
   
`