import React from 'react'
import TrailerCard from './TrailerCard'
import Details from './Details'
import AboutMovie from './AboutMovie';

export default function Moviebackground(props) {   //props.Details

    function isDateGreaterThanToday(dateString) {
        // Parse the given date string into a Date object
        const releasedate = new Date(dateString);
      
        // Get today's date as a Date object
        const today = new Date();
      
        // Set hours, minutes, seconds, and milliseconds to 0 to compare only the date part
        today.setHours(0, 0, 0, 0);
        releasedate.setHours(0, 0, 0, 0);
      
        // Compare the two dates
        return releasedate > today;
      }
      const releasedORnot = (isDateGreaterThanToday(props.Details.Release))

  return (
    <>
        <div className='row bcImg py-3' style={{
            backgroundImage:`linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${props.movie.imgLand})`,
            backgroundSize:"100% 100% ",
            overflow:"hidden"
            }}>
            <TrailerCard movieImg={props.movie.img} trailer={props.Details.Trailer} releaseState={releasedORnot}/>
            <Details details={props.Details} releaseState={releasedORnot}/>
        </div>
            <AboutMovie details={props.Details}/>
    </>
)
}
