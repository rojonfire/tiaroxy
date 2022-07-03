import * as React from "react";
import { Col, Layout, Row } from "antd";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { motion } from "framer-motion";
const { Content, Footer } = Layout;

function App() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);
  const [cursorVariant, setCursorVariant] = React.useState("default");
  const [data, setData] = React.useState("");
  const [work, setWork] = React.useState(false);
  const [abrir, setAbrir] = React.useState("");
  const [contact, setContact] = React.useState(false);
  const [about, setAbout] = React.useState(false);
  const handleWork = () => {
    setWork(true);
    setAbout(false);
    setContact(false);
  };

  const handleAbout = () => {
    setAbout(true);
    setWork(false);
    setContact(false);
  };

  const handleContact = () => {
    setContact(true);
    setAbout(false);
    setWork(false);
  };

  const handleApagon = (e) => {
    setWork(false);
    setAbout(false);
    setContact(false);
  };

  React.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x - 25.5, // se le tiene que restar la mitad de lo largo del nuevo icono
      y: mousePosition.y - 25.5,
    },
    text: {
      x: mousePosition.x - 25.5, // se le tiene que restar la mitad de lo largo del nuevo icono
      y: mousePosition.y - 25.5,
      backgroundColor: "#CC7B7C",
    },
    tilin: {
      x: mousePosition.x, // se le tiene que restar la mitad de lo largo del nuevo icono
      y: mousePosition.y,
      height: 0,
      width: 0,

      border: "transparent",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const texttilin = () => setCursorVariant(["tilin"]);
  const textLeave = () => setCursorVariant("default");

  return (
    <Layout className="">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <Row>
        <Col span={8} className="peter">
          <span
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={handleApagon}
            to="/"
          >
            Home{" "}
          </span>
        </Col>
        <Col className="navmenu supermargin">
          {" "}
          <Link
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="navlink"
            to="workplace " //aqui ponemos el nombre de la clase hacia donde queremos que vaya este boton
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleWork}
          >
            Work
          </Link>
        </Col>
        <Col className="navmenu">
          <Link
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="navlink"
            to="about" //aqui ponemos el nombre de la clase hacia donde queremos que vaya este boton
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleAbout}
          >
            About
          </Link>
        </Col>
        <Col className="navmenu">
          <Link
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="navlink"
            to="contact" //aqui ponemos el nombre de la clase hacia donde queremos que vaya este boton
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleContact}
          >
            Contact
          </Link>
        </Col>
      </Row>
      <Content>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="Tittle"
        >
          ROKSANA PAT
        </div>
        <div className="subtitulo">
          <Typewriter
            options={{
              strings: ["UX designer", "UX designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flechas">
          <div className="bouncer">
            <div></div>
            <div></div>
          </div>
        </div>
        <div onMouseEnter={texttilin} onMouseLeave={textLeave}>
          <ReactSketchCanvas
            className="canvas"
            strokeWidth={6}
            strokeColor="#CC7B7CCC"
            backgroundImage={require("./Canvaspuntosfondo.png")}
            height="866px"
          />
        </div>
        <Row className="marginsubmenu letrasubmenu">
          <Col className="marginsubright">
            <span className={work === false ? "workplace " : "workplace verde"}>
              work
            </span>
          </Col>
          <Col className="marginsubright">
            {" "}
            <span className={about === false ? "about " : "about verde"}>
              about
            </span>
          </Col>
          <Col className="marginsubright">
            {" "}
            <span className={contact === false ? "contact " : "contact verde"}>
              contact
            </span>
          </Col>
        </Row>

        {work ? (
          <div className="listwork">
            <div className="stroke0 ">
              {" "}
              <span className="underlinedinamico">Co-Data</span>
            </div>
            <div className="stroke0">
              <span className="underlinedinamico">Fio-tag</span>
            </div>
            <div className="stroke0">
              <span className="underlinedinamico">Jeju Beauty Store </span>
            </div>
            <div className="stroke0">
              <span className="underlinedinamico">Jejublog.pl</span>
            </div>
            <div className="stroke0">
              <span className="underlinedinamico">House in Sweden</span>
            </div>
            <div className="stroke0">
              <span className="underlinedinamico">
                Warsaw Under Construction
              </span>
            </div>
          </div>
        ) : null}

        {about ? (
          <div className="listwork">
            <div className="stroke0 ">
              {" "}
              <span>1993</span> <span>Born in Poland</span>
            </div>
            <div className="stroke0">
              <span>2021</span> <span>Master degree in Architecture</span>
            </div>
            <div className="stroke0">
              <span>2023</span> <span>Master degree in Interaction Design</span>
            </div>
            <div className="widhtextfinal">
              <span className="">
                Hi! I’m educated as an architect and IxD designer, experienced
                in entrepreneurship and interested in social innovation. I have
                worked in Poland, Spain and Germany and currently I’m based in
                Malmö, Sweden. If you want to know more, check my{" "}
                <span className="underlinedinamico">LinkedIn </span>
                profile.{" "}
              </span>
            </div>
          </div>
        ) : null}

        {contact ? (
          <div className="listwork">
            <div className="stroke0 ">
              {" "}
              <span>Text me</span> <span>roksana.patrzalek@gmail.com</span>
            </div>
            <div className="stroke0">
              <span>Connect</span> <span>LinkedIn</span>
            </div>

            <div className="widhtextfinal">
              <span className="">
                Enjoying my works? Get in touch! I'm always open for new
                collaborations. Any idea, suggestion or crticism is appreciated.
              </span>
            </div>
          </div>
        ) : null}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Roksana Patrzałek | Portfolio 2022
      </Footer>
    </Layout>
  );
}

export default App;
