import React from "react";
import '../App.css'

import { 
    Container,
    Row,
    Col,
    Image 
} from "react-bootstrap";

export default function Stores(){
    return(
        <Container style={{ marginTop: "40px", textAlign: "center"}}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Col>
                    <Col xs=".5" >
                        <Image className="circles" src='/goat.png' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>HORNY GOAT</h5>
                        <p>VIA EMAIL</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col >
                    <Col xs=".5">
                        <Image className="circles" src='kith.png' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>YO LOOK AT MY SIGN</h5>
                        <p>Delivery</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col >
                    <Col xs=".5" >
                        <Image className="circles" src='proper.png' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Ben & Gerald's</h5>
                        <p>PICK UP</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}