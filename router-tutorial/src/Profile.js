import React from 'react';

const data = {
  velopert: {
    name : '한민정',
    description: '앱 개발도 하는 웹 프론트엔드 개발자'
  },
  gildong: {
    name: '까비',
    description: '까비는 까불이'
  }
}
const Profile = ({ match }) => {
  const {username} = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};


export default Profile;