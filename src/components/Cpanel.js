const Cpanel = ({greetingMSG}) => {
  return (
    <div>
      <span>{greetingMSG}</span>
    </div>
  )
}

Cpanel.defaultProps = {
  greetingMSG: "Welcome to Gamma-System!"
}

export default Cpanel;
