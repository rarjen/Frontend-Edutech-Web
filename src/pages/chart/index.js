import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import PCardComponent from "../../components/CardComponentLearning";
import PSubNavbar from "../../components/SubNavbar";
import PNavbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import Swal from "sweetalert2";
import "./style.css";

const ChartPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);

  const [checkout, setCheckout] = useState({
    courses: [{ courseId: "" }],
    promoId: "",
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        };

        const response = await axios.get(
          `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/cart/${auth.id}`,
          config
        );

        const data = response.data.data;
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleBuyClick = async (productId) => {
    try {
      const result = await Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin membeli produk ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      });

      if (result.isConfirmed) {
        // const selectedCourse = courses.find(
        //   (course) => course.id === productId
        // );

        // console.log(courses);

        const product = await axios.get(
          `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/course/${productId}`
        );

        // console.log("product");
        // console.log(product.data.data.price.amount);
        // console.log(selectedCourse);
        // const totalPrice = selectedCourse
        const updatedCheckout = {
          ...checkout,
          courses: [{ courseId: productId }],
          total: product.data.data.price.amount,
        };

        setCheckout(updatedCheckout);
        await postData(`/api/alpha/v1/checkout/${auth.id}`, updatedCheckout);

        // Tampilkan swal sukses
        Swal.fire({
          icon: "success",
          title: "Produk berhasil dibeli",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/my-learning/all-courses");
      }
    } catch (error) {
      console.error("Error:", error);

      // Tampilkan swal error
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Gagal membeli produk",
      });
    }
  };

  console.log(checkout);

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
              <PCardComponent product={course} onBuyClick={handleBuyClick} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ChartPage;
