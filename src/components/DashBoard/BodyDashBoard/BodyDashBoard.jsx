import {
  Container,
  Content,
  Events,
  Functions,
  QuickLinks,
} from "./BodyDashBoard.styled";
import Title from "./Title/Title";

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
                        <div className="event-register">
                          <a href="#" className="event-register-content">
                            <span>đăng kí</span>
                          </a>
                        </div>
                      </div>
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
                        <div className="event-register">
                          <a href="#" className="event-register-content">
                            <span>đăng kí</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Events>
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
