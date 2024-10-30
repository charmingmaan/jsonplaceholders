import axios from "axios";
import Link from "next/link";

async function usuariosLista(){
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios=await axios.get(url);
    return usuarios.data;
     
}

export default async function Usuarios(){
    var usuarios=await usuariosLista();
    return(
        <div>
            <h1>Usuarios</h1>
            <p>Estas en usuarios</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario,i)=>(
                            
                            <tr key="{i}">
                                
                                <td>{usuario.id}</td>
                                <td>
                                    <Link href={`/usuarios/${i+1}`}>
                                    {usuario.name}
                                </Link>
                                </td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        
    );
}