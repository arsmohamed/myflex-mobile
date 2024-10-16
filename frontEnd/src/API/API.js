import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class API {
  static signUp(username, email, password, onSuccess, onFail) {
    return axios
      .post("http://10.0.0.21:5001/myFlex/api/v1/signgup", {
        username: username,
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onSuccess(res);
      })
      .catch((e) => {
        onFail(e.response.data);
      });
  }

  static isLoggedIn() {
    console.log(localStorage.getItem("token"));
    return axios
      .get("http://10.0.0.21:5001/myFlex/api/v1/user", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  static logout(onSuccess, onFail) {
    localStorage.clear();
    onSuccess();
  }

  static getRecommendations(page) {
    console.log(page);
    return axios
      .get(`http://10.0.0.21:5001/myFlex/api/v1/user/recommendations?page=${page}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }

  static login(loginValue, password, onSuccess, onFail) {
    return axios
      .post("http://10.0.0.21:5001/myFlex/api/v1/login", {
        loginValue,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onSuccess(res);
      })
      .catch((e) => {
        onFail(e.response.data);
      });
  }

  // static loginAsGuest(onSuccess, onFail) {
  //   return axios
  //     .post("http://10.0.0.21:5001/myFlex/api/v1/login/guest")
  //     .then((res) => {
  //       console.log(res);
  //       AsyncStorage.setItem("token", res.data.token);
  //       AsyncStorage.setItem("user", JSON.stringify(res.data.user));
  //       AsyncStorage.setItem("guest", JSON.stringify(true));
  //       onSuccess(res);
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //       onFail(e);
  //     });
  // }

  static search(searchValue, page = 1) {
    return (
      axios
        .get(
          `http://10.0.0.21:5001/myFlex/api/v1/search/movie?searchQuery=${searchValue}&page=${page}`,
          {
            headers: { Authorization: localStorage.getItem("token") },
          },
        )
        // .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
    );
  }

  static movieDetails(movieID) {
    return (
      axios
        .get(`http://10.0.0.21:5001/myFlex/api/v1/movie?searchQuery=${movieID}`)
        // .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
    );
  }

  static addMovieToMyList(id) {
    return axios.patch(
      "http://10.0.0.21:5001/myFlex/api/v1/user/list",
      {
        id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    );
  }

  static removeMovieFromMyList(id) {
    return axios.delete("http://10.0.0.21:5001/myFlex/api/v1/user/list", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        id,
      },
    });
  }

  static watched(id, watched) {
    return axios.patch(
      "http://10.0.0.21:5001/myFlex/api/v1/user/list",
      { id, watched },
      {
        headers: { Authorization: localStorage.getItem("token") },
      },
    );
  }

  static getMyList() {
    return axios
      .get("http://10.0.0.21:5001/myFlex/api/v1/user/list", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export default API;
