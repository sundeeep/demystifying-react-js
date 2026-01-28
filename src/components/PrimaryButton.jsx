
const PrimaryButton = (props) => {
    // console.log(props);
  return (
    <button className="primary-button" onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default PrimaryButton;