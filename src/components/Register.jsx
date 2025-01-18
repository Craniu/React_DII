import React from 'react'

const Register = () => {
  return (
    <form className='formulario'>
    <input type='text' name='email' placeholder='Ingresa tu email'></input>
    <input type='password' name='pass' placeholder='Ingresa tu contraseña'></input>
    <input type='password' name='pass2'placeholder='Confirma tu contraseña'></input>
    <button>Login</button>
</form>
  )
}

export default Register