import Button from './Button';
    
const Spanel = () => {
  return (
    <div className="service-panel">
        <div className="service-list">
          <Button cNm="service-btn" txt="POS" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
          <Button cNm="service-btn" txt="SHOP" bckgClr="#2a2834" clr="#dbd9e2" type="submit"/>
        </div>
    </div>
  )
}

export default Spanel;
