import arklogo from "../assets/arklogo.png"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"



const Header = () =>{
    return (
        <Container>
            <Image className="map-logo" src={arklogo}></Image>
            <h1 className="my-2 font-monospace display-4 fw-bold">All map of ark</h1>
        </Container>
    )
}

export default Header;