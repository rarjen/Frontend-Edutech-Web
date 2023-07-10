import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import PCardComponent from "../../components/CardComponentCourses";
import PSubNavbar from "../../components/SubNavbar";
import PNavbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CoursesPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        };

        const response = await axios.get(
          `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/mycourse/${auth.id}`,
          config
        );

        const data = response.data.data;

        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleDetailClick = (productId) => {
    navigate(`/course/detail-course/${productId}`);
    console.log("ini", productId);
  };

  console.log(courses);
  return (
    <div>
      <Row>
        <PNavbar />
      </Row>

      <PSubNavbar />

      <Container>
        <Row>
          {courses.map((course) => (
            <Col key={course.id}>
              <PCardComponent
                product={course}
                onDetailClick={handleDetailClick}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CoursesPage;
