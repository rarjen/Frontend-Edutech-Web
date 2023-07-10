import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import PNavbarDetail from "../../components/NavbarDetail";
import PRightNavbar from "../../components/RightNavbar";
import PVideo from "../../components/VideoComponent";
import PVideoDetail from "../../components/VideoCourseDetail";
import { useParams } from "react-router-dom";

export default function DetailCoursePage() {
  const { courseId } = useParams();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState([]);
  const [videoSrc, setVideoSrc] = useState("");
  const [description, setDescription] = useState("");
  const [detaildescription, setDetailDescription] = useState("");
  const [category, setCategory] = useState("");
  const [lessons, setLessons] = useState([]);
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDetail = await axios.get(
          `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/course/${courseId}`
        );
        const dataDetail = responseDetail.data.data.title;
        const dataDescription = responseDetail.data.data.description;
        const dataDetailDescription =
          responseDetail.data.data.detailDescription;
        const dataCategory = responseDetail.data.data.courseCategory.name;
        const dataLessons = responseDetail.data.data.lessons;
        const dataRequirements = responseDetail.data.data.requirements;

        setTitle(dataDetail);
        setDescription(dataDescription);
        setDetailDescription(dataDetailDescription);
        setCategory(dataCategory);
        setLessons(dataLessons);
        setRequirements(dataRequirements);

        const resContent = await axios.get(
          `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/contents/${courseId}`
        );
        const dataContents = resContent.data.data;
        setContents(dataContents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleContentClick = async (contentId) => {
    try {
      const response = await axios.get(
        `https://alpha-omega-api-production.up.railway.app/api/alpha/v1/content/${contentId}`
      );
      const videoUrl = response.data.data.courseDetails[0].videoUrl;
      setVideoSrc(videoUrl);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  return (
    <div>
      <Container>
        <PNavbarDetail title={title} />
      </Container>
      <Row style={{ marginTop: "83px" }} className="d-flex">
        <Col className="col-10">
          <Container>
            <Row className="justify-content-center bg-dark">
              <PVideo src={videoSrc} />
            </Row>
            <Row>
              <PVideoDetail
                description={description}
                detailDescription={detaildescription}
                category={category}
                lessons={lessons}
                requirements={requirements}
              />
            </Row>
          </Container>
        </Col>
        <Col className="col-2">
          <PRightNavbar handleClick={handleContentClick} contents={contents} />
        </Col>
      </Row>
    </div>
  );
}
