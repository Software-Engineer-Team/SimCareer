import axios from "axios";

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePhoneNumber = (phone) => {
  return String(phone).match(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
};

export const checkRowIsComplete = (id, rows) => {
  const items = rows?.filter(
    ({ id: rid, status }) => rid === id && status === "Đã xem xét"
  );
  return items?.length > 0;
};

export const generateRandomId = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const postData = async (data, url) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url,
    data: JSON.stringify({ ...data }),
  };
  return await axios(options);
};
