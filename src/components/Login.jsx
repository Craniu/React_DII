import React from 'react'

const Login = () => {


  return (
    <form className='formulario'>
        <input type='text' name='email' placeholder='Ingresa tu email'></input>
        <input type='password' name='pass' placeholder='Ingresa tu password'></input>
        <button>Login</button>
    </form>
  )
}

export default Login