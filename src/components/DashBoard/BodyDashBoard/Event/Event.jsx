import { EventItem } from "./Event.styled";

const Event = ({ url, dayTime, monthYear, specificTime, title, link }) => {
  return (
    <EventItem className="event-item">
      <div className="event-left-container">
        <div className="day-time">{dayTime}</div>
        <div className="month-year">{monthYear}</div>
      </div>
      <div className="event-right-container">
        <div className="event-right-content">
          <div className="event-img">
            <img src={url} alt="Test" />
          </div>
          <div className="event-content">
            <div className="title">{title}</div>
            <div className="time">
              <span>{specificTime}</span>
            </div>
            <div className="event-register">
              <a href={link} className="event-register-content" target="_blank">
                <span>đăng kí</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </EventItem>
  );
};

export default Event;
