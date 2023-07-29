
import React, { useState } from 'react';
import Movies from './moviesDetail';
import Carousel  from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
export default function BootstrapCarousel() {

  const[imgArr,changeArr] = useState({
    one:{
      imgLand:Movies.movie8.imgLand,
      img:Movies.movie8.img,
      name:Movies.movie8.name,
    },
    three:{
      imgLand:Movies.movie9.imgLand,
      img:Movies.movie9.img,
      name:Movies.movie9.name,
    },
  })
  const change = (event)=>{
    if(event==1)
      changeArr({
        one:{
          imgLand:Movies.movie9.imgLand,
          img:Movies.movie9.img,
          name:Movies.movie9.name,
        },
        three:{
          imgLand:Movies.movie7.imgLand,
          img:Movies.movie7.img,
          name:Movies.movie7.name,
        },
      })
    else 
    if(event===2)
    changeArr({
      one:{
          imgLand:Movies.movie7.imgLand,
          img:Movies.movie7.img,
          name:Movies.movie7.name,
      },
      three:{
        imgLand:Movies.movie8.imgLand,
        img:Movies.movie8.img,
        name:Movies.movie8.name,
      },
    })
    else
    changeArr({
      one:{
        imgLand:Movies.movie8.imgLand,
        img:Movies.movie8.img,
        name:Movies.movie8.name,
      },
      three:{
        imgLand:Movies.movie9.imgLand,
        img:Movies.movie9.img,
        name:Movies.movie9.name,
      },
    })
    }
  return (
    <>
    <h3 style={{color:"white"}}>Whats New</h3>
  <div className="row flex-nowrap pt-2 me-0">
    <div className="col-md px-0 w-25" style={{transition:"transform 7730ms ease-in-out"}}>
     <Link to="/movies" state={{movie:imgArr.three}}>
       <img className="d-block w-100 h-100 rounded-end"  src={imgArr.three.imgLand} alt="Image Two" />
     </Link>
    </div>
    <div className="col-md-6 w-50">
      <Carousel className="justify-content-center" pause="false" onSlide={change}>
        <Carousel.Item>
          <Link to="/movies" state={{movie:Movies.movie7}}>
            <img className="d-block w-100 rounded h-50 "  src={Movies.movie7.imgLand} alt="Image One" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/movies" state={{movie:Movies.movie8}}>
            <img className="d-block w-100 rounded h-50"  src={Movies.movie8.imgLand} alt="Image Two" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/movies" state={{movie:Movies.movie9}}>
            <img className="d-block w-100 rounded h-50"  src={Movies.movie9.imgLand} alt="Image Three" />
          </Link>
        </Carousel.Item>
        
      </Carousel>
    </div>
    <div className="col-md w-25 px-0" style={{overflow:"hidden",objectFit:"cover"}}>
      <Link to="/movies" state={{movie:imgArr.one}}>
        <img className="d-block w-100 rounded-start h-100 " src={imgArr.one.imgLand} alt="Image Two" />
      </Link>
    </div>
  </div>
</>
  );
}
