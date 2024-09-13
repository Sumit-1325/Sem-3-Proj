import React from 'react'
import Details from './Details'
import './styles/Details.css'

export default function Founditems_List() {
  return (
    <>
      <h1 className='heading'>FOUND ITEMS</h1>
      <div className="box">
        <div>
          <Details content={"Item No 1"} />
        </div>
        <div>
          <Details content={"Item No 2"} />
        </div>
        <div>
          <Details content={"Item No 3"} />
        </div>
        <div>
          <Details content={"Item No 24"} />
        </div>
        <div>
          <Details content={"Item No 24"} />
        </div>
        <div>
          <Details content={"Item No 24"} />
        </div>
      </div>
    </>
  )
}
