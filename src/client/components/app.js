import React, { useState, useEffect } from "react";

const App = (props) => {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div className="container">
      <button className="btn btn-success" onClick={handleClick}>
        Ocultar
      </button>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Email</th>
            <th scope="col">Edad</th>

          </tr>
        </thead>
        <tbody>
        {!hide && props.users.map(user =>
        <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.address.city}</td>
        <td>{user.email}</td>
        <td>{user.years}</td>

      </tr>
                   
                )}
          
        </tbody>
      </table>
    </div>
  );
};

App.defaultProps = {
  users: [],
};

export default App;
