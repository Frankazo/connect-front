/* eslint-disable indent */
import React, { useState, useEffect } from 'react'

import { showList } from '../../api/list'
// import styled from 'styled-components'
// import Button from 'react-bootstrap/Button'

const List = (props) => {
    // deconstruction of the props
    const { user, msgAlert } = props
    const [list, setList] = useState(1)

    // when user gets in here, there should be a useEffect that check if the user has a list, if the user has a list, the useEffect should make an api call to retrieve it, if not then create one
    // lists should be able to be retrieve by anyone, but when you sign in, you should only be allow to see yours
    useEffect(() => {
        showList(user)
          .then(res => {
            const myList = res.data.lists.find(x => x.owner === user._id)
            setList(myList)
          })
          .then(() => msgAlert({
            heading: 'Index List Successfully',
            message: 'Succesfully retrieve List',
            variant: 'success'
          }))
          .catch(error => {
            msgAlert({
              heading: 'Index Failed with error: ' + error.message,
              message: 'Error retrieving List',
              variant: 'danger'
            })
          })
      }, [])

    let listJsx
    if (list === 1) {
        listJsx = 'loading...'
    } else if (!list) {
      // Button to create list
        listJsx = 'Create List'
    } else {
      listJsx = (
              <div key={list._id}>
                <p style={{ fontSize: '1.4rem' }} >{list.title}</p>
              </div>
        )
    }

  return (
    <div>
        <h1>My Links</h1>
        {listJsx}
    </div>
  )
}

export default List
