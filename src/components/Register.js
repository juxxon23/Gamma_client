import { Fragment, useState } from 'react';

import Button from './Button';

const Register = () => {

  const [userReg, setUserReg] = useState({
    businessEmail: '',
    businessPassword: '',
    businessName: '',
    comercialActivity: '',
    planType: 0
  })

  const verifyRegister = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userReg)
    };
    fetch('http://localhost:5000/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const handleInputChange = (e) => {
    setUserReg({
      ...userReg,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Fragment>
      <div className="form-container">
        <form className="form-register" onSubmit={verifyRegister}>
          <label className="form-lbl">
            Email <br />
            <input className="form-inpt" type="text" onChange={handleInputChange} name="businessEmail"/>
          </label>
          <br />
          <label className="form-lbl">
            Password <br />
            <input className="form-inpt" type="password" onChange={handleInputChange} name="businessPassword"/>
          </label>
          <br />
          <label className="form-lbl">
            Name <br />
            <input className="form-inpt" type="text" onChange={handleInputChange} name="businessName"/>
          </label>
          <br />
          <label className="form-lbl">
            Comercial Activity <br />
            <input className="form-inpt" type="text" onChange={handleInputChange} name="comercialActivity"/>
          </label>
          <br />
          <label className="form-lbl">
            Plan Type <br />
            <input className="form-inpt" type="number" onChange={handleInputChange} name="planType"/>
          </label>
          <br />
          <Button cNm="form-btn" txt="Register" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
        </form>
      </div>
    </Fragment>
  )
}

export default Register;
