import React from 'react'

export default function Input(props) {
  return (
    <div className="row justify-content-center align-items-center mb-3">
      <div className="col-md-1 formLabel">{props.label}:</div>
      <div className="col-4 w-50">
        <input
          className="col form-control inputBox"
          id={props.label}
          onInput={(e)=>(e.target.value.length > props.length)?e.target.value = e.target.value.slice(0, props.length):""}
          type={props.type}
          value={props.value}
          onChange={(e) => props.set(e.target.value)}
          required
        />
        <div className="invalid-feedback" id={`feedback_${props.label}`}>{props.validationMessage}</div>
      </div>
    </div>
  );
}
