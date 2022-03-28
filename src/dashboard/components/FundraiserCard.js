import React from 'react'

export default function FundraiserCard() {
  return (
    <div className='col-md-3'>
        <div className='card shadow-sm' style={{width:'100%'}}>
        <div className='bg-secondary' style={{height: '7rem'}}></div>
            <div className='card-body'>   
                Fundraiser created 2 days ago
                <hr/>
                Details
            </div>
        </div>
    </div>
  )
}
