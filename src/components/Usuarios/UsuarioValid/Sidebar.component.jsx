import axios from 'redaxios';
import { Link } from 'react-router-dom';
import React, {useState, useEffect, useContext, Fragment} from 'react';

import { RightbarContext } from '../../../contexts/rightbar.context'; 

import { Menu, Transition } from '@headlessui/react'
import {
  ChevronUpDownIcon,
} from '@heroicons/react/20/solid'

import LanaIcon from '../../../assets/avatars/lana.svg'
import PerfilIcon from '../../../assets/media/PerfilIcon.svg';
import CentroIcon from '../../../assets/media/CentroIcon.svg';
import HorarioIcon from '../../../assets/media/HorarioIcon.svg';
import NotificacionesIcon from '../../../assets/media/NotificacionesIcon.svg';
import ChatsIcon from '../../../assets/media/ChatsIcon.svg';
import IconoTabs from '../../../assets/media/IconoTabs.svg';
import Asignatura1 from '../../../assets/media/Asignatura1.svg';
import Asignatura2 from '../../../assets/media/Asignatura2.svg';
import Asignatura3 from '../../../assets/media/Asignatura3.svg';
import ChartBar from '../../../assets/media/ChartBar.svg';



const infoAsignaturas = [
  { acronimo: "DEW", nombre: "Desarrollo Web", icono: Asignatura1 },
  { acronimo: "IAP", nombre: "Integración de Aplicaciones", icono: Asignatura2 },
  { acronimo: "DCU", nombre: "Diseño Centrado en el Usuario", icono: Asignatura3 },
];

const paginasAprovaT = [
  { nombre: 'Perfil', icono: PerfilIcon, current: false  },
  { nombre: 'Centro', icono: CentroIcon, current: false  },
  { nombre: 'Horario', icono: HorarioIcon, current: false  },
  { nombre: 'Notificaciones', icono: NotificacionesIcon, current: false  },
  { nombre: 'Chats', icono: ChatsIcon, current: false  },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  const [ asignaturas, setAsignaturas ] = useState([])
  const { setCurrentRightbar } = useContext(RightbarContext);


  useEffect(() => {
    axios.get({
      method: 'get',
      url:`http://172.23.184.210:8081/alumnos/expediente/12345678W`,
      headers: {
        'Accept':'application/json',
      }
    })
    .then(async response => 
      await setAsignaturas(response.data.asignaturas)
    )
    .catch(error => 
      console.log("X ~ ERROR: Sidebar.component.jsx:71 ~ ", error)
    )
  }, [])


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
                    <span className="truncate text-sm font-medium text-gray-900"> Lana Ruedines </span>
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
                      onClick={() => setCurrentRightbar(true)}
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
                    <Link to="/">
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
        <nav className="mt-6 px-3">
          <div className='mt-8'>
            <div className="flex px-3 justify-start space-x-4">
              <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-favoritos-headline">
                Favoritos
              </h3>
              <h3 className="px-3 text-sm font-medium text-gray-400" id="desktop-recientes-headline">
                Recientes
              </h3>
            </div>
            
            <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-asignaturas-headlineDiv">
              <Link to="/dashboard">
                <a
                href='# '
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                >
                  <img 
                    src={IconoTabs}
                    alt="Icono de todas las tabs (>)"
                    className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6'
                  />
                  <img 
                    src={ChartBar}
                    alt="Chart Bar icono"
                    className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6 mr-2'
                  />
                  <span className="truncate"> Dashboard </span>
                </a>  
              </Link>
            </div>
          </div>
        </nav>
        <nav className="mt-6 px-3">
          <div className='mt-8'>
            <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-asignaturas-headline">
              Asignaturas
            </h3>
            <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-asignaturas-headlineDiv">
              {asignaturas?.map((asignatura, index) => (
                <a
                  key={index}
                  href='# '
                  className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <img 
                    src={IconoTabs}
                    alt="Icono de todas las tabs (>)"
                    className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6'
                  />
                  <img 
                    src=
                    {
                      infoAsignaturas.find(a => {
                        return a.acronimo === asignatura.id_asig.split(".")[0]
                      }).icono
                    }
                    alt="Icono de todas las tabs (>)"
                    className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6 mr-2'
                  />
                  <span className="truncate">
                    { infoAsignaturas.find(a => {
                        return a.acronimo === asignatura.id_asig.split(".")[0]
                      }).nombre
                    }
                  </span>
                </a>  
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-pagina-headline">
              Páginas de AprovaT
            </h3>
            <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-pagina-headlineDiv">
              {paginasAprovaT.map((pagina, index) => (
                pagina.nombre === "Perfil" ?
                  (<Link to="/dashboard/perfil">
                    <a
                      key={index}
                      href="# "
                      className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <img 
                        src={IconoTabs}
                        alt="Icono de todas las tabs (>)"
                        className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6'
                      />
                      <img 
                        src={PerfilIcon}
                        alt="Icono de la página"
                        className='text-gray-400 group-hover:text-gray-500 mr-2 flex-shrink-0 h-6 w-6'
                      />
                      <span className="truncate"> Perfil </span>
                    </a>
                  </Link>)
                  : 
                  pagina.nombre === "Chats" ? 
                    (<Link to="/dashboard/chats">
                      <a
                        key={`a${index}`}
                        href="# "
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <img 
                          src={IconoTabs}
                          alt="Icono de todas las tabs (>)"
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6'
                        />
                        <img 
                          src={ChatsIcon}
                          alt="Icono de la página"
                          className='text-gray-400 group-hover:text-gray-500 mr-2 flex-shrink-0 h-6 w-6'
                        />
                        <span className="truncate"> Chats </span>
                      </a>
                    </Link>)
                    :
                    pagina.nombre === "Notificaciones" ? 
                      <a
                        key={`b${index}`}
                        href="# "
                        onClick={() => setCurrentRightbar(true)}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <img 
                          src={IconoTabs}
                          alt="Icono de todas las tabs (>)"
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6'
                        />
                        <img 
                          src={NotificacionesIcon}
                          alt="Icono de la página"
                          className='text-gray-400 group-hover:text-gray-500 mr-2 flex-shrink-0 h-6 w-6'
                        />
                        <span className="truncate"> Notificaciones </span>
                      </a>
                      : 
                      <a
                        key={`c${index}`}
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