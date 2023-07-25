import React from 'react'
import logo from './Utilities/youtube.svg'

export default function TrailerCard(props) {
  return (
    <div className='trailerCard px-0 col-1'>
        <div className='trailerImg rounded-top d-flex justify-content-center align-items-center'>
            <img src={props.movieImg} className="trailer" />
            <div className="" style={{width:"15%",position:"relative"}}>
                <a href={props.trailer}><img src={logo} style={{width:"100%"}}/></a>
            </div>
        </div>
        <div className='trailerFooter rounded-bottom ' style={{backgroundColor:"white"}}>
            <small className="d-flex justify-content-center responsive-text" >{(props.releaseState) ? 'In Cinemas Soon' : 'In Cinemas now'}</small>
        </div>
    </div>
  )
}
