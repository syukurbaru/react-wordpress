import axios from "axios";

const instance = axios.create({ baseURL: "https://hotel.devsocial.my.id" });

export default instance;
