import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    name: 'Hammad',
    email: 'hammad@gmail.com',
    password: 'abcd1234',
})
const handleChnage = (e) => {
    setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value
    }))
    console.log(e.target.name, e.target.value)

  }
  return (
    <>
    <label for="name">Name:</label><br />
    <input type="text" name="name" value={form.name} onChange={handleChnage} /><br />
    <label htmlFor="email">Email:</label><br /> 
    <input type="email" name="email" value={form.email} onChange={handleChnage}/><br />
    <label htmlFor="password">Password:</label><br />
    <input type="password" name="password" value={form.password} onChange={handleChnage}/>
    </>
  )
}

export default App
