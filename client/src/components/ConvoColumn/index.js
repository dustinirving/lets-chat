import React from 'react'
import Conversation from '../Conversation'
import { connect } from 'react-redux'
import Modal from '../Modal'

// simulate conversation with messages
const messages = [
  {
    email: 'diegolehyt@gmail.com',
    img:
      'https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4',
    content: 'Hola! , como estas?',
    bool: true
  },
  {
    email: 'dustinirving@gmail.com',
    img:
      'https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4',
    content: 'Hey good and you?',
    bool: false
  },
  {
    email: 'diegolehyt@gmail.com',
    img:
      'https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    bool: true
  },
  {
    email: 'dustinirving@gmail.com',
    img:
      'https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    bool: false
  }
]

const ConvoColumn = ({ users, user, conversations }) => {
  return (
    <>
      <div className='col-md-6 col-xl-4 px-0'>
        <h6 className='font-weight-bold mb-3 text-center text-lg-left'>
          <i className='fas fa-user-alt light-green-text-2'></i>
          {user.email}
        </h6>
        <Modal />
        <div className='white z-depth-1 px-2 pt-3 pb-0 members-panel-1 scrollbar-light-blue'>
          <ul className='list-unstyled friend-list'>
            {conversations.map(convo => (
              <Conversation
                key={convo._id}
                id={convo._id}
                lastMsg={convo.messages[convo.messages.length - 1]}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    user: state.users.user,
    conversations: state.conversations.conversations
  }
}

export default connect(mapStateToProps)(ConvoColumn)
