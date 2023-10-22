'use client'
import UserList from "@/components/UserList";
import UserProfile from "@/components/UserProfile";
import { useState } from "react"

export default function Home() {
  const [showtext, setShowtext] = useState(false)
  return (
    <main>
      <h1>Home Page</h1>
      <button type="">Click Me</button>
      <div>
        <label htmlFor="randomtext">Enter Random Test:</label>
        <input type="" name="" value="" id="randomtext" /> 
      </div>
      <div>
        <label htmlFor="emailtext">Enter email:</label>
        <input type="" name="" value="" id="emailtext" /> 
      </div>
      <div>
        <input value='' placeholder="Search..." /> 
      </div>
      <div>
        <input value='Vishal' /> 
      </div>
      <div>
        {showtext && <span> "This Is the Text!"</span>}
        <button onClick={() => {setTimeout(() => {
          setShowtext(!showtext)
        }, 1100);}}>Show Text</button>
      </div>
      <UserProfile
        displayName="Vishal Rahangdaledsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
        username="Vishal12"
        email="vishal14@gmail.com"
        isEmailVarified={true}
      />

      <UserList />
    </main>
  )
}
 