import { useEffect, useState } from "react"
import { Container, Row,Col } from "react-bootstrap"
import EffectKaro from "./EffectKaro";

export default function Effect() {
  const [r, setR] = useState([]);
  const [id,setId] = useState();
  //setData(90)
  const url = "https://reqres.in/api/users?page=2"

  async function callApi() {
    const res = await fetch(url)
    const response = await res.json();
    setR(response.data);
  }

  useEffect(function () {
    callApi();
  }, [])   // []  dependendecy


  function singleUser(emp_id){
    setId(emp_id)
  }

  return (
    <>
     <Container>
      <Row>
        <Col md={3}>
        {
        r.map(e =>
          <div style={{cursor:"pointer"}} onClick={()=>singleUser(e.id)}>
            <p>{e.first_name} <img src={e.avatar} width={100} height={100}></img></p>
          </div>
        )
      }
        </Col>
        <Col md={9}>
          <EffectKaro   monko = {id} />
        </Col>
      </Row>
     </Container>

   
     



    </>
  )
}