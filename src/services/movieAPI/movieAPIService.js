import axios from "./baseUrl";

const getAllMovies = () => {
  return axios.get(
    "https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=c42f83c039e74a26d1c66145a0ada872"
  );
};


export default { getAllMovies }
