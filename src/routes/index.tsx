import { Particle } from "@/components/Particle";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "@/assets/avatar-square.png";
import { Type } from "@/components/Type";
import myImg from "@/assets/avatar-real-plane.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AvatarNeonGlow } from "@/components/AvatarNeonGlow";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> WILLQUERTY</strong>
              </h1>

              <div className="type-wrapper">
                <Type
                  strings={[
                    "Full Stack Developer",
                    "Mobile",
                    "Web",
                    "APi",
                    "UI/UX",
                  ]}
                />
              </div>
            </Col>
            <Col md={5} className="neon-avatar-wrapper">
              <AvatarNeonGlow src={homeLogo} alt="home pic" size={400} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 className="home-about-heading">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’ve been coding for <b className="purple">1 year</b>, and truly
                enjoy learning new technologies,{" "}
                <b className="purple"> tackling challenging problems</b> and
                building <i>high-quality software</i>.
                <br />
                <br />
                I’m <b className="purple">skilled</b> in{" "}
                <i>
                  <b className="purple">Dart</b>,{" "}
                  <b className="purple">Flutter</b>,{" "}
                  <b className="purple">JavaScript</b> and{" "}
                  <b className="purple">C#</b>
                </i>
                .
                <br />
                <br />I love developing{" "}
                <i>
                  <b className="purple">
                    API-driven web and mobile applications
                  </b>
                </i>{" "}
                and exploring how <b className="purple">generative AI</b> can
                enhance everyday tools.
                <br />
                <br />
                Most of the time you'll often find me working with{" "}
                <b className="purple">React & Vite</b> or using frameworks like{" "}
                <b className="purple">Next.js</b> and{" "}
                <b className="purple">.NET </b>i also enjoy crafting sleek
                userinterfaces with{" "}
                <i>
                  <b className="purple">Shadcn + Tailwind CSS</b> or{" "}
                  <b className="purple">Material UI </b>
                  and
                  <b className="purple"> Flutter</b>
                </i>{" "}
                optimized for both{" "}
                <b className="purple">
                  server-side and serverless environments
                </b>{" "}
                to ensure speed and flexibility.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid avatar-image"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/WillQUERTY"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/william-andres-peñaranda-oñate-4b5984302"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:will.developmentdev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="Email"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
