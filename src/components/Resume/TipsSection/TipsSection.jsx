import { TipsSectionContent, TipsSectionContainer } from "./TipsSection.styled";
import { IoClose } from "react-icons/io5";
import useBackDrop from "@hooks/useBackDrop";
import { Zoom } from "react-reveal";
import { Fragment } from "react";

const TipsSection = ({ onCloseTips, type }) => {
  useBackDrop("root-portal");
  const tips = [
    {
      type: "PersonalDetail",
      title: "THÔNG TIN CÁ NHÂN",
      ptag: [],
      liTags: [
        {
          field: "Họ và tên:",
          content: "cần được viết đầy đủ và chính xác.",
          className: "",
        },
        {
          field: "E-mail:",
          content:
            "cần nghiêm túc bao gồm cả họ và tên. Ngoài ra, có thể thêm các ký hiệu tắt trong lĩnh vực chuyên môn hoặc trường đại học.",
          className: "",
        },
        {
          field: "",
          content:
            "Ví dụ: nguyenvana.work@gmail.com, nguyenvana.ueh@gmail.com, annienguyen.hr@gmail.com",
          className: "outline-none",
        },
        {
          field: "Tiêu đề:",
          content: "vị trí ứng tuyển của bạn cho công ty",
          className: "",
        },
        {
          field: "Ảnh đại diện:",
          content:
            "chèn ảnh phù hợp, nhìn thấy khuôn mặt trực diện đồng thời trang phục của ảnh cũng cần phù hợp. Không chọn ảnh chỉ nhìn thấy một phần khuôn mặt hoặc quay lưng về phía trước, ảnh selfie.",
          className: "",
        },
        {
          field: "Link:",
          content: "website, blog cá nhân hay mạng xã hội (LinkedIn)",
          className: "",
        },
        {
          field: "Địa chỉ:",
          content: "địa chỉ đang ở và sinh sống hiện tại",
          className: "",
        },
      ],
    },
    {
      type: "Summary",
      title: "TÓM TẮT",
      ptags: [
        {
          content:
            "Nội dung không nên quá dài, chọn ra những đặc điểm nổi bật nhất. Không nên quá khiêm tốn về thành tích nhưng cũng không tỏ ra kiêu ngạo, giả dối thông tin.",
          className: "",
        },
        {
          content: "Nên trình bày 3 - 5 dòng:",
          className: "text-bold",
        },
      ],

      liTags: [
        {
          field: "",
          content:
            "Giới thiệu bản thân bằng 3 tính từ nói lên con người bạn, ngành nghề bạn đang theo đuổi và vị trí hiện tại.",
          className: "",
        },
        {
          field: "",
          content:
            "Nêu ngắn gọn tổng quan công việc đã làm trước đó và chúng đã giúp xây dựng sự nghiệp và kỹ năng của mình như thế nào.",
          className: "",
        },
        {
          field: "",
          content:
            "Mô tả ngắn gọn kỹ năng, kiến thức liên quan đến nghiệp vụ cho nhà tuyển dụng lý do tại sao họ nên tuyển bạn (Viết sát với mô tả công việc - JD)",
          className: "outline-none",
        },
        {
          field: "",
          content:
            "Mục tiêu và dự định: trong ngắn hạn (1 – 3 năm) và mục tiêu dài hạn (> 3 năm) là gì? Dự định về ngành nghề hiện tại như thế nào? Lộ trình phát triển và kỳ vọng tương lai? ",
          className: "",
        },
      ],
    },

    {
      type: "Education",
      title: "HỌC VẤN",
      ptags: [],
      liTags: [
        {
          field: "",
          content: "KHÔNG đưa quá trình học tập từ cấp 1, 2, 3",
          className: "",
        },
        {
          field: "",
          content:
            "Tóm tắt ngắn gọn về quá trình học tập của bạn bao gồm thời điểm nhập học, tốt nghiệp, tên trường, chuyên ngành và thông tin mô tả thêm như điểm trung bình (GPA).",
          className: "",
        },
      ],
    },
    {
      type: "Experience",
      title: "KINH NGHIỆM ",
      ptags: [
        {
          content:
            "Nếu bạn là người đã có kinh nghiệm thì mục này có thể tích hợp thêm các thành tích nổi bật đã đạt được trong công việc cũ. Mục thành tích sẽ được giành cho những giải thưởng bạn đã đạt được cho quá tình học tập, hoạt động ngoại khóa, tình nguyện, CLB,… Ngoài ra, để gia tăng tính thuyết phục với nhà tuyển dụng, bạn hãy đăng tải các minh chứng bạn đạt được dưới dạng file ảnh, pdf, video,… ",
          className: "",
        },
      ],
      liTags: [
        {
          field: "",
          content: "Viết dưới dạng gạch đầu dòng, phân chia ý rõ ràng",
          className: "",
        },
        {
          field: "",
          content:
            "Liệt kê theo thứ tự thời gian, công việc làm gần đây nhất đưa lên đầu tiên.",
          className: "",
        },
        {
          field: "",
          content: "Chọn các công việc làm trên 6 tháng (ngoại trừ thực tập)",
          className: "",
        },
        {
          field: "",
          content:
            "Chọn lọc các công việc liên quan đến vị trí đang ứng tuyển.",
          className: "",
        },
        {
          field: "",
          content:
            "Viết theo format: Tên công ty - Thời gian làm việc - Vị trí - Vai trò chung - Thành thích, giải thưởng của bạn .",
          className: "",
        },

        {
          field: "",
          content:
            "Minh chứng cụ thể, số liệu xác thực (doanh thu tăng bao nhiêu %, kiếm về bao nhiêu khách hàng …).",
          className: "",
        },
      ],
      examples: [
        "Ví dụ:",
        "CÔNG TY SIMCareer (6/6/2022 - 6/12/2022)",
        "Nhân viên Marketing",
        "- Thiết kế và phát triển kế hoạch tiếp thị truyền thông trên các kênh Youtube, TikTok giúp tăng lượt theo dõi và tăng tương tác các kênh này lên tới 40% trong vòng 4 tháng.",
        "- Phụ trách lên kế hoạch truyền thông cho sự kiện “GENZ ngại chi việc khó” thu hút được 2000 sinh viên tham dự. (*đính kèm file minh chứng từ công ty SIMCareer).",
        "Nếu bạn là sinh viên chưa có kinh nghiệm thì mục kinh nghiệm hãy thành thật ghi “Chưa có kinh nghiệm”. Và bạn có thể làm nổi bật CV của mình thông qua mục thành tích; nêu lên những giải thưởng bạn đã đạt được cho quá tình học tập, hoạt động ngoại khóa, tình nguyện, CLB,… Để gia tăng tính thuyết phục thêm, bạn có thể đăng tải các minh chứng kết quả cuộc thi bạn đạt được dưới dạng file ảnh, pdf, video,… ",
      ],
    },
    {
      type: "Achievements",
      title: "THÀNH TÍCH",
      ptags: [],
      liTags: [
        {
          field: "",
          content:
            "Chọn thành tích nổi bật nhất của bản thân liên quan đến vị trí ứng tuyển",
          className: "",
        },
        {
          field: "",
          content: "Mô tả thành tích bằng số liệu, dẫn chứng cụ thể ",
          className: "",
        },
        {
          field: "",
          content:
            "Các hoạt động tình nguyện, ngoại khóa, CLB, giải thưởng từ các cuộc thi liên quan đến ngành nghề",
          className: "",
        },
        {
          field: "",
          content:
            "Bạn hãy đăng tải hình ảnh minh chứng về các thành tích nêu trên để gia tăng tính thuyết phục đối với nhà tuyển dụng",
          className: "",
        },
      ],
      examples: [
        "Ví dụ: Ứng tuyển vị trí thực tập sinh Marketing ",
        "- Giải 3 cuộc thi “CMO Forum 2022” thuộc trường Đại học Kinh tế Thành phố Hồ Chí Minh (*đính kèm file ảnh giấy chứng nhận từ cuộc thi)",
        "- Thành viên ban Communications (2020 - 2022) thuộc CLB A trường Đại học Kinh tế Thành phố Hồ Chí Minh. (*đính kèm file ảnh giấy chứng nhận)",
      ],
    },

    {
      type: "Skill",
      title: "KỸ NĂNG",
      ptags: [],
      liTags: [
        {
          field: "",
          content:
            "Nêu các kỹ năng nghiệp vụ, kỹ năng mềm giúp ích cho vị trí ứng tuyển (dựa trên JD,JS, yêu cầu của công việc)",
          className: "",
        },
        {
          field: "",
          content:
            "Ví dụ: kĩ năng lập trình web, kĩ năng thiết kế (đối với CV xin việc IT)",
          className: "outline-none",
        },
        {
          field: "",
          content:
            "Đưa minh chứng cụ thể những kỹ năng đạt được qua hoạt động gì, tổ chức nào,…",
          className: "",
        },

        {
          field: "",
          content:
            "Bạn hãy đăng tải hình ảnh, video hoặc các mình chứng về kỹ năng của mình để gia tăng tính thuyết phục đối với nhà tuyển dụng. ",
          className: "",
        },
        {
          field: "",
          content:
            "Ví dụ: Kỹ năng “Thuyết trình” - Chứng nhận bởi: DSA - Phòng chăm sóc và hỗ trợ người học Trường Đại học Kinh tế Thành phố Hồ Chí Minh (*đính kèm giấy chứng nhận)",
          className: "outline-none",
        },
      ],
    },

    {
      type: "Certificate",
      title: "CHỨNG CHỈ",
      ptags: [],
      liTags: [
        {
          field: "",
          content:
            "Cung cấp các chứng chỉ được yêu cầu của vị trí ứng tuyển (lưu ý: các chứng chỉ nên còn thời hạn hiệu lực) ",
          className: "",
        },
        {
          field: "",
          content:
            "Bạn hãy đăng tải hình ảnh minh chứng về chứng chỉ (dưới dạng file pdf, jpg, jpeg, png) để gia tăng tính thuyết phục đối với nhà tuyển dụng",
          className: "",
        },
        {
          field: "",
          content:
            "Format: Tên chứng chỉ - Thời gian lấy bằng gần đây nhất - Band điểm (đối với các chứng chỉ ngoại ngữ) - Cấp bởi",
          className: "",
        },

        {
          field: "",
          content:
            "Ví dụ: IELTS (11/2022) - 7.5 - Cấp bởi: Hội đồng Anh (British Council) ",
          className: "outline-none",
        },
      ],
    },
    {
      type: "Hobby",
      title: "SỞ THÍCH",
      ptags: [],
      liTags: [
        {
          field: "",
          content:
            "Có thể trình bày thêm để nhà tuyển dụng có thể hiểu rõ hơn về bạn.",
          className: "",
        },
      ],
    },
  ];

  return (
    <Zoom>
      <TipsSectionContainer>
        <TipsSectionContent>
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
                {tips
                  .filter((tip) => {
                    return tip.type === type;
                  })
                  .map((tip, idx) => {
                    return (
                      <Fragment key={idx}>
                        <h2 className="h5 title-tip">{tip?.title}</h2>
                        {tip?.ptags?.length > 0 &&
                          tip?.ptags.map(({ content, className }, idx) => {
                            return (
                              <p className={className} key={idx}>
                                {content}
                              </p>
                            );
                          })}
                        {tip?.liTags.length > 0 && (
                          <ul className="list-tips">
                            {tip?.liTags.map(
                              ({ field, content, className }, idx) => {
                                return (
                                  <Fragment key={idx}>
                                    <li className={className}>
                                      <strong>{field}</strong> {content}
                                    </li>
                                  </Fragment>
                                );
                              }
                            )}
                          </ul>
                        )}
                        {tip?.examples &&
                          tip?.examples.map((el, idx) => {
                            return <p key={idx}>{el}</p>;
                          })}
                      </Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </TipsSectionContent>
      </TipsSectionContainer>
    </Zoom>
  );
};

export default TipsSection;
