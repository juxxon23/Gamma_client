import PropTypes from 'prop-types';

const Button = ({cNm, txt, clr, bckgClr, onClick}) => {
  onClick = {onClick}
  return (
    <button
      className={cNm}
      style={{
        backgroundColor: bckgClr,
        color: clr}}>
      {txt}
    </button>
  )
};

Button.defaultProps = {
  txt: 'Boat'
}

Button.propTypes = {
  txt: PropTypes.string.isRequired
}

export default Button;
