import { Fragment, useState } from 'react';
import Button from './Button';
import DataList from './DataList';

const Finder = () => {
 
  const [search, setSearch] = useState({
    finderInp: ''
  })

  const [item, setItem] = useState({
    products: []
  })

  const verifySearch = (e) => {
    e.preventDefault();
    const authURL = 'http://localhost:5000/product'
    console.log(search)
    fetch(authURL) 
      .then(response => response.json())
      .then(data => {
        setItem({products: data.products})});
  }

  const handleInputChange = (e) => {
    setSearch({ finderInp: e.target.value })
  }

  return (
    <Fragment>
      <form className="form-finder" onSubmit={verifySearch}>
        <input className="form-inpt" type="text" onChange={handleInputChange} name="finderInp" placeholder="Search"/>
        <Button cNm="form-btn" txt="Find" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
      </form>
      <DataList itemData={item} />
    </Fragment>
  )
}

export default Finder;
