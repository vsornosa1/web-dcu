import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../../contexts/user.context';

import AprovatLogin from '../../assets/media/mano.jpg';
import ErrorModal from '../../components/UI/ErrorModal.component';




const defaultFormFields = {
	usuario: '',
	password: '',
}

const usuarios = [
	{
		usuario: '1234567D',
		contraseña: 'c1'
	},
	{
		usuario: '2',
		contraseña: 'contra2'
	},
	{
		usuario: '3',
		contraseña: 'contra3'
	},
];


const Login = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext)

	const [ formFields, setFormFields ] = useState(defaultFormFields);
	const { usuario, password } = formFields;
	const [ validCredentials, setValidCredentials ] = useState(true);




	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const usuariValid  = usuarios.find(u => 
			u.usuario === usuario 
			&& u.contraseña === password
		);
		if(usuariValid){
			setCurrentUser(usuariValid);
			console.log(currentUser)
			window.location.replace('/dashboard');
		} else {
			resetFormFields();
			setValidCredentials(false);
			console.info("Credenciales invalidas");
		}
	};


	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({...formFields, [name]: value});
	};


	return (
		<div className="flex h-full mt-16">
			<div className="relative hidden w-0 flex-1 md:block">
				<img
					className="absolute inset-0 mb-0 ml-0 min-h-full w-full object-cover drop-shadow-md rounded-l-md"
					src={AprovatLogin}
					alt="AprovaT login"
				/>
			</div>
			<div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 md:flex-none md:px-20 xl:px-24">
				<div className="divide-y divide-stone-300 mx-auto w-full max-w-sm lg:w-96">
					<div className="flex flex-col items-center">
						<h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900"> Di 👋 a AprovaT</h2>
						<h4 className="mt-6 text-xl font-normal tracking-tight text-gray-900"> Di hola a tu portal sencillo</h4>
					</div>

					<div className="mt-8"> 
						<div className="mt-6">
							<form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
								{/* DNI del usuari */}
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										DNI
									</label>
									<div className="mt-1">
										<input
											onChange={handleChange} 
											id="usuario"
											name="usuario"
											value={usuario}
											type="text"
											autoComplete="usuario"
											placeholder="Ej: 12345678P"
											required
											className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								{/* Password del usuari */}
								<div className="space-y-1">
									<label htmlFor="password" className="block text-sm font-medium text-gray-700">
										Contraseña
									</label>
									<div className="mt-1">
										<input
											onChange={handleChange} 
											id="password"
											name="password"
											value={password}
											type="password"
											autoComplete="password"
											placeholder="Escribe tu contraseña"
											required
											className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div>
									<p className="mt-2 text-sm text-gray-600">
										Ó accede como{' '}
										<Link className="font-medium text-indigo-600 hover:text-indigo-500 nav-link" to='/anonimo'>
											usuario anónimo
										</Link>
									</p>
								</div>	

								<div>
									<button
										type="submit"
										className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Accede a AprovaT
									</button>
								</div>
							</form>
							<ErrorModal openState={!validCredentials} />
						</div>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default Login;