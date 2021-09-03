import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Business-2-Business Services</h3>
            <Resumecontent
              title="Websites your customers want to browse"
              // date="June 2020 - August 2020"
              content={[
                "The B2B web design team focuses on building websites that streamline content and feature efficient navigation—the most content with the least amount of clicks—so your brand message gets across quickly and clearly. The website content needs to be timely and relevant—compelling content that keeps a visitor on your site.",
              ]}
            />
            <h3 className="resume-title">E-Commerce</h3>
            <Resumecontent
              title="Cutting-Edge eCommerce Web Development Services for Versatile Industry Needs"
              content={[
                "Digital Oracle is a premier digital solutions provider serving customers across the globe with its astounding set of eCommerce solutions. We tend to hype our growth to new heights in the upcoming years by continuing to use the latest and advanced technology that helps us create competitive and futuristic digital solutions.",
              ]}
            />
            <Resumecontent
              title="B2B Marketplaces"
              content={[
                "Building secured, sustainable and rich-featured B2B marketplaces to allow the businesses to deliver their products or services to other potential businesses in the market. We empower our clients by providing them highly-efficient B2B marketplaces that recur growth.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">E-learning</h3>
            <Resumecontent
              title="Personalize the eLearning experience to produce deeper learning outcomes and achieve maximum freedom in creating courses and content for online education. Author,manage and dliver collaborative and engaging virtual classes,
              "
              // date="2018 - Present"
              content={[]}
            />
            <Resumecontent
              title="Generate new learning opportunities"
              date=""
              content={[]}
              content={[
                "Inspire students in online, digital environments and change educational practices through the use of hybrid courses, personalized instruction, new collaboration models and a wide range of engaging learning strategies. Allow students to choose topics they wish to work on, while omitting those that they are familiar with.",
              ]}
            />
            <Resumecontent
              title="Engage students
              in self-paced learning "
              date=""
              content={[
                "Provide different opportunities to make learning more active and enjoyable in terms of teaching same things in new ways. Allow students to learn at their own speed, within the time that they dispose of and their learning schedule. With eLearning it is possible to update content fast and in real time, keeping it relevant in quickly changing environments."
              ]}
            />
            <h3 className="resume-title">Financial & Banking Service</h3>
            <Resumecontent
              title="We bring the financial industry closer to everyone.We embody innovations and transform financial products into secure and easy-to-use applications."
              content={[
                `Fintech UX/UI Design`,
                `Personal Finance Software`,
                "Investment Platforms",
                "Lending Software",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
