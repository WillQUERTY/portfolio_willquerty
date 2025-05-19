import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { GoCodespaces } from "react-icons/go";
import { SiAndroidstudio, SiGithub, SiPostman } from "react-icons/si";

export function Toolstack() {
  return (
    <Row className="skillset-row">
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Visual Studio</span>
        <DiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Visual Studio Code</span>
        <DiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Android Studio</span>
        <SiAndroidstudio title="Android Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Codespaces</span>
        <GoCodespaces title="Codespaces" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Postman</span>
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">GitHub</span>
        <SiGithub title="GitHub" />
      </Col>
    </Row>
  );
}
