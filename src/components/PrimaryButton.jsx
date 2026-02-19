
const PrimaryButton = (props) => {
  console.log(props);
  return (
    <button type={props?.type === "submit" ? "submit" : "button"} 
            className="bg-linear-to-br from-[#ce212f] to-rose-500 px-3 py-2 text-white rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-3xl" 
            onClick={props.onClick}>
        hello
    </button>
  )
}

export default PrimaryButton;