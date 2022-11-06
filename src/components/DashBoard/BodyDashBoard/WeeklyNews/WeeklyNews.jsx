import { WeeklyNewsItem } from "./WeeklyNews.styled";

const WeeklyNews = ({
  url,
  specificTime,
  title,
  specificContent,
  flexReverse,
  link,
}) => {
  return (
    <WeeklyNewsItem flexReverse={flexReverse}>
      <div className="content">
        <div className="news-img">
          <img src={url} alt="Test" />
        </div>
        <div className="news-content">
          <div className="news-title">{title}</div>
          <div className="day-time">
            <div className="specific-time">
              <span>{specificTime}</span>
            </div>
            <div className="news-read">
              <a href={link} className="news-read-content" target="_blank">
                <span>Đọc ngay</span>
              </a>
            </div>
          </div>
          <div className="specific-content">
            <span>{specificContent}</span>
          </div>
        </div>
      </div>
    </WeeklyNewsItem>
  );
};

export default WeeklyNews;
