import {
  Container,
  Content,
  Events,
  Functions,
  JobTrackers,
  QuickLinks,
  Title,
  WeeklyNews,
} from "./BodyDashBoard.styled";
import {
  BsPeople,
  BsInstagram,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { GoDatabase } from "react-icons/go";
import { FaPeopleCarry, FaCampground } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { SiAppveyor } from "react-icons/si";
import { RiMapPinLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

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
  return (
    <Container>
      <Content>
        <Title>
          Hello Cao Tuan Kiet, are you ready to simulate your career today?
        </Title>
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
          <Events>
            <div className="event-item">
              <div className="event-left-container">
                <div className="day-time">thứ sáu</div>
                <div className="month-year">4/11</div>
              </div>
              <div className="event-right-container">
                <div className="event-right-content">
                  <div className="event-img">
                    <img src="/images/event-1.png" alt="" />
                  </div>
                  <div className="event-content">
                    <div className="title">
                      Talkshow "Customer centric in social commerce era"
                    </div>
                    <div className="time">
                      <span>Thứ 6|04/11/2022|15:00 - 17:30</span>
                    </div>
                  </div>
                </div>
                <div className="event-register">
                  <a href="#" className="event-register-content">
                    <span>đăng kí</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="event-item">
              <div className="event-left-container">
                <div className="day-time">thứ sáu</div>
                <div className="month-year">4/11</div>
              </div>
              <div className="event-right-container">
                <div className="event-right-content">
                  <div className="event-img">
                    <img src="/images/event-1.png" alt="" />
                  </div>
                  <div className="event-content">
                    <div className="title">
                      Talkshow "Customer centric in social commerce era"
                    </div>
                    <div className="time">
                      <span>Thứ 6|04/11/2022|15:00 - 17:30</span>
                    </div>
                  </div>
                </div>
                <div className="event-register">
                  <a href="#" className="event-register-content">
                    <span>đăng kí</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="event-item">
              <div className="event-left-container">
                <div className="day-time">thứ sáu</div>
                <div className="month-year">4/11</div>
              </div>
              <div className="event-right-container">
                <div className="event-right-content">
                  <div className="event-img">
                    <img src="/images/event-1.png" alt="" />
                  </div>
                  <div className="event-content">
                    <div className="title">
                      Talkshow "Customer centric in social commerce era"
                    </div>
                    <div className="time">
                      <span>Thứ 6|04/11/2022|15:00 - 17:30</span>
                    </div>
                  </div>
                </div>
                <div className="event-register">
                  <a href="#" className="event-register-content">
                    <span>đăng kí</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="event-item">
              <div className="event-left-container">
                <div className="day-time">thứ sáu</div>
                <div className="month-year">4/11</div>
              </div>
              <div className="event-right-container">
                <div className="event-right-content">
                  <div className="event-img">
                    <img src="/images/event-1.png" alt="" />
                  </div>
                  <div className="event-content">
                    <div className="title">
                      Talkshow "Customer centric in social commerce era"
                    </div>
                    <div className="time">
                      <span>Thứ 6|04/11/2022|15:00 - 17:30</span>
                    </div>
                  </div>
                </div>
                <div className="event-register">
                  <a href="#" className="event-register-content">
                    <span>đăng kí</span>
                  </a>
                </div>
              </div>
            </div>
          </Events>
          <JobTrackers>
            <div className="header">
              <div>Job Trackers</div>
              <span className="view-all">40 New Jobs This Week</span>
            </div>
            <div className="job-content">
              <div className="category">
                <span>Banking</span>
                <RiArrowDropDownLine />
              </div>
              {Array(3)
                .fill(undefined)
                .map((el) => (
                  <div className="job">
                    <div className="img">
                      <img src="/images/rounded_logo.png" alt="" />
                    </div>
                    <div className="content">
                      <div>
                        <h5>Some Job Name</h5>
                        <p className="text-muted">Deadline: 30th, Jun</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </JobTrackers>
        </Functions>
      </Content>
    </Container>
  );
};

export default BodyDashBoard;
