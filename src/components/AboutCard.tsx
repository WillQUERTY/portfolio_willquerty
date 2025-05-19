import Card from "react-bootstrap/Card";

export function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi! I'm <span className="purple">William Peñaranda</span>, a
            <span className="purple"> software developer</span> based in the
            beautiful country of <span className="purple">Colombia</span> ☕.
            <br />
            <br />I work as a{" "}
            <span className="purple">
              software analyst and developer,{" "}
            </span>{" "}
            with
            <span className="purple"> 1 year</span> of experience building web
            and mobile applications for the tech and education industries.
            companies.
            <br />
            <br />I love passionate about turning{" "}
            <span className="purple">complex challenges</span> into simple,
            user-friendly solutions tools and i enjoy experimenting with new
            energing technologies like{" "}
            <span className="purple">generative AI</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
