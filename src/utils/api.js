import axios from "axios";

function apiClient() {
    axios.create({
        baseURL: "http://localhost:8080/api/v1/journal",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    })
}
    

export default apiClient;