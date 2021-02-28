import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
// eslint-disable-next-line import/no-anonymous-default-export
const API = {

  search: function(numUsers) {
    return axios.get(BASEURL`?results=${numUsers}`);
  }
};

export default API;