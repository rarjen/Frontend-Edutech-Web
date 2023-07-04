import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import PNavbar from "../../components/Navbar";
import PCarousel from "../../components/Carousel";
import PCardComponent from "../../components/CardComponent";
import PSquare from "../../components/SquareComponent";
import PFooter from "../../components/Footer";
import "./style.css";

export default function LibraryPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/courses`
        );

        const data = response.data.data.courses;

        const coursesWithInstructors = await Promise.all(
          data.map(async (course) => {
            const instructorResponse = await axios.get(
              `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/instructor/${course.instructorId}`
            );
            const instructorData =
              instructorResponse.data.data.userResponse.fullName;

            return {
              ...course,
              instructor: instructorData,
            };
          })
        );

        setCourses(coursesWithInstructors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = (productId) => {
    console.log("Pembelian produk dengan ID:", productId);
  };

  return (
    <div>
      <Container>
        <Row>
          <PNavbar />
        </Row>
      </Container>
      <Row>
        <PCarousel />
      </Row>
      <Container>
        <Row>
          <PSquare
            logo={
              "https://ik.imagekit.io/6v306xm58/Logo_A_O.png?updatedAt=1688203807149"
            }
          />
        </Row>
        <Row className="custom-row mt-5">
          <h1 className="custom-heading">Belajar bersama kami!</h1>
        </Row>
        <Row>
          {courses.map((course) => (
            <Col key={course.id}>
              <PCardComponent product={course} onBuyClick={handleBuyClick} />
            </Col>
          ))}
        </Row>
      </Container>
      <Row className="mt-5">
        <PFooter />
      </Row>
    </div>
  );
}
