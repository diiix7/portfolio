import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AcademiaSpace"
              description="A mobile application for social universities with chat rooms, direct messages, a feed (like twitter) and workspaces to share resources, events for both school and students ans also hangout with friend, build with Flutter (Dart) and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/diiix7/AcademiaSpace-Firebase"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SellIt"
              description="Une application desktop faite en Java de gestion de supermarché. Avec une interface conviviale et des fonctionnalités robustes, elle simplifie la gestion des stocks, des ventes et du personnel. Obtenez un contrôle total sur votre supermarché et offrez une expérience client optimale, le tout à portée de clic."
              ghLink="https://github.com/diiix7/gestion_supermarche"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CarRentalPro"
              description="Voici notre application de gestion de location de voitures, développée en Java. Simplifiez la gestion de votre parc automobile, des réservations à la maintenance, pour offrir un service client exceptionnel et une expérience de location fluide. Avec notre solution intuitive, gérez efficacement votre entreprise de location de voitures."
              ghLink="https://github.com/diiix7/gestion_parc_voitures_java"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Amazzon"
              description="Découvrez notre clone d'Amazon, construit avec PHP, HTML, CSS et Bootstrap. Parcourez une large gamme de produits, profitez d'offres exclusives et d'une expérience d'achat en ligne intuitive. Avec notre application, trouvez et achetez facilement tout ce dont vous avez besoin, le tout dans un environnement convivial et sécurisé."
              ghLink="https://github.com/diiix7/Amazon"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-commerce"
              description="Un projet backend, construit entièrement en Node.js, Express et MongoDB. Avec une architecture solide et une gestion optimale des données, notre solution offre une connectivité rapide et une fiabilité inégalée. Prêt à propulser votre application vers l'avant, il backend garantit des performances exceptionnelles et une expérience utilisateur fluide pour mla mise en pace des solution de e-commerce."
              ghLink="https://github.com/diiix7/e-commerce"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Task manager"
              description="Une application web simple de gestion des tâches, propulsée par Vue.js. Simple, intuitive et efficace, elle vous permet de planifier, organiser et suivre vos tâches avec facilité. Grâce à Vue.js, elle offre une expérience utilisateur fluide et réactive."
              ghLink="https://github.com/diiix7/taskManager"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Pet adoption"
              description="Une appli mobile d'adoption d'animaux réalisée avec React Native et Expo. Parcourez un fed des profils d'animaux à adopter, elle est simple à utiliser et pleine de possibilités."
              ghLink="https://github.com/diiix7/petsapp/tree/dev"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
