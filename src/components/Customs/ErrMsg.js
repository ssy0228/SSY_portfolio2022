import React from 'react';
import MsgErr from '../../hooks/useMsgErr';


const ErrMsg = () => {
  return (
    <div className="error">
      <p className="err_message">
        <MsgErr />
      </p>
    </div>
  )
};

export default ErrMsg;