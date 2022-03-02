import { react, useState } from 'react'

export default function Register() {
  // States for registration
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value)
    setSubmitted(false)
  }

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false)
  }

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false)
  }

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      setError(true)
    } else {
      setSubmitted(true)
      setError(false)
    }
  }

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    )
  }

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    )
  }

  return (
    <div className="form">
      <div className="container flex flex-col items-start mx-auto lg:items-center">
        <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
          <span className="block xl:inline">User Registration</span>
        </h2>

        <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-green-500 uppercase lg:justify-center lg:items-center">
          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>

          <form>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
            />

            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
            />

            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />

            {/* <div className="relative flex flex-col sm:flex-row sm:space-x-4"> */}
            <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-600 rounded-md sm:mb-0 hover:bg-green-700 sm:w-auto">
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></svg>
            </a>
            {/* </div> */}
          </form>
        </p>
        <div />
      </div>
    </div>
  )
}
