import { Col, Row } from "react-bootstrap";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { DiNodejs, DiNetmagazine } from "react-icons/di";
import {
  SiNextdotjs,
  SiMongodb,
  SiNpm,
  SiGit,
  SiDocker,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiFlutter,
  SiDart,
  SiVite,
} from "react-icons/si";

export function Techstack() {
  return (
    <Row className="skillset-row">
      {/* Markup & Styling */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">HTML5</span>
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">CSS4</span>
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Tailwind CSS</span>
        <SiTailwindcss title="Tailwind CSS" />
      </Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">JavaScript</span>
        <SiJavascript title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">C# and ASP.NET</span>
        <DiNetmagazine title="C# and ASP.NET" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Dart</span>
        <SiDart title="Dart" />
      </Col>

      {/* Front-end Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">React</span>
        <SiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Next.js</span>
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Flutter</span>
        <SiFlutter title="Flutter" />
      </Col>

      {/* Back-end & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Node.js</span>
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Docker</span>
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Azure</span>
        <VscAzure title="Azure" />
      </Col>

      {/* Version Control & Package Management */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Git</span>
        <SiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">npm</span>
        <SiNpm title="npm" />
      </Col>

      {/* Build Tooling */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Vite</span>
        <SiVite title="Vite" />
      </Col>

      {/* Databases & Caching */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">SQL Server</span>
        <DiMsqlServer title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">MongoDB</span>
        <SiMongodb title="MongoDB" />
      </Col>
    </Row>
  );
}
