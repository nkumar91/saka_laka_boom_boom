import { Container,Row,Col } from "react-bootstrap";
import Header from "./Layout/Header";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
    return (
        <>
        
            <Header />
            <h1>Service Page</h1>
            <Container>
                <Row>
                    <Col md={3}>
                        <ul>
                            <li><Link to="">Joota hai japani</Link> </li>
                            <li><Link to="iphone">Iphone</Link></li>
                            <li><Link to="samsung">Samsung</Link></li>
                            <li><Link to="japani">Lamborgini</Link></li>
                            <li><Link to="suzuki">Martui Suzuki</Link></li>
                            <li><Link to="japani">Mahindra</Link></li>
                            <li><Link to="laptop">laptop</Link></li>
                            <li><Link to="japani">Honda</Link></li>
                        </ul>
                    </Col>
                    <Col md={9}>
                    {/* <Outlet /> */}
                    </Col>
                </Row>
            </Container>

        </>
    )
}