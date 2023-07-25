import React from 'react'

export default function Details(props) {
   
  return (
    <div className="detailBox" style={{color: "white"}}>
      <span className="responsive-text movieName">{props.details.name}</span>
      <span className="responsive-text">{props.details.genre}</span>
      <span className="responsive-text">{props.details.Release}</span>
      <span className="responsive-text">{props.details.duration}</span>
      {(props.releaseState) ? `` : <button type="button" className="btn btn-primary col-md-5 mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><span className='responsive-text d-flex justify-content-center'>Book Now</span></button>}

      {/* This is Code for Bootstrap Modal */}
      <div className="modal  fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{color:"black"}}>Select Language</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off"/>
                  <label className="btn btn-primary me-3" htmlFor="btn-check">English</label>

                  <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off"/>
                  <label className="btn btn-primary" htmlFor="hindi">Hindi</label>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger justify-content-start" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-success">Continue</button>
                </div>
            </div>
        </div>
    </div>


  </div>
  )
}

