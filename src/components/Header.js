import PropTypes from 'prop-types';

const Header = ({title}) => {
  return(
    <header className="Header">
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Gamma-System'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
