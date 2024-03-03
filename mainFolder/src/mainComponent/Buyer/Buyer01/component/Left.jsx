import React from 'react'
import BgImg from './BgImg'
import MainText from './MainText'

function Left() {
  return (
    <div className='left-div'>
        <BgImg></BgImg>
        <div className="text">
            <MainText></MainText>
        </div>
    </div>
  )
}

export default Left