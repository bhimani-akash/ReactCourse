import axios from "axios";

// const KEY = "--KEY--";
const KEY = "AIzaSyBm3Qa9TXY_pUd5t-a_dvVzx1pbw5jMuqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
