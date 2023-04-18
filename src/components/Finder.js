import { Fragment, useState } from 'react';
import Button from './Button';

const Finder = () => {
 
  const[search, setSearch] = useState({
    finderInp: ''
  })

  const verifySearch = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'GET',
      // Falta Enviar los parametros de busqueda.
      //headers: {'Content-Type': 'application/json'},
      //body: JSON.stringify(search)
    };
    const authURL = 'http://localhost:5000/product'
    fetch(authURL, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const handleInputChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Fragment>
      <form className="form-finder" onSubmit={verifySearch}>
        <input className="form-inpt" type="text" onChange={handleInputChange} name="finderInp" placeholder="Search"/>
        <Button cNm="form-btn" txt="Find" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
      </form>
    </Fragment>
  )
}

export default Finder;
