import axios from "axios";

const post = (path, data, reset) => {
  console.log(JSON.stringify(data));
  axios.post(
    process.env.REACT_APP_BASE_URL + path,

    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  reset({});
};

export { post };
