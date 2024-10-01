import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import '../login/loginPage.css'

const LoginPage = () => {
    const [mensaje, setMensaje] = useState('');
    const [dataForm, setDataForm] = useState({email: '', password: ''})
    const { handleLogin } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        setDataForm({email:'', password:''});
    },[handleLogin]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = dataForm;
        handleLogin(email, password);
    };

    return (
        <>
            <div className="contenedorViewLogin">
            <div className='containerLogin'>
                <h1>Login</h1>
                <div className='containerFormLogin'>
                <form onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="emailLogin" 
                            className="form-control"  
                            value={dataForm.email} 
                            required 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="passwordLogin" 
                            className="form-control" 
                            value={dataForm.password} 
                            required 
                            onChange={handleChange}
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            Ingrese su contraseña.
                        </div>
                    </div>
                    <div className="m-3 text-center">
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                    <p className='text-center'>{mensaje}</p>       
                </form>
                <p>¿No tienes cuenta? <Link to='/register'>Registrate</Link></p>
                </div>        
            </div>
            </div>
        </>
    );
};

export default LoginPage;
