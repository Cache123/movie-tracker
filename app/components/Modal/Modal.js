import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const Modal = () => {
  return(

    <div className='modal'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Modal;
