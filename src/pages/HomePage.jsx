import React from 'react'
import PrimaryButton from '../components/PrimaryButton.jsx'

const HomePage = () => {
  function handleClick(){
    console.log("Button has been clicked!")
  }

  return (
    <div>
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <p>para</p>
      <PrimaryButton onClick={handleClick()}>
       Sundeeep Btn 
      </PrimaryButton>
    </div>
  )
}

export default HomePage
