import { Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../../../contexts/user.context'; 

import { Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import AvatarAdria from '../../../../assets/avatars/AvatarAdria.svg';

import Header from '../../../UI/Header.component';
import HorarioCard from '../../../UI/Cards/HorarioCard.component';
import HorarioGraph from '../../../UI/Graficas/HorarioGraph.component';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const stats = [
  { 
		name: 'Número de clases hoy',
		stat: '7', 
		idx: 2,
		listItems: null
	},
  { 
		name: 'Cantidad de entregables hoy',
		stat: '3',
		idx: 1,
		listItems: ["Física", "Química", "Matemáticas II"]
	},
];

const NotaAsignatura = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<div className="flex flex-col lg:pl-64">
      {/* Responsive - Pantalles xicotetes */}
      <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
        <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1">
            <form className="flex w-full md:ml-0" action="# " method="GET">
              <label htmlFor="search-field" className="sr-only">
                Buscar...
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Buscar..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={AvatarAdria}
                    alt="Avatar de Adria"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/dashboard/perfil">
                          <a
                            href="# "
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Mi Perfil
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="# "
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Notificaciones
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/" >
                          <a
                            href="# "
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cerrar sesión
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>


      {/* Home */}
      <main className="flex-1">
        
        {/* Header de dalt */}
        <Header />

				<div className="mt-6 px-4 sm:px-6 lg:px-12">
					<div className="flex flex-col justify-start items-start">
						<p className="text-lg font-semibold"> Hola {currentUser.split(" ")[2]}! </p>
						<p className="text-base"> Aquí encontrarás todo lo relacionado con tus horarios. </p>
					</div>
				</div>

        {/* Graphs linea 1 */}
        <div className="mt-6 px-4 sm:px-10 lg:px-12 ">
            <div className="flex space-x-4">
              <HorarioGraph />
            </div>
        </div>

				{/* Stats */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
					<div className="flex">
						{
							stats.map((stat, index) => (
								<HorarioCard key={index} item={stat} />
							))
						}
					</div>
        </div>
        
      </main>
    </div>
	)
}

export default NotaAsignatura