import { useForm } from 'react-hook-form';
import { User } from '../types/Types';
import register from '../hooks/register';
import { Link, useNavigate } from 'react-router-dom';
import Logo2 from '../assets/Logo2.png';

const Register = () => {
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm<User>();
    const { fetchCreateRegister, isLoading, error, data } = register(); // Usa el hook register
    const navigate = useNavigate();

    const onSubmit = (formData: User) => {
        fetchCreateRegister(formData);
        navigate('/Login'); // Llama a la función fetchCreateRegister del hook
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 via-teal-300 to-sky-600">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-gray-700 bg-opacity-50 text-center max-w-md p-8 rounded-lg">
                <img className="mx-auto  h-11 w-auto" src={Logo2}alt="logo" />
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-white">
                        Sign up for an account
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Nombre</label>
                            <input {...formRegister('Name', { required: true })} type="text" id="name" className="bg-white px-2 py-3 mt-1 block w-full rounded-md border-3 border-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.Name && <span className="text-red-500">Un nombre es requerido</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input {...formRegister('Email', { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" autoComplete="email" className="bg-white px-2 py-3 mt-1 block w-full rounded-md border-3 border-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.Email && <span className="text-red-500">El email no es valido</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
                            <input {...formRegister('Password', { required: true, minLength: 4 })} type="password" id="password" autoComplete="new-password" className="bg-white px-2 py-3 mt-1 block w-full rounded-md border-3 border-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.Password && <span className="text-red-500">La contraseña debe tener minimo 8 carcteres</span>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white">Teléfono</label>
                            <input {...formRegister('PhoneNumber', { required: true })} type="text" id="phone" className="bg-white px-2 py-3 mt-1 block w-full rounded-md border-3 border-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.PhoneNumber && <span className="text-red-500">El teléfono es requerido</span>}
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                                {isLoading ? 'Loading...' : 'Registrarse'}
                            </button>
                        </div>
                        {error && <div className="text-red-500">{error.message}</div>}
                        {data && <div className="text-green-500">¡El usuario ha sido registrado correctamente!</div>}
                    </form>
                   
                        <p className="mt-1 text-sm text-white">
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/Login" className="mt-1 text-white   hover:underline">¡Inicia sesión aquí!</Link>

                        </p>
                    
                </div> 
            </div>
        </div>
    );
};

export default Register;
