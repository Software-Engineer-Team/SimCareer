import React, { Fragment } from "react";
import {
  PriceBtn,
  PriceListContainer,
  PriceListContent,
} from "./PriceList.styled";
import { prices } from "@assets/data/prices";
import { Fade, Flip, Zoom } from "react-reveal";

const PriceList = () => {
  return (
    <PriceListContainer>
      <PriceListContent>
        <div className="inner-price-content">
          {prices.map(
            ({
              url,
              typeOfPriceMore,
              typeOfPrice,
              priceContents,
              btn,
              btnColor,
              newGif,
            }) => {
              return (
                <div className="price-content">
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
                              <Zoom right cascade>
                                <div key={idx}>
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
                            <Zoom right cascade>
                              <div key={idx}>
                                <p className="text">{content}</p>
                                <div class="break-line">
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
                        <a
                          href={"#"}
                          className="price-btn-content"
                          target="_blank"
                        >
                          <span>{btn}</span>
                        </a>
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
