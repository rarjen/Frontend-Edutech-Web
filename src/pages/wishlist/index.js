import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PCardComponent from "../../components/CardComponentWishlist";
import PSubNavbar from "../../components/SubNavbar";
import { useSelector } from "react-redux";
import { postData } from "../../utils/fetch";
import PNavbar from "../../components/Navbar";
import Swal from "sweetalert2";
import "./style.css";

const WishlistPage = () => {
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
        const userId = auth.id;
        const token = auth.token;

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const url = `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/wish-list/${userId}`;

        const response = await fetch(url, {
          method: "GET",
          headers,
        });

        const data = await response.json();
        setCourses(data.data);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  console.log(courses);

  // const handleBuyClick = async (courseId) => {
  //   try {
  //     const result = await Swal.fire({
  //       title: "Konfirmasi",
  //       text: "Apakah Anda yakin ingin membeli produk ini?",
  //       icon: "question",
  //       showCancelButton: true,
  //       confirmButtonText: "Ya",
  //       cancelButtonText: "Tidak",
  //     });

  //     if (result.isConfirmed) {
  //       // const selectedCourse = courses.find(
  //       //   (course) => course.id === productId
  //       // );

  //       // console.log(courses);

  //       const product = await axios.get(
  //         `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/course/${productId}`
  //       );

  //       // console.log("product");
  //       // console.log(product.data.data.price.amount);
  //       // console.log(selectedCourse);
  //       // const totalPrice = selectedCourse
  //       const updatedCheckout = {
  //         ...checkout,
  //         courses: [{ courseId: productId }],
  //         total: product.data.data.price.amount,
  //       };

  //       setCheckout(updatedCheckout);
  //       await postData(`/api/alpha/v1/checkout/${auth.id}`, updatedCheckout);

  //       // Tampilkan swal sukses
  //       Swal.fire({
  //         icon: "success",
  //         title: "Produk berhasil dibeli",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });

  //       navigate("/my-learning/all-courses");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);

  //     // Tampilkan swal error
  //     Swal.fire({
  //       icon: "error",
  //       title: "Terjadi kesalahan",
  //       text: "Gagal membeli produk",
  //     });
  //   }
  // };

  const handleDeleteClick = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin menghapus item ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      });

      if (result.isConfirmed) {
        const token = auth.token;

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const url = `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/wish-list/${id}`;

        const response = await fetch(url, {
          method: "DELETE",
          headers,
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        // Tampilkan swal sukses
        Swal.fire({
          icon: "success",
          title: "Item berhasil dihapus",
          showConfirmButton: false,
          timer: 1500,
        });

        const updatedData = courses.filter((item) => item.id !== id);
        setCourses(updatedData);
      }
    } catch (error) {
      console.error("Error:", error);

      // Tampilkan swal error
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Gagal menghapus item",
      });
    }
  };

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
                onDeleteClick={handleDeleteClick}
                onBuyClick={handleBuyClick}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WishlistPage;
