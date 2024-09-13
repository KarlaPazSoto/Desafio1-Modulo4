import { useContext, useState } from 'react';
import '../register/registerPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const RegisterPage = () => {

    const [mensaje, setMensaje] = useState('');
    const {handleRegister} = useContext(UserContext);
    const [dataForm, setDataForm] = useState({email:'', password:'', confirmPassword:''});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password, confirmPassword } = dataForm;

        if (password.length < 6) {
            setMensaje('La contraseña debe tener al menos 6 caracteres');
            alert('La contraseña debe tener al menos 6 caracteres');
        } else if (password !== confirmPassword) {
            setMensaje('Las contraseñas no coinciden');
            alert('Las contraseñas no coinciden');
        } else {
            handleRegister();
            setMensaje('Registro exitoso');
            alert('Registro exitoso');
            navigate('/')
        }
    };

    return (
        <>
            <div className='containerRegister'>
                <h1>Register</h1>
                <div className='containerFormRegister'>
                <form onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control"  
                            value={dataForm.email || ''} 
                            required 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='m-3'>
                        <label className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            value={dataForm.password} 
                            required 
                            onChange={handleChange}
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            La contraseña debe tener al menos 6 caracteres.
                        </div>
                    </div>
                    <div className='m-3'>
                        <label className="form-label">Confirmar Contraseña</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            className="form-control" 
                            value={dataForm.confirmPassword} 
                            required 
                            onChange={handleChange}
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            Confirma tu contraseña.
                        </div>
                    </div>
                    <div className='m-3 text-center'>
                        <button type="submit" className="btn btn-dark">Register</button>
                    </div>
                    <p className='text-center'>{mensaje}</p>       
                </form>
                <p>¿Ya tienes cuenta? <Link to='/login'>Inicia sesión</Link></p>
                </div>        
            </div>
        </>
    );
};

export default RegisterPage;
