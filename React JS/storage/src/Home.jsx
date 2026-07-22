import React, { useState } from 'react'

function Home() {
    const[text, setText] = useState("First day in work place ")
    localStorage.setItem('data',text)

    const[demo, setDemo] = useState("hello and good morning to all. my name is shaktisinh parmar and i am from botad now i currently i completed my front-end developer course in creative multimedia institut and i will joining this company as freshr front-end developer.")
    localStorage.setItem('intro', demo)
  return (
    <div>
      
    </div>
  )
}
export default Home