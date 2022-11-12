import React, { Fragment } from "react";
import {
  PriceBtn,
  PriceListContainer,
  PriceListContent,
} from "./PriceList.styled";
import { prices } from "@assets/data/prices";
import { Fade, Flip, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fileActions } from "@store/file-slice";

const PriceList = () => {
  const dispatch = useDispatch();

  return (
    <PriceListContainer>
      <PriceListContent>
        <div className="inner-price-content">
          {prices.map(
            (
              {
                url,
                typeOfPriceMore,
                typeOfPrice,
                priceContents,
                btn,
                btnColor,
                newGif,
              },
              idx
            ) => {
              return (
                <div className="price-content" key={idx}>
                  <div className="image-price">
                    <img src={url} alt="Test" />
                    <Flip top>
                      <div className="price">{typeOfPrice}</div>
                    </Flip>
                  </div>
                  <div className="price-content-column">
                    <div className="price-content-description">
                      <Zoom right cascade>
                        <h4 className="text-more">{typeOfPriceMore}</h4>
                        {priceContents.map((content, idx) => {
                          if (idx === priceContents.length - 1) {
                            return (
                              <Zoom right cascade key={idx}>
                                <div>
                                  <p className="text last-row-text">
                                    {content}
                                    {newGif && (
                                      <img
                                        src={newGif}
                                        width="40px"
                                        height="35px"
                                        alt="Test"
                                      />
                                    )}
                                  </p>
                                </div>
                              </Zoom>
                            );
                          }
                          return (
                            <Zoom right cascade key={idx}>
                              <div>
                                <p className="text">{content}</p>
                                <div className="break-line">
                                  <div></div>
                                </div>
                              </div>
                            </Zoom>
                          );
                        })}
                      </Zoom>
                    </div>
                    <Fade top>
                      <PriceBtn className="price-btn" btnColor={btnColor}>
                        <Link
                          to={idx === 1 ? "/profile" : "/dash-board"}
                          className="price-btn-content"
                          onClick={() => {
                            if (idx === 0) {
                            }
                            if (idx === 1) {
                              dispatch(fileActions.setStatus());
                            }
                          }}
                        >
                          <span>{btn}</span>
                        </Link>
                      </PriceBtn>
                    </Fade>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </PriceListContent>
    </PriceListContainer>
  );
};

export default PriceList;
