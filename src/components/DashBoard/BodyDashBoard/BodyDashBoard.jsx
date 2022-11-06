import {
  Container,
  Content,
  Events,
  Functions,
  QuickLinks,
  JobTrackers,
} from "./BodyDashBoard.styled";
import Title from "./Title/Title";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";

const BodyDashBoard = () => {
  const quickLinks = [
    {
      name: "Inteview Source",
      url: "/images/interview-source-icon.png",
    },
    {
      name: "Mentoring",
      url: "/images/mentoring-icon.png",
    },
    {
      name: "Tests",
      url: "/images/tests-icon.png",
    },
    {
      name: "Study Cources",
      url: "/images/study-courses-icon.png",
    },
    {
      name: "Community",
      url: "/images/community-icon.png",
    },
    {
      name: "References",
      url: "/images/ref-icon.png",
    },
  ];
  const weeklyNews = [
    {
      url: "/images/rounded_logo.png",
      titleNews:
        "Here's What Happens if Democrats' Worst Case Midterms Scenario Comes True",
      time: "BY DARRAGH ROCHE ON 10/29/22 AT 9:57 AM",
      para: "Republicans may be on track to win significant victories in the upcoming midterm elections and the party could be preparing to give President Joe Biden a major headache for the next two years.",
    },
    {
      url: "/images/rounded_logo.png",
      titleNews:
        "Here's What Happens if Democrats' Worst Case Midterms Scenario Comes True",
      time: "BY DARRAGH ROCHE ON 10/29/22 AT 9:57 AM",
      para: "Republicans may be on track to win significant victories in the upcoming midterm elections and the party could be preparing to give President Joe Biden a major headache for the next two years.",
    },

    {
      url: "/images/rounded_logo.png",
      titleNews:
        "Here's What Happens if Democrats' Worst Case Midterms Scenario Comes True",
      time: "BY DARRAGH ROCHE ON 10/29/22 AT 9:57 AM",
      para: "Republicans may be on track to win significant victories in the upcoming midterm elections and the party could be preparing to give President Joe Biden a major headache for the next two years.",
    },
  ];

  const jobTrackers = [
    {
      src: "/images/career-tracker-1.webp",
      title: "Digital Marketing Intern",
      text: "Công ty Cổ Phần Con Cưng ",
      address: "TP Hồ Chí Minh",
      link: "https://www.topcv.vn/viec-lam/digital-marketing-intern/860208.html?ta_source=JobSearchList&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    },
    {
      src: "/images/career-tracker-2.jpg",
      title: "Digital Marketing Intern",
      text: "CÔNG TY CỔ PHẦN KHOÁNG SẢN VẬT LIỆU Á CỘNG",
      address: "TP Hồ Chí Minh",
      link: "https://www.topcv.vn/viec-lam/digital-marketing-intern/854443.html?ta_source=JobSearchList&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    },
    {
      src: "/images/career-tracker-3.jpg",
      title: "Digital Marketing Intern",
      text: "THE FASHION JOINT STOCK COMPANY",
      address: "TP Hồ Chí Minh",
      link: "https://www.topcv.vn/viec-lam/digital-marketing-internship-thuc-tap-sinh/293815.html?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    },
  ];

  return (
    <Container>
      <Content>
        <Title
          text={"Hello Cao Tuan Kiet, are you ready for our race ?"}
          fontSize={25}
        />
        <QuickLinks>
          <div className="title">Quick Links</div>
          <div className="links">
            {quickLinks.map(({ name, url }, idx) => (
              <div className="link" key={idx}>
                <div className="svg">
                  <img src={url} alt="" />
                </div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </QuickLinks>
        <Functions>
          <div className="container">
            <div className="img-bg">
              <JobTrackers>
                <div className="job-content">
                  {jobTrackers.map(({ src, title, text, address, link }) => (
                    <div className="job">
                      <div className="img">
                        <img src={src} alt="" />
                      </div>
                      <div className="content">
                        <div>
                          <h5>{title}</h5>
                          <p className="text-muted">{text}</p>
                          <p className="text-muted">{address}</p>
                        </div>
                      </div>
                      <a href={link} className="icon" target="_blank">
                        <AiOutlinePlusSquare />
                      </a>
                    </div>
                  ))}
                </div>
              </JobTrackers>
              <Title
                text={"Weekly News Summary"}
                fontSize={28}
                color="#7c00ff"
                position="absolute"
                left={20}
                top={35}
              />

              <Title
                text={"EVENTS"}
                fontSize={28}
                /* color="rgb(148, 121, 209)" */
                color="#7c00ff"
                position="absolute"
                left={700}
                top={35}
              />

              <Title
                text={"CAREER TRACKER"}
                fontSize={28}
                fontFamily="LLPixel"
                /* color="rgb(148, 121, 209)" */
                color="#4e029e"
                position="absolute"
                left={700}
                top={355}
              />
              <img src="/images/bodydashboard-bg.png" alt="BodyDashBoard" />
            </div>
          </div>
        </Functions>
      </Content>
    </Container>
  );
};

export default BodyDashBoard;
