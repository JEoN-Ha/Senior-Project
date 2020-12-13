import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{

  state={
    isLoading: true,
    movies :[]
  };

  //async,await를 쓰는 이유
  // =  axios가 느리기 때문에 Javascript에게 getMovies function을 실행하려면 시간이 조금 걸릴거다 그니까 기다려
  getMovies = async() =>{    
    const {data:{data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies,isLoading:false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;

    return (
      <section className ="container">
        {isLoading ? (
        <div className ="loader">
          <span className = "loader_text">Loading...</span>
        </div>
        ) : (
          <div className="movies">
            {movies.map(movie =>(
              <Movie
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
                />
            ))}
          </div>
            )}
          </section>
         );
  }
}
export default Home;
