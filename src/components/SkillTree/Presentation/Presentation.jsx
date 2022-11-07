import { Fade } from "react-reveal";
import { PresentationContainer } from "./Presentation.styled";
import { Button } from "@mui/material";

const Presentation = ({ onClose, h1, pHead, lis, pTail, link }) => {
  const closeHandler = () => {
    onClose();
  };

  return (
    <PresentationContainer>
      <div className="back-drop"></div>
      <Fade bottom>
        <div className="dialog-container">
          <div className="dialog-content">
            <div className="dialog-content-des">
              <div className="virtual-env">
                <h1>{h1}</h1>
                <p className="text-muted">Snippets - 5 min read</p>
                {/* <h2>Introduction</h2> */}

                {pHead.map((p) => {
                  return <p>{p}</p>;
                })}

                {lis?.length > 0 && (
                  <ul>
                    {lis.map((li) => {
                      return <li>{li}</li>;
                    })}
                  </ul>
                )}

                {pTail.map((p) => {
                  return <p>{p}</p>;
                })}
                <a href={link} target="_blank">
                  <Button
                    variant="contained"
                    size="medium"
                    style={{
                      marginTop: "0px",
                      padding: "5px 5px",
                      background: "#fff",
                      color: "#000",
                      textTransform: "none",
                      width: "130px",
                      alignSelf: "center",
                      fontFamily: "Muli",
                      fontWeight: 700,
                    }}
                  >
                    Đăng kí ngay!
                  </Button>
                </a>
              </div>
            </div>

            <div className="btn-container">
              <button className="btn" type="button" onClick={closeHandler}>
                <span className="label">CLOSE</span>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </PresentationContainer>
  );
};

export default Presentation;
