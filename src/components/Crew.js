import React from 'react'
import actorPhoto from './Utilities/admin.jpg'

export default function Crew(props) {
  return (
    <div className='col-2 mx-2 mb-2'>
        <div className='row d-flex justify-content-center'>
            <img src={actorPhoto} className='rounded-circle  p-0' style={{objectFit:"cover"}}/>
        </div>
        <div className='row castName d-flex'>
            {props.name}
        </div>
        <small className='row castRole d-flex justify-content-center'>
            {props.role}
        </small>
    </div>
  )
}
