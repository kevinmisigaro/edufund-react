import React from 'react'
import { Link } from 'react-router-dom'

export default function FundraiserSuccess() {
  return (
    <div className='container text-center' style={{marginTop: '100px'}}>
          <h3>
            Successfully added a fundraiser!
          </h3>
          <br/>
          <Link to="/dashboard/fundraisers" className='btn btn-primary'>
            Return to see all fundraisers
          </Link>
    </div>
  )
}
