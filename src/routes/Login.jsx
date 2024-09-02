import {useRef} from 'react'
import Cliente from '../components/Cliente'

const Login =()=>{

    const usuario=useRef();
    const senha=useRef();


    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha")
    
    const handleLogin=()=>{
        if(usuario.current.value == "Admin" && senha.current.value == "123456"){

            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2)

            sessionStorage.setItem("usuario","Admin")
            sessionStorage.setItem("senha",token)

        }
        else{
            alert("Usuário ou senha inválidos")
        }
    }
    
    
    return(
        <>
            <section>
            {getUsuario && getSenha ? (
                <Cliente/>
                ):
                 
                <form onSubmit={handleLogin}>
                    <p>
                        Usuário:
                        <input type="text" placeholder="Digite seu Usuário" ref={usuario}/>
                    </p>
                    <p>
                        Senha:
                        <input type="password" placeholder="Digite sua senha" ref={senha}/>
                    </p>

                    <button type="submit">Entrar</button>
                </form>
                    }   
            </section>
        </>
    )
}
export default Login