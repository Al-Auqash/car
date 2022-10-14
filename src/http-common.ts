import axios from "axios";

export default axios.create({
   baseURL: "https://vpic.nhtsa.dot.gov/api/",
   headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
   },
});
