import React from "react";
import useInputs from "./useInputs";

//==== 8.7 Custom Hook
const InfoC = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname:''
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange}/>
        <input type="text" name="nickname" value={nickname} onChange={onChange}/>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  )
}

export default InfoC;