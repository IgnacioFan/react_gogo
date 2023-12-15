import axios, { AxiosPromise } from "axios";

const API_DOMAIN = "https://hahow-recruit.herokuapp.com"

const getHeroList = () => {
  try {
    return axios.get(API_DOMAIN + "/heroes", {
      headers: { "content-type": "application/json" }
    });
  } catch (err) {
    return Promise.reject(new Error("Fail to call /heroes"))
  }
}

const getHeroProfle = (id: string ) => {
  try {
    return axios.get(API_DOMAIN + "/heroes/" + id + "/profile", {
      headers: { "content-type": "application/json" }
    });
  } catch (err) {
    return Promise.reject(new Error("Fail to call /heroes/" + id + "/profile"))
  }
}

export { getHeroList, getHeroProfle }
