import { Container, Row, Col } from "react-bootstrap";
import Header from "./Layout/Header";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
    const arr = [
        {
            cat_name: "iphone"
        },
        {
            cat_name: "laptop"
        },
        {
            cat_name: "samsung"
        },
        {
            cat_name: "suzuki"
        },
        {
            cat_name:"baigain",
        },
        {cat_name:"gajar"},
        {cat_name:"tamtar"},
        {cat_name:"gobi"}



    ]
    return (
        <>

            <Header />
            <h1>Service Page</h1>
            <Container>
                <Row>
                    <Col md={3}>
                        <ul>
                            {
                                arr.map((ele, index) =>
                                    <li key={index} >
                                        <Link to={`${ele.cat_name}/vinay/yash/netra`}>{ele.cat_name}</Link>
                                    </li>
                                )
                            }
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