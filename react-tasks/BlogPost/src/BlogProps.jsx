// import styled from "styled-components";
import styled from "styled-components";


const BlogProps = ({Image,Time,Post}) => {
    return ( 
        <Section>
            <img src={Image} alt="" />
            <p>{Time}</p>
            <p id="Post"><i>{Post}</i></p>

        </Section>
     );
}
export default BlogProps;

const Section=styled.div`
    
    border-radius: 10px;
    width: 500px; 
    margin: 20px 0px ;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;;

    img{
        width: 100%;
        border-radius: 10px;
    }
`