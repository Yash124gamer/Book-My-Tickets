import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Moviebackground from './Moviebackground'

export default function Movie_dis() {

  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation()
    const getData = async()=>{
      try {
        const url = `http://192.168.246.229:8080/getMovieDescription/?name=${location.state.movie.name}`;
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
    
        const jsonData = await response.text();
    
        try {
          const parsedData = await JSON.parse(jsonData);
          return (parsedData.findResult[0])
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(() => {
      async function fetchData() {
        try {
          const movieDetails = await getData();
          setMovieDetails(movieDetails); // Update the movieDetails state with the fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
    return (
    <>
      {movieDetails ? (
        <Moviebackground Details={movieDetails} movie={location.state.movie}/>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  )
}
