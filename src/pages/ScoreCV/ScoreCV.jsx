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
import { Fade, Flip } from "react-reveal";

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
            <div>SIMPROFILE</div>
          </div>
        </ScoreCVHeader>
        <ScoreCVBody>
          <div className="score-show-container">
            <div className="score-show-content">
              <Flip left>
                {/* <h3>Your CV Score</h3> */}
                <div className="score-number">YOUR PROFILE</div>
              </Flip>
            </div>
          </div>
          <div className="chart-container">
            <div className="specific-chart">
              {/* <Fade right> */}
              {/*   <h3>1. Đánh giá chung</h3> */}
              {/* </Fade> */}
              {/* <div className="break-line"> */}
              {/*   <div></div> */}
              {/* </div> */}
              <RadarChart />
              {/* <AreaChart /> */}
            </div>
            {/* <div className="specific-chart"> */}
            {/*   <Fade right> */}
            {/*     <h3>2. Tính phù hợp</h3> */}
            {/*   </Fade> */}
            {/*   <div className="break-line"> */}
            {/*     <div className="another-color"></div> */}
            {/*   </div> */}
            {/*   <PieChart /> */}
            {/* </div> */}
          </div>

          <div className="join-with-us">
            {/* <Fade bottom> */}
            {/*   <h3> */}
            {/*     Tham gia ngay cùng SIMCareer để gia tăng cơ hội tuyển dụng */}
            {/*   </h3> */}
            {/*   <div className="join-logo"> */}
            {/*     <img src="/images/simcareer-not-label.png" alt="" /> */}
            {/*   </div> */}
            <div className="join-btn">
              <Link to={"/dash-board"} className="join-btn-content">
                <span>Tiếp tục</span>
              </Link>
            </div>
            {/* </Fade> */}
          </div>
          <WaveAnimation top={400} height={"500px"} />
          {/* <WaveAnimation top={400} height={"1100px"} /> */}
          {/* <WaveAnimation top={1800} height={"100vh"} /> */}
        </ScoreCVBody>
      </ScoreCVContent>
    </ScoreCVContainer>
  );
};

export default ScoreCV;
