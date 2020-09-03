import React, { useEffect } from 'react'
import Conversation from '../Conversation'
import { connect } from 'react-redux'
import Modal from '../Modal'
import { useSubscription, gql } from '@apollo/client'
import { newConversation } from '../../store/actions/conversationActions'

const styles = {
  miniNav: {
    heigth: '40px',
    backgroundColor: 'green'
  }
}

const newConversationSubscription = gql`
  subscription newConversation($userId: ID!) {
    newConversation(userId: $userId) {
      _id
      users {
        _id
        email
      }
      messages {
        _id
        content
      }
    }
  }
`

const ConvoColumn = ({ user, conversations, newConversation }) => {
  const { data, error, loading } = useSubscription(
    newConversationSubscription,
    {
      variables: { userId: user._id }
    }
  )

  useEffect(() => {
    if (data) newConversation(data.newConversation)
  }, [data])

  return (
    <>
      <div className='col-md-6 col-xl-4 px-0'>
        <Modal />
        {/* <a href='#' className='d-flex justify-content-between' style={styles.miniNav}>name</a> */}
        <div className='white z-depth-1 px-2 pt-3 pb-0 members-panel-1 scrollbar-light-blue' style={{ overflowY: "scroll", height: "70vh"}}>
          <ul className='list-unstyled friend-list'>
            {conversations.map(convo => (
              <Conversation
                key={convo._id}
                id={convo._id}
                recipient={convo.users.filter(
                  person => user._id !== person._id
                )}
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

export default connect(mapStateToProps, { newConversation })(ConvoColumn)
