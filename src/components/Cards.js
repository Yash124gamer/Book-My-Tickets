import React, { Component } from 'react'
import Movies from './moviesDetail';
import Card from './Card';


export default function Cards(props) {


  return (
    <div className='py-3' >
      <h3 className=' ms-2 movieName pb-2' style={{color:"white"}}>Recommended Movies</h3>
    <div className='container flex-nowrap'>
      <div id="carouselExample" className="carousel slide ms-3">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className='row flex-nowrap'>
              <Card movie={Movies.movie2}  />
              <Card movie={Movies.movie5} />
              <Card movie={Movies.movie3}  />
            </div>
          </div>
          <div className="carousel-item">
            <div className='row flex-nowrap ' >
              <Card movie={Movies.movie4}  />
              <Card movie={Movies.movie1}  />
              <Card movie={Movies.movie6} />
            </div>
          </div>
          </div>
          <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExample" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next col" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
