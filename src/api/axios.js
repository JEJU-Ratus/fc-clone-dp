import axios from 'axios';

const instance = axios.create({
  baseURL : "https://api.themoviedb.org/3",
  params: {
    api_key:"2afa815a22af60c144947a827f822292",
    language: "ko-KR"
  }
})

export default instance;