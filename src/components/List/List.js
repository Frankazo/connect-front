/* eslint-disable indent */
import React, { useState, useEffect } from 'react'

import { showList } from '../../api/list'
// import styled from 'styled-components'
// import Button from 'react-bootstrap/Button'

const List = (props) => {
    // deconstruction of the props
    const { user, msgAlert } = props
    const [list, setList] = useState(null)

    // when user gets in here, there should be a useEffect that check if the user has a list, if the user has a list, the useEffect should make an api call to retrieve it, if not then create one

    useEffect(() => {
        showList(user)
          .then(res => setList(res.data.list))
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
    if (!list) {
        listJsx = 'loading...'
    } else {
        listJsx = list
    }

  return (
    <div>
        <h1>My Links</h1>
        {listJsx}
    </div>
  )
}

export default List
