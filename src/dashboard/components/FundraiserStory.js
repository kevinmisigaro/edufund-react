import React from 'react'

export default function FundraiserStory(props) {
  return (
    <>
        <p style={{ textAlign: 'justify' }}>
            {props.fundraiser?.story}
            </p>
            <br/><br/>
            <h5>
              My Educational background
            </h5>
            <p style={{ textAlign: 'justify' }}>
            {props.fundraiser?.background}
            </p>
    </>
  ) 
}
