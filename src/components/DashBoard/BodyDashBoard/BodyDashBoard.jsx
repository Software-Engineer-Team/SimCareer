import {
  Container,
  Content,
  Events,
  Functions,
  JobTrackersContainer,
  QuickLinks,
  WeeklyNewsContainer,
} from "./BodyDashBoard.styled";
import Title from "./Title/Title";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Event from "./Event/Event";
import WeeklyNews from "./WeeklyNews/WeeklyNews";
import JobTrackers from "./JobTrackers/JobTrackers";
import { Bounce, Fade, Flip, LightSpeed, Zoom } from "react-reveal";
import { v4 as uuidv4 } from "uuid";
import {
  quickLinks,
  weeklyNews,
  events,
  jobTrackers,
} from "@assets/data/dash-board";

const BodyDashBoard = () => {
  return (
    <Container>
      <Content>
        <Bounce right>
          <Title
            text={
              "Xin chào ! Bạn đã sẵn sàng cùng SIMCareer chinh phục nhà tuyển dụng ?"
            }
            fontSize={30}
            fontFamily="'Roboto', Helvetica, Arial, sans-serif !important"
            fontWeight={700}
          />
        </Bounce>
        <QuickLinks>
          <Flip left>
            <div className="title">Quick Links</div>
          </Flip>
          <div className="links">
            <LightSpeed right>
              {quickLinks.map(({ name, url, hasNewIcon }) => (
                <div className="link" key={uuidv4()}>
                  <div className="svg">
                    <img src={url} alt="" />
                  </div>
                  <div className="content">
                    {name}
                    {hasNewIcon && (
                      <img
                        src="/images/new-icon.gif"
                        width="30px"
                        height="25px"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              ))}
            </LightSpeed>
          </div>
        </QuickLinks>
        <Functions>
          <div className="container">
            <div className="img-bg">
              <WeeklyNewsContainer className="weeklyNews">
                <Zoom left>
                  {weeklyNews.map(
                    (
                      { url, specificTime, title, specificContent, link },
                      idx
                    ) => {
                      return (
                        <WeeklyNews
                          key={uuidv4()}
                          url={url}
                          title={title}
                          specificTime={specificTime}
                          specificContent={specificContent}
                          flexReverse={idx % 2 === 0 ? false : true}
                          link={link}
                        />
                      );
                    }
                  )}
                </Zoom>
                <div style={{ fontSize: "17px" }}>See more</div>
              </WeeklyNewsContainer>

              <Events className="events">
                <div
                  style={{
                    textAlign: "right",
                    marginBottom: "10px",
                    fontSize: "17px",
                  }}
                >
                  See more
                </div>
                <Zoom right>
                  {events.map(
                    ({
                      url,
                      dayTime,
                      monthYear,
                      specificTime,
                      title,
                      link,
                    }) => {
                      return (
                        <Event
                          url={url}
                          dayTime={dayTime}
                          monthYear={monthYear}
                          specificTime={specificTime}
                          title={title}
                          link={link}
                          key={uuidv4()}
                        />
                      );
                    }
                  )}
                </Zoom>
              </Events>

              <JobTrackersContainer>
                <div>See more</div>
                <div className="job-content">
                  {jobTrackers.map(({ src, title, text, address, link }) => (
                    <JobTrackers
                      key={uuidv4()}
                      src={src}
                      title={title}
                      text={text}
                      address={address}
                      link={link}
                    />
                  ))}
                </div>
              </JobTrackersContainer>

              <Title
                text={"Weekly News Summary"}
                fontSize={28}
                color="#7c00ff"
                position="absolute"
                left={-40}
                top={125}
                number={1}
              />

              <Title
                text={"EVENTS"}
                fontSize={28}
                color="#7c00ff"
                position="absolute"
                left={850}
                top={100}
                number={2}
              />

              <Title
                text={"CAREER TRACKER"}
                fontSize={28}
                color="#7c00ff"
                position="absolute"
                left={730}
                top={605}
                number={3}
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
