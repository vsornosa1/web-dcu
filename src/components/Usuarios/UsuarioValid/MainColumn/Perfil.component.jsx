
import { useState, useEffect } from 'react'
import axios from 'redaxios';

import AdriaIcon from '../../../../assets/avatars/AvatarAdria.svg'
import Header from '../../../UI/Header.component';

import Asignatura1 from '../../../../assets/media/Asignatura1.svg';
import Asignatura2 from '../../../../assets/media/Asignatura2.svg';
import Asignatura3 from '../../../../assets/media/Asignatura3.svg';


const infoAsignaturas = [
  { acronimo: "DEW", nombre: "Desarrollo Web", icono: Asignatura1 },
  { acronimo: "IAP", nombre: "Integración de Aplicaciones", icono: Asignatura2 },
  { acronimo: "DCU", nombre: "Diseño Centrado en el Usuario", icono: Asignatura3 },
];

const user = {
  name: 'Debbie Lewis',
  handle: 'dcnweiqocnqweio9',
  email: 'debbielewis@example.com',
  imageUrl: AdriaIcon
}


const Perfil = () => {
	const [ alumno, setAlumno ] = useState([]);
	const [ direccionPostal, setDireccionPostal ] = useState("");
	const [ asignaturasAlumno, setAsignaturasAlumno ] = useState([]);


	useEffect(() => {
    axios.get({
      method: 'get',
      url:`http://172.23.184.210:8081/alumnos/expediente/12345678W`,
      headers: {
        'Accept':'application/json',
      }
    })
    .then(async response => {
      await setAlumno(response.data);
			setAsignaturasAlumno(response.data.asignaturas);
			setDireccionPostal("Calle El Sapato, " + (Object.values(response.data)[4]) + ", " + (Object.values(response.data)[3]));
		}
    )
    .catch(error => 
      console.log("X ~ ERROR: Sidebar.component.jsx:71 ~ ", error)
    )
  }, [])



  return (
		<div className="flex flex-col lg:pl-64 ">
      {/* Home */}
      <main className="flex-1">
        
        {/* Header de dalt */}
        <Header />

				<div className="mx-auto max-w-screen-xl px-4 pb-6 py-8 sm:px-6 lg:px-8 lg:pb-16">
					<div className="overflow-hidden rounded-lg bg-white shadow">
						<div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">

							<form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
								{/* Sección del perfil */}
								<div className="py-6 px-4 sm:p-6 lg:pb-8">
									<div>
										<h2 className="text-lg font-medium leading-6 text-gray-900"> Perfil de {alumno.nombre} </h2>
										<p className="mt-1 text-sm text-gray-500">
										{alumno.nombre}, en esta página encontrarás información pertinente a tu perfil.
										</p>
									</div>

									<div className="mt-6 flex flex-col lg:flex-row">
										<div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
											<p className="text-sm font-medium text-gray-700" aria-hidden="true">
												Avatar
											</p>
											<div className="mt-1 lg:hidden">
												<div className="flex items-center">
													<div
														className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
														aria-hidden="true"
													>
														<img className="h-full w-full rounded-full" src={user.imageUrl} alt="" />
													</div>
													<div className="ml-5 rounded-md shadow-sm">
														<div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
															<label
																htmlFor="mobile-foto-usuario"
																className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
															>
																<span>Cambiar</span>
																<span className="sr-only"> Foto del usuario </span>
															</label>
															<input
																id="mobile-foto-usuario"
																name="foto-usuario"
																type="file"
																className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
															/>
														</div>
													</div>
												</div>
											</div>

											<div className="relative hidden overflow-hidden rounded-full lg:block">
												<img className="relative h-40 w-40 rounded-full" src={user.imageUrl} alt="" />
												<label
													htmlFor="desktop-foto-usuario"
													className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium cursor-pointer text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
												>
													<span> Cambiar </span>
													<span className="sr-only"> Foto del usuario </span>
													<input
														type="file"
														id="desktop-foto-usuario"
														name="foto-usuario"
														className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
													/>
												</label>
											</div>
										</div>
									</div>

									<div className="mt-6 grid grid-cols-12 gap-6">
										<div className="col-span-12 sm:col-span-6">
											<label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
												Nombre
											</label>
											<input
												disabled
												type="text"
												name="nombre"
												id="nombre"
												defaultValue={alumno.nombre}
												autoComplete="given-name"
												className="cursor-not-allowed mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-12 sm:col-span-6">
											<label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">
												Apellidos
											</label>
											<input
												disabled
												type="text"
												name="apellidos"
												id="apellidos"
												defaultValue={alumno.apellidos}
												autoComplete="family-name"
												className="cursor-not-allowed mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-12">
											<label htmlFor="direccionPostal" className="block text-sm font-medium text-gray-700">
												Dirección Postal
											</label>
											<input
												disabled
												type="text"
												name="direccionPostal"
												id="direccionPostal"
												defaultValue={direccionPostal}
												className="cursor-not-allowed mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>

								{/* Sección de asignaturas */}
								<div className="divide-y divide-gray-200 pt-6">
									<div className="px-4 sm:px-6">
										<div>
											<h2 className="text-lg font-medium leading-6 text-gray-900"> Asignaturas </h2>
											<p className="mt-1 text-sm text-gray-500">
												{alumno.nombre}, esta sección detalla las asignatruas en las que estás matriculado/a.
											</p>
										</div>
										<ul className="mt-2 divide-y divide-gray-200">
											<li className="flex items-center justify-between p-4">
												<div className="flex flex-col space-y-4 ">
													{asignaturasAlumno.map((asignatura, index) => (
														<div key={index}>
															<p className="text-sm font-medium text-gray-900" passive>
																{ asignatura.acronimo }
															</p>
															<p className="text-sm text-gray-500">
																{
																	infoAsignaturas.find(a => {
																		return asignatura.acronimo === a.acronimo
																	}).nombre
																}
															</p>
														</div>
													))}
												</div>
											</li>
										</ul>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
      </main>
		</div>

  )
}

export default Perfil;
