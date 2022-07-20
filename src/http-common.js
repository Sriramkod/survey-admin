import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  //local
  //baseurl = "http://localhost:3000/";
  //remote - http://34.227.74.196:3000
   baseurl = "http://34.227.74.196:3000/";
} else {
  //local
  //baseurl = "http://localhost:3000/";
  //remote - http://34.227.74.196:3000
   baseurl = "http://34.227.74.196:3000/";

}
 
export default axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    crossDomain: true
  }
});
