import React from 'react';


function Login() {
    return (
        <div className="py-3 px-6">
                <h3>This is the LogIn page</h3>
                <br/>
                <form method="post" action="http://localhost/codingchallenge/validarUser.php" >
                    <input id="user" name="user" placeholder="User" type="text" onFocusOut="validarCampos(Event)"/>
                    <br/>
                    <input id="pass" name="pssw" placeholder="Contraseña" type="password" onBlur="validarCampos(Event)"/>
                    <br/>
                    <input type="hidden" name="token" value="0133jdcr-12345678901234567890-2"/>
                    <br />
                    <button type="submit">
                        Enviar
                    </button>
                </form>
                
        </div>
    );
}

export default Login