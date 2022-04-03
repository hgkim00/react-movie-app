import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { Container } from '@mui/material';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
      const json =await response.json();
  
      console.log(json);
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, []);

    const loadingStatus = (loading, movies) => {
      if (loading === true) {
        return (
          <Container 
            maxWidth="xs"
            className={styles.loader}

          >
          <LoadingButton 
            loading 
            size="large" 
            loadingPosition="end" 
            variant="contained"
            fullWidth={true}
            style={{
              backgroundColor: "tomato",
              color: "white",
            }}
          >
            Loading...
          </LoadingButton>
          </Container>
        );
      } else {
        return (
        <div className={styles.movies}>
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
        ))}</div>
        );
      }
    }
  
  
    return (
      <div className={styles.container}>
        {loadingStatus(loading, movies)}
      </div>
    )
  
}

export default Home;