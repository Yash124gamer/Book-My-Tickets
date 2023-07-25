import React from 'react';
import actorPhoto from './Utilities/admin.jpg'
import Crew from './Crew';

export default function AboutMovie(props) {
  const cast = props.details.cast;
  const crew = props.details.crew;
  return (
    <div className='container' style={{ color: "white" }}>
      <span className="responsive-text heading pb-2">About</span>
      <span className="responsive-text">{props.details.about}</span>
      <hr />
      <span className="responsive-text heading pb-2">Cast</span>
      <div className='row p-0'>
      {cast.map((element, index) => {
        return <div className='col-2 mx-2 mb-2' key={index} >
                  <div className='row d-flex justify-content-center'>
                    <img src={actorPhoto} className='rounded-circle  p-0' style={{objectFit:"cover"}}/>
                  </div>
                  <div className='row castName d-flex'>{element.name}</div>
                  <div className='row responsive-text d-flex justify-content-center'>as</div>
                  <small className='row castRole d-flex justify-content-center'>{element.role}</small>
              </div>
        })}
      </div >
      <hr/>
      <span className='responsive-text heading pb-2'>Crew</span>
      <div className='row p-0'>
          <Crew name={crew.director} role={"Director"}/>
          <Crew name={crew.producer} role={"Producer"}/>
          <Crew name={crew.Musician} role={"Musician"}/>
          <Crew name={crew.writer} role={"Writer"}/>
          <Crew name={crew["Executive Producer"]} role={"Executive Producer"}/>
      </div >
    </div>
  );
}
