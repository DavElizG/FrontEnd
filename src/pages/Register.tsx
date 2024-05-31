import { useForm } from 'react-hook-form';
import { User } from '../types/Types';
import register from '../hooks/register';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm<User>();
    const { fetchCreateRegister, isLoading, error, data } = register(); // Usa el hook register
    const navigate = useNavigate();

    

    const onSubmit = (formData: User) => {
        fetchCreateRegister(formData);
        navigate('/Login'); // Llama a la función fetchCreateRegister del hook
    };

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up for an account
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input {...formRegister('Name', { required: true })} type="text" id="name" className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.Name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input {...formRegister('Email', { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" autoComplete="email" className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.Email && <span className="text-red-500">Invalid email address</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input {...formRegister('Password', { required: true, minLength: 4 })} type="password" id="password" autoComplete="new-password" className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.Password && <span className="text-red-500">Password must be at least 8 characters long</span>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input {...formRegister('PhoneNumber', { required: true })} type="text" id="phone" className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            {errors.PhoneNumber && <span className="text-red-500">Phone Number is required</span>}
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                                {isLoading ? 'Loading...' : 'Register Account'}
                            </button>
                        </div>
                        {error && <div className="text-red-500">{error.message}</div>}
                        {data && <div className="text-green-500">User registered successfully!</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
