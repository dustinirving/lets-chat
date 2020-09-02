import React from 'react'
import ConvoColumn from '../components/ConvoColumn'
import MessageColumn from '../components/MessageColumn'

const HomeLayout = () => {
  return (
    <div className='card dusty-grass-gradient chat-room animated'>
      <div className='card-body'>
        <div className='row px-lg-2 px-2'>
          <ConvoColumn />
          <MessageColumn />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
