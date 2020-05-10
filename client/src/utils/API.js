import axios from "axios";

export default {
    getProjects: function() {
        return axios.get("/projects");
    },
    sendForm: function(data) {
        return axios.post("/send", data);
    } 
}