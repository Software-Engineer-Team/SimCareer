import axios from "axios";
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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
