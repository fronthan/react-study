import React from 'react';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { userStore } from '../mobx/store'

function mobxtest() {
  const handleTitle = e => {
    runInAction(()=> {
      userStore.title = e.currentTarget.value
    })
  }

const handleNameChange= () => {
  runInAction(()=> {
    userStore.nameChange();
  })
}

  return (
    <div>
      mobx page
      {userStore.name}
      <input tye="text" name="title"
      onChange={handleTitle} value={undefined}
      defaultValue={userStore.title} />

      <button onClick={handleNameChange}>이름바꾸기</button>
    </div>
  )
}

export default observer(mobxtest);