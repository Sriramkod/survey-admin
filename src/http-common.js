import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://ec2-54-167-49-153.compute-1.amazonaws.com:3000/";
} else {
  baseurl = "http://ec2-54-167-49-153.compute-1.amazonaws.com:3000/";
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
