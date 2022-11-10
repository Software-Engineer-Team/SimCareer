import React, { useRef } from "react";
import {
  ScoreCVBody,
  ScoreCVContainer,
  ScoreCVContent,
  ScoreCVHeader,
} from "./ScoreCV.styled";

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  RadialLinearScale,
} from "chart.js";
import { PieChart, RadarChart, WaveAnimation } from "@components/index";
import { Link } from "react-router-dom";

ChartJS.register(
  RadialLinearScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

const ScoreCV = () => {
  return (
    <ScoreCVContainer>
      <ScoreCVContent>
        <ScoreCVHeader>
          <div className="score-header">
            <img src="/images/simcareer-not-label.png" alt="" />
            <div>SIMCV FEEDBACK</div>
          </div>
        </ScoreCVHeader>
        <ScoreCVBody>
          <div className="score-show-container">
            <div className="score-show-content">
              <h3>Your CV Score</h3>
              <div className="score-number">6/10</div>
            </div>
          </div>
          <div className="chart-container">
            <div className="specific-chart">
              <h3>1.Điểm mạnh</h3>
              <div className="break-line">
                <div></div>
              </div>
              <RadarChart />
              {/* <AreaChart /> */}
            </div>
            <div className="specific-chart">
              <h3>1.Điểm mạnh</h3>
              <div className="break-line">
                <div></div>
              </div>
              <PieChart />
            </div>
          </div>

          <div className="join-with-us">
            <h3>Tham gia ngay cùng SIMCareer để gia tăng cơ hội tuyển dụng</h3>
            <div className="join-logo">
              <img src="/images/simcareer-not-label.png" alt="" />
            </div>
            <div className="join-btn">
              <Link to={"#"} className="join-btn-content">
                <span>Tiếp tục</span>
              </Link>
            </div>
          </div>
          <WaveAnimation top={100} height={"900px"} />
          <WaveAnimation top={1300} height={"100vh"} />
        </ScoreCVBody>
      </ScoreCVContent>
    </ScoreCVContainer>
  );
};

export default ScoreCV;
