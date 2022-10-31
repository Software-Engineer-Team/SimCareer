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
<<<<<<< HEAD
<<<<<<< HEAD
import { RiArrowDropDownLine } from "react-icons/ri";
=======
>>>>>>> a6c8ecd ([feat]: Weekly News and Events complete)
=======
import { RiArrowDropDownLine } from "react-icons/ri";
>>>>>>> a57af6f ([feat]: Complete Job Trackers)

const BodyDashBoard = () => {
  const quickLinks = [
    {
      name: "App Test Database",
      icon: GoDatabase,
    },
    {
      name: "Inteview Source",
      icon: FaPeopleCarry,
    },
    {
      name: "Apprenticeship Application",
      icon: SiAppveyor,
    },
    {
      name: "Our BackGround",
      icon: FaCampground,
    },
    {
      name: "SimCareer Instagram",
      icon: BsInstagram,
    },
    {
      name: "Resources Center",
      icon: GiTwirlCenter,
    },
    {
      name: "Frequently Asked Questions",
      icon: BsFillQuestionCircleFill,
    },
    {
      name: "Schedule a Call",
      icon: ImPhone,
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
            {quickLinks.map(({ name, icon: Svg }, idx) => (
              <div className="link" key={idx}>
                <div className="svg">
                  <Svg />
                </div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </QuickLinks>
        <Functions>
          <WeeklyNews>
            <div className="header">Weekly News Summary</div>
            <div className="weekly-news">
              {weeklyNews.map(({ url, titleNews, time, para }) => (
                <div class="news">
                  <div className="img">
                    <img src={url} alt="" />
                  </div>
                  <div className="content">
                    <div className="title-news">
                      <h5>{titleNews}</h5>
                      <p className="text-muted">{time}</p>
                    </div>
                    <div className="text-truncated">{para}</div>
                  </div>
                </div>
              ))}
              <div className="header read-all">Read All (34)</div>
            </div>
          </WeeklyNews>
          <Events>
            <div className="header">
              <div>Events</div>
              <span className="view-all">View All</span>
            </div>
            <div className="schedule">
              <div className="day-time">Tomorrow, Wednesday, May 25</div>
              {Array(3)
                .fill(undefined)
                .map(() => (
                  <div className="time-content">
                    <div className="time">8:00 PM</div>

                    <div className="content">
                      <div className="content-title">
                        BeHaviour Question Practice
                      </div>
                      <div className="trainner">with Cao Tuan Kiet</div>
                      <div className="no_people">
                        <BsPeople />
                        <span>2 / 3</span>
                      </div>
                      <div className="zoom-meeting">
                        <RiMapPinLine />
                        <span>Zoom Meeting</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Events>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a57af6f ([feat]: Complete Job Trackers)
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
                  <div class="job">
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
<<<<<<< HEAD
=======
          <JobTrackers>555t</JobTrackers>
>>>>>>> a6c8ecd ([feat]: Weekly News and Events complete)
=======
>>>>>>> a57af6f ([feat]: Complete Job Trackers)
        </Functions>
      </Content>
    </Container>
  );
};

export default BodyDashBoard;
