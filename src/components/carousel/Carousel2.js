import React, { useEffect, useState } from "react";
import Carousel2 from "react-multi-carousel";
import Style from "./Carousel2.module.css";
import "react-multi-carousel/lib/styles.css";
import movieList from "../../services/movieAPI/movieAPIService";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function MovieCarousel() {
  const [actionMovies, setActionMovies] = useState([]);
  const getActionMovieList = (e) => {
    movieList
      .getAllMovies()
      .then((response) => {
        console.log("response", response);
        setActionMovies(response.data.results);
      })
      .catch((e) => {
        console.log("the error", e.response);
      });
  };

  useEffect(() => {
    getActionMovieList();
  }, []);

  return (
    <Carousel2
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        // containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // renderButtonGroupOutside={true}
        // arrows={false}
        focusOnSelect={false}
        // className={Style.trythis}
    >

        {actionMovies.map((actionMovie) => (
            <div className={Style.movieContainer}>
              <img className={Style.movieImage} src={`https://image.tmdb.org/t/p/w200/${actionMovie.poster_path}`} alt=""/>
            </div>
        ))}

    </Carousel2>
  )
}

export default MovieCarousel;