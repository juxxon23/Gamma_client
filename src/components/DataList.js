import { Fragment } from 'react';


const DataList = ({itemData}) => {
  
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          { itemData.products.map((value, index) => {
              return(
                <tr key={index}>
                  <td>{value.productId}</td>
                  <td>{value.productName}</td>
                  <td>{value.productDescription}</td>
                  <td>{value.productPrice}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default DataList;
