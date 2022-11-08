import React, { Fragment } from "react";
import {
  PriceBtn,
  PriceListContainer,
  PriceListContent,
} from "./PriceList.styled";

const PriceList = () => {
  const prices = [
    {
      url: "/images/free-price.jpg",
      typeOfPrice: "Miễn phí",
      typeOfPriceMore: "",
      priceContents: [
        "Cập nhật tin tức ngành nghề mà bạn quan tâm.",
        "Cập nhật sự kiện trực tiếp và trực tuyến liên quan đến ngành nghề.",
        "Cung cấp vị trí công việc liên quan đến ngành nghề đang có trên thị trường miễn phí.",
        "Phân tích CV",
      ],
      btn: "Trải nghiệm ngay!",
      btnColor: "#f25b64",
      newGif: "/images/new-icon.gif",
    },
    {
      url: "/images/plus-price.jpg",
      typeOfPrice: "99.000đ/gói",
      typeOfPriceMore: "SIMFREE và hơn thế nữa",
      priceContents: [
        "Chuyên gia đánh giá, nhận xét và gợi ý giải pháp sửa đổi CV.",
        "Chuyên gia tư vấn thêm các nội dung: cách viết trong CV, phong cách thiết kế phù hợp với lĩnh vực bạn đang quan tâm…",
        "Chuyên gia giải đáp các câu hỏi bạn đang băn khoăn về hồ sơ trong đơn đăng ký.",
      ],
      btn: "Đăng ký ngay!",
      btnColor: "#dd366e",
    },
    {
      url: "/images/pro-price.jpg",
      typeOfPrice: "199.000đ/gói",
      typeOfPriceMore: "SIMPLUS và hơn thế nữa",
      priceContents: [
        "Chuyên gia nhận xét và gợi ý cách sửa thiết kế, câu từ tiếng Anh, chỉ lỗi ngữ pháp để ghi điểm với nhà tuyển dụng, tăng cơ hội mời phỏng vấn.",
        "Dựa trên bản CV Tiếng Việt từ bạn, chuyên gia sẽ dịch sang Tiếng Anh đúng chuẩn và chuyên nghiệp.",
        "Các chuyên gia từ SIMCareer sẽ sử dụng các từ khóa tốt nhất, mạnh nhất, phù hợp nhất với vị trí và lĩnh vực, tăng khả năng trúng tuyển của bạn.",
      ],
      btn: "Đăng ký ngay!",
      btnColor: "#00a5dd",
    },
    {
      url: "/images/max-price.jpg",
      typeOfPrice: "599.000đ/gói",
      typeOfPriceMore: "SIMPRO và hơn thế nữa",
      priceContents: [
        "Kho video phỏng vấn mẫu vị trí tương tự trong lĩnh vực mà bạn quan tâm.",
        "Hướng dẫn chuyên sâu kỹ năng phỏng vấn (tư vấn 1-1).",
        "Virtual Intern",
      ],
      btn: "Đăng ký ngay!",
      btnColor: "#894eb3",
      newGif: "/images/comming-soon-icon.gif",
    },
  ];
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
                    <div className="price">{typeOfPrice}</div>
                  </div>
                  <div className="price-content-column">
                    <div className="price-content-description">
                      <h4 className="text-more">{typeOfPriceMore}</h4>
                      {priceContents.map((content, idx) => {
                        if (idx === priceContents.length - 1) {
                          return (
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
                          );
                        }
                        return (
                          <Fragment key={idx}>
                            <p className="text">{content}</p>
                            <div class="break-line">
                              <div></div>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                    <PriceBtn className="price-btn" btnColor={btnColor}>
                      <a
                        href={"#"}
                        className="price-btn-content"
                        target="_blank"
                      >
                        <span>{btn}</span>
                      </a>
                    </PriceBtn>
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
