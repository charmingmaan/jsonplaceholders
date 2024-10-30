import axios from "axios";

export default async function Usuario({ params }) {
  const { id } = params;
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuarios = await axios.get(url);
  var usuario = usuarios.data;
  return (
    <>
      <h1>Estas en usuario</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Dato</th>
            <th>Información</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ID</strong></td>
            <td>{usuario.id}</td>
          </tr>
          <tr>
            <td><strong>Nombre</strong></td>
            <td>{usuario.name}</td>
          </tr>
          <tr>
            <td><strong>Username</strong></td>
            <td>{usuario.username}</td>
          </tr>
          <tr>
            <td><strong>email</strong></td>
            <td>{usuario.email}</td>
          </tr>
          <tr>
            <td><strong>Calle</strong></td>
            <td>{usuario.address.street}</td>
          </tr>
          <tr>
            <td><strong>Numero</strong></td>
            <td>{usuario.address.suite}</td>
          </tr>
          <tr>
            <td><strong>Ciudad</strong></td>
            <td>{usuario.address.city}</td>
          </tr>
          <tr>
            <td><strong>Zipcode</strong></td>
            <td>{usuario.address.zipcode}</td>
          </tr>
          <tr>
            <td><strong>Latitud</strong></td>
            <td>{usuario.address.geo.lat}</td>
          </tr>
          <tr>
            <td><strong>Longitud</strong></td>
            <td>{usuario.address.geo.lng}</td>
          </tr>
          <tr>
            <td><strong>Telefono</strong></td>
            <td>{usuario.phone}</td>
          </tr>
          <tr>
            <td><strong>Sitio web</strong></td>
            <td>{usuario.website}</td>
          </tr>
          <tr>
            <td><strong>Compañía</strong></td>
            <td>{usuario.company.name}</td>
          </tr>
          <tr>
            <td><strong>Frase</strong></td>
            <td>{usuario.company.catchPhrase}</td>
          </tr>
          <tr>
            <td><strong>bs</strong></td>
            <td>{usuario.company.bs}</td>
          </tr>
        </tbody>
      </table>
      <div>

      </div>
    </>

  );
}