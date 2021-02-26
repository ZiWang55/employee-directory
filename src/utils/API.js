import axios from "axios";

export default {
    // Get users from randomuser.me
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}