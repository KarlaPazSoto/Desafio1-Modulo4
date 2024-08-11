import { useState } from 'react';

const RegisterPage = (props) => {

    const [mensaje, setMensaje] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        props.setDataForm({
            ...props.dataForm,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password} = props.dataForm;

        if (password.length < 6) {
            setMensaje('La contraseña debe tener al menos 6 caracteres');
            alert('La contraseña debe tener al menos 6 caracteres');
        } else {
            setMensaje('Registro exitoso');
            alert('Registro exitoso')
        }
    };

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="emailLogin" 
                            className="form-control"  
                            value={props.dataForm.email} 
                            required 
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="passwordLogin" 
                            className="form-control" 
                            value={props.dataForm.password} 
                            required 
                            onChange={handleChange}
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            Ingrese su contraseña.
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                    <p>{mensaje}</p>       
                </form>        
            </div>
        </>
    );
};

export default RegisterPage;
