import React from "react"
import i from './h1.jpg'
import './Crol.css'
import { Container, Row, Col } from 'react-bootstrap';

function Crol()

{
    return (
      <>
        <div className="bgimg">
          <img src={i} alt="img" className="w-100 h-100" style={{ zIndex: -1 }} />
          <div className="container text-center">
            <div className="typewriter">
              <h1 style={{fontSize:'45px'}}>Your dream retreat awaits</h1>
              <h2 className="sub-heading" style={{fontSize:'45px'}}>Secure your stay at our exquisite hotel today</h2>
            </div>
          </div>
        </div>
        {/* <div className="animate-on-hover">
          <Container fluid>
            <Row>
              <Col sm={12} className="my-4 abc d-flex flex-column justify-content-center align-items-center">
                <h1 className="head3">𝙾𝚗𝚎 𝚝𝚑𝚒𝚗𝚐 𝚢𝚘𝚞 𝚗𝚎𝚎𝚍 𝚝𝚘 𝚔𝚗𝚘𝚠 𝚒𝚜,</h1>
                <h2 className="head3">𝐘𝐎𝐔 𝐀𝐑𝐄 𝐍𝐎𝐓 𝐀𝐋𝐎𝐍𝐄!</h2>
              </Col>
            </Row>
          </Container>
        </div> */}
      </>
    );
  }
  
  export default Crol;