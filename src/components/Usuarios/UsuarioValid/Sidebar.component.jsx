/* import axios from 'redaxios' */
import LanaIcon from '../../../assets/avatars/lana.svg'
import { UserContext } from '../../../contexts/user.context'
import React, {useState, useEffect, useContext, Fragment} from 'react'

import { Menu, Transition } from '@headlessui/react'
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

import PerfilIcon from '../../../assets/media/PerfilIcon.svg';
import CentroIcon from '../../../assets/media/CentroIcon.svg';
import HorarioIcon from '../../../assets/media/HorarioIcon.svg';
import NotificacionesIcon from '../../../assets/media/NotificacionesIcon.svg';
import ChatsIcon from '../../../assets/media/ChatsIcon.svg';
import IconoTabs from '../../../assets/media/IconoTabs.svg';


const paginasAprovaT = [
  { idx: 1, nombre: 'Perfil', icono: PerfilIcon, current: false  },
  { idx: 2, nombre: 'Centro', icono: CentroIcon, current: false  },
  { idx: 3, nombre: 'Horario', icono: HorarioIcon, current: false  },
  { idx: 4, nombre: 'Notificaciones', icono: NotificacionesIcon, current: false  },
  { idx: 5, nombre: 'Chats', icono: ChatsIcon, current: false  },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/** Get subject name 
function getSubjectName(id){
  axios.get({
    method: 'get',
    url:`http://172.23.184.210:8083/${id}/detalles`,
    headers: {'Accept':'application/json'}
  })
  .then((response) => { return response.data.nombre })
  .catch((error) => {
    console.log(error);
    return ("Error al obtener el nombre de la asignatura asociada con el ID: " + id);
  });
}*/

const Sidebar = () => {

  const { currentUser } = useContext(UserContext);
  /* const [idAsignaturas, setIdAsignaturas] = useState([]); */
  const [nombreAsignaturas, setNombreAsignaturas] = useState([])

  useEffect(()=>{
    /* axios.get({
      method: 'get',
      url:`http://172.23.184.210:8083/alumnos/{currentUser.usuario}/expediente`,
      headers: {'Accept':'application/json'}
    })
    .then((response) => { 
      setIdAsignaturas(response.data.asignaturas.id) 
      setNombreAsignaturas(
        idAsignaturas.map((subjectId)=>(getSubjectName(subjectId)))
      );
    }); */
    console.log(currentUser)
  },[currentUser])

	return (
		<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex h-0 flex-1 flex-col overflow-y-auto pt-1">
            {/* User account dropdown */}
            <Menu as="div" className="relative inline-block px-3 text-left">
              <div>
                <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <span className="flex w-full items-center justify-between">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      
                      <img
                        className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"
                        src={LanaIcon}
                        alt=""
                      />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-medium text-gray-900"> {currentUser} </span>
                        <span className="truncate text-sm text-gray-500"> ruedines@upv.es </span>
                      </span>
                    </span>
                    <ChevronUpDownIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
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
                <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="# "
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          View profile
                        </a>
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
                          Settings
                        </a>
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
                          Notifications
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="# "
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Get desktop app
                        </a>
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
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="# "
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* Sidebar Search */}
            <div className="mt-5 px-3">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                  aria-hidden="true"
                >
                  <MagnifyingGlassIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            <nav className="mt-6 px-3">
              <div className='mt-8'>
                <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headline">
                  Asignaturas
                </h3>
                {nombreAsignaturas.map((asignatura) => (
                    <a
                      key={asignatura}
                      href='# '
                      className={classNames(
                        asignatura.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <span className="truncate">{asignatura}</span>
                    </a>
                  ))}
              </div>
              <div className="mt-8">
                <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headline">
                  Páginas de AprovaT
                </h3>
                <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                  {paginasAprovaT.map((pagina) => (
                    <a
                      key={pagina.idx}
                      href="# "
                      className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <img 
                        src={IconoTabs}
                        alt="Icono de todas las tabs (>)"
                        className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6'
                      />
                      <img 
                        src={pagina.icono}
                        alt="Icono de la página"
                        className='text-gray-400 group-hover:text-gray-500 mr-2 flex-shrink-0 h-6 w-6'
                      />
                      <span className="truncate">{pagina.nombre}</span>
                    </a>
                  ))}
                </div>
              </div>
              
            </nav>
          </div>
        </div>
	)
}

export default Sidebar