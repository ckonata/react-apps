import axios from "axios";

export default axios.create({
  baseURL : "https://api.unsplash.com/",
  headers: {Authorization: "Client-ID 7K53AgnGiMcjIlo_jnlnZST6cxKBcX-0P63QIRZ3KfA"}
});
