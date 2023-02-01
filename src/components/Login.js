import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const Login = () => {
  
  const [userLogin, setUserLogin] = useState({
    email: '',
    userpass: ''
  })

  const verifyLogin = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userLogin)
    };
    const authURL = 'http://localhost:3600/login'
    fetch(authURL, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const handleInputChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  return(
    <Fragment>
      <div className="form-container">
        <form className="form-login" onSubmit={verifyLogin}>
          <label className="form-lbl">
            Email <br />
            <input className="form-inpt" type="text" onChange={handleInputChange} name="email"/>
          </label>
          <br />
          <label className="form-lbl">
            Password <br />
            <input className="form-inpt" type="password" onChange={handleInputChange} name="userpass"/>
          </label>
          <br />
          <Button cNm="form-btn" txt="Login" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
        </form>
        <span className="msg-register"> You are not inside?</span> &nbsp;
        <Link to="/register" className="link-register">
          Register
        </Link>
      </div>
    </Fragment>
  )
}

export default Login;
