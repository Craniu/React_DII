const Navbar = ({ setActiveComponent }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 onClick={() => setActiveComponent("home")}>La Papaya Loca</h1>
      </div>
      <div>
        <button onClick={() => setActiveComponent("home")}>Home</button>
        <button onClick={() => setActiveComponent("login")}>Login</button>
        <button onClick={() => setActiveComponent("register")}>Register</button>
      </div>
      {/* {alert("Para ver el Login o el Registro seleccionarlo desde su boton en el Navbar")} */}
    </div>
  );
};

export default Navbar;
