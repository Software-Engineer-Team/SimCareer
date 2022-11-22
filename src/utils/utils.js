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

export const getYears = (startYear, endYear) => {
  const years = [];
  for (let index = startYear; index < endYear; index++) {
    years.push(index);
  }
  return years;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

export const uploadImageHandler = (imgRef, callback) => {
  if (imgRef.current.files[0]) {
    const fReader = new FileReader();
    const file = imgRef.current.files[0];
    fReader.readAsDataURL(file);
    fReader.onload = () => {
      callback(fReader.result, file.name);
    };
  }
};

export const uploadFileHandler = (fileRef, callback) => {
  if (fileRef.current.files[0]) {
    const fReader = new FileReader();
    const file = fileRef.current.files[0];
    console.log(file);
    fReader.readAsDataURL(file);
    fReader.onload = () => {
      callback(fReader.result, file.name);
    };
  }
};

export const showMenuHandler = (cb, showMenu) => {
  const checkIsClickOutside = () => {
    if (showMenu) cb();
  };
  document.addEventListener("click", checkIsClickOutside);
  return () => {
    document.removeEventListener("click", checkIsClickOutside);
  };
};
