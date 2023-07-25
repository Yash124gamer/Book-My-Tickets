import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="col me-0 pe-0 overflow-visible">
      <div className="card h-100  w-75 p-0 m-0 border border-0">
        <Link to='/movies' state={{movie:props.movie}} className='h-100'>
          <img src={props.movie.img}  className="card-img-top rounded-top h-100"/>
        </Link>
        <div className="card-footer flex p-0 py-1 " style={{backgroundColor:"#0d6efd",color:"white"}}>
          <small className="d-flex justify-content-center responsive-text p-0">{`Rating ${props.movie.rating}`}</small>
        </div>
      </div>
    </div>
  )
}
