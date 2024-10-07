import React, { useState } from 'react'

const Greetings = () => {
    const [name, setName] = useState("");

    const handleInput = (event) => {
        setName(event.target.value);
    }
  return (
    <div>
        <h1>How are you, {name} ? </h1>
        <form>
            <input
            type="text"
            value={name}
            placeholder="Please enter your name..."
            onChange={handleInput}/>
            <button type="submit" onClick={(e)=> e.preventDefault()}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Greetings