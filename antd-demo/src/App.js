import { Col, Layout, Row } from 'antd';
import Typewriter from 'typewriter-effect';
import { ReactSketchCanvas } from "react-sketch-canvas";
const { Content, Footer } = Layout;

const App = () => (
  <Layout className="">
    <Row>
      <Col span={8} className="peter">Home</Col>
      <Col className="navmenu supermargin">Work</Col>
      <Col className="navmenu">About</Col>
      <Col className="navmenu">Contact</Col>
    </Row>
    <Content
      
    >
         <div className="Tittle">ROKSANA PAT</div>
         <div className="subtitulo">
            
            <Typewriter
  options={{
    strings: ['UX designer', 'UX designer'],
    autoStart: true,
    loop: true,
  }}
/>
          </div>
          <div className="flechas"></div>
          <div>
            <ReactSketchCanvas
              className="canvas"
              strokeWidth={6}
              strokeColor="#CC7B7CCC"
              backgroundImage={require("./Canvaspuntosfondo.png")}
              height="866px"
            />
          </div>
    
    </Content>
   
   
   
   
   
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Roksana Patrzałek | Portfolio 2022
    </Footer>
  </Layout>
);

export default App;