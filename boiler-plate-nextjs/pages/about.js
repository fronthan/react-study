import React from 'react';
import Layout from '../component/layout';
import {useSelector} from 'react-redux';


function about() {
  const user = useSelector(state => state.user)

  return (
    <Layout>
       <div> : {user.name}</div>
      <div> : {user.email} </div>
    </Layout>
  )
}

export default about
