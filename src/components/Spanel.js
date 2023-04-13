import { Link } from 'react-router-dom';
import Button from './Button';

const Spanel = () => {
  return (
    <div className="service-panel">
        <div className="service-list">
          <Link to="/pos" className="#">
            <Button cNm="service-btn" txt="POS" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
          </Link>
          <Link to="/shop" className="#">
            <Button cNm="service-btn" txt="SHOP" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
          </Link>
        </div>
    </div>
  )
}

export default Spanel;
