import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import PNavbar from "../../components/Navbar";
import PCarousel from "../../components/Carousel";
import PCardComponent from "../../components/CardComponent";
import PSquare from "../../components/SquareComponent";
import PFooter from "../../components/Footer";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import "./style.css";

export default function LibraryPage() {
  // const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
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

  const handleWishlistClick = async (productId) => {
    try {
      const userId = auth.id;
      const token = auth.token;
      console.log("ini productId", productId);
      console.log("ini userId", userId);
      console.log("ini token", token);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      let urlWishlist = `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/wish-list/${userId}/course/${productId}`;

      const response = await fetch(urlWishlist, {
        method: "POST",
        headers,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      Swal.fire({
        icon: "success",
        title: "Produk berhasil ditambahkan ke wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error:", error);

      // Tampilkan swal error
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Gagal menambahkan produk ke wishlist",
      });
    }
  };

  const handleBuyClick = async (productId) => {
    try {
      const userId = auth.id;
      const token = auth.token;

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      let urlCart = `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/cart/${userId}/course/${productId}`;

      const response = await fetch(urlCart, {
        method: "POST",
        headers,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      Swal.fire({
        icon: "success",
        title: "Produk berhasil ditambahkan ke cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error:", error);

      // Tampilkan swal error
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Gagal menambahkan produk ke cart",
      });
    }
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
              <PCardComponent
                product={course}
                onBuyClick={handleBuyClick}
                onWishlistClick={handleWishlistClick}
              />
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
