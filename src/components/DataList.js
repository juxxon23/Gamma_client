import { Fragment } from 'react';

const DataList = () => {
  return (
    <Fragment>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>PRICE</th>
        </tr>
        <tr>
          <td>rkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>2548484</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>2588784</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>4847884</td>
        </tr>
      </table>
    </Fragment>
  )
}

export default DataList;
