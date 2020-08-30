import React, { useState, useEffect } from 'react'
import Conversation from '../components/Conversation'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { useHistory, Redirect } from 'react-router-dom'
import { useQuery, useMutation, gql } from '@apollo/client'

const styles = {
  avatar: {
    width: '100px'
  }
}

const USERS = gql`
  query {
    users {
      _id
    },
    conversations(userId: "5f491cf149505d012c2f35d3") {
      _id
      messages {
        content
      }
    }
  }
`

// const CONVERSATIONS = gql`
//   query conversations {
//     conversations(userId: "5f49225531c7e3538743b4e7") {
//       _id
//       messages {
//         content
//       }
//     }
//   }
// `
const CREATE_CONVERSATION = gql`
  mutation createConversation($creatorId: String!, $recipientId: String!) {
    createConversation(creatorId: $creatorId, recipientId: $recipientId) {
      _id
    }
  }  
`

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

function Home() {

  const [users, setUsers] = useState([])
  const { loading, error, data } = useQuery(USERS)
  // const { loading, error, data } = useQuery(CONVERSATIONS)

  const [createConversation] = useMutation(
    CREATE_CONVERSATION
  )
  useEffect(() => {
    createConversation({
      variables: {
        creatorId: '5f491cf149505d012c2f35d3',
        recipientId: '5f4a7ef352c7d64198d452cb'
      }
    })
  }, [])

  useEffect(() => {
    setUsers(data)
  }, [])


  return (
    <>
      {console.log(data)}
      <div className='card dusty-grass-gradient chat-room animated fadeInRight'>
        <div className='card-body'>
          <div className='row px-lg-2 px-2'>
            <div className='col-md-6 col-xl-4 px-0'>
              <h6 className='font-weight-bold mb-3 text-center text-lg-left'>
                <i className='fas fa-user-alt light-green-text-2'></i> Diego
                Lehyt
              </h6>
              <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Users</button>


              <div className="dropdown-menu">
                {messages.map(msg => (
                  <DropDown />
                ))}
              </div>
              <div className='white z-depth-1 px-2 pt-3 pb-0 members-panel-1 scrollbar-light-blue'>
                <ul className='list-unstyled friend-list'>
                  {messages.map(msg => (
                    <Conversation msg={msg} />
                  ))}
                </ul>
              </div>
            </div>

            <div className='col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0'>
              <div className='chat-message'>
                <ul className='list-unstyled chat-1 scrollbar-light-blue'>
                  {messages.map(msg => (
                    <Message msg={msg} />
                  ))}
                </ul>
                <div className='white'>
                  <div className='form-group basic-textarea'>
                    <textarea
                      className='form-control pl-2 my-0'
                      id='exampleFormControlTextarea2'
                      rows='3'
                      placeholder='Type your message here...'
                    ></textarea>
                  </div>
                </div>
                <button
                  type='button'
                  className='btn btn-outline-green btn-rounded btn-sm waves-effect waves-dark float-right'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
