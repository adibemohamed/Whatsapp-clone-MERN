import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:9005",
});

export default instance;
