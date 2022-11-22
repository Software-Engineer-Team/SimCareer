import { TipsSectionContainer } from "./TipsSection.styled";
import { IoClose } from "react-icons/io5";
import useBackDrop from "@hooks/useBackDrop";
import { Zoom } from "react-reveal";

const TipsSection = ({ onCloseTips }) => {
  useBackDrop("root-portal");

  return (
    <Zoom>
      <TipsSectionContainer>
        <div id="bulb-tip-modal" className="modal-tip-dialog " role="tooltip">
          <div className="modal-tip-content">
            <div className="modal-tip-header">
              <div
                id="bulb-tip-closer"
                title="Close"
                className="close-tip"
                onClick={onCloseTips}
              >
                <IoClose />
              </div>
            </div>
            <div className="modal-tip-body">
              <h2 className="h5 title-tip">Expert Insights</h2>
              <p>
                Hiring managers will scan this information looking for career
                progression, i.e.- how long you've stayed in each job, your
                growth and promotions, whether you've worked for similar
                companies and whether you have gaps in employment.
              </p>
              <ul className="list-tips">
                <li>
                  Enter basic information about your previous jobs so employers
                  can see where you've worked.
                </li>
                <li>
                  Don't abbreviate job titles. Using your full title looks more
                  professional and is easier for managers to understand.
                </li>
                <li>
                  Include start and end dates for each position. Leaving off
                  dates will make employers think you're hiding something.
                </li>
                <li>
                  Can't remember your exact start date or job title? Don't worry
                  - enter your best guess and come back to edit it later, once
                  you've confirmed the information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TipsSectionContainer>
    </Zoom>
  );
};

export default TipsSection;
