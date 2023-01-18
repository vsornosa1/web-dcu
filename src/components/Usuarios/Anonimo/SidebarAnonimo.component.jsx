import React, { useState, useEffect } from 'react'
import { Link, NavigationType, UNSAFE_NavigationContext, useNavigationType } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import LanaIcon from '../../../assets/avatars/lana.svg'
import Buildings from '../../../assets/media/Buildings.svg'
import UsersThree from '../../../assets/media/UsersThree.svg'
import Notebook from '../../../assets/media/Notebook.svg'
import BookOpen from '../../../assets/media/BookOpen.svg'
import PaperPlaneTilt from '../../../assets/media/PaperPlaneTilt.svg'
import AnonimIcon from '../../../assets/media/AnonimIcon.svg'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid'
import { Bars4Icon, ClockIcon, HomeIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Infrastructura', route: '/anonimo', href: '#a', current: true, icon: Buildings },
  { name: 'Equipo Directivo', route: '/anonimo/equipo', href: '#', current: false, icon: UsersThree },
  { name: 'Asignaturas/Ramas', route: '/anonimo/asignaturas', href: '#', current: false, icon: Notebook },
  { name: 'Normas ESO/Bach.', route: '/anonimo/normativa', href: '#', current: false, icon: BookOpen },
  { name: 'Contacto + RRSS', route: '/anonimo/contacto', href: '#', current: false, icon: PaperPlaneTilt },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const SidebarAnonimo = () => {
  const location = useLocation();
  const [navItems, setNavItems] = useState(navigation);

  useEffect(()=>{
    const a = navigation.map((item)=> {
      return {...item, current: (item.route === location.pathname)};
    });
    setNavItems(a);
  },[location.pathname])
  

	return (
		<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4 lg:">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="lg:flex lg:flex-col lg:justify-between lg:flex-1">
        <div className="flex h-0 flex-1 flex-col overflow-y-auto pt-1">
          <div className='relative inline-block px-3 text-left'>
              <span className="flex w-full items-center justify-between">
                <span className="flex min-w-0 items-center justify-between space-x-3">
                  <img
                    className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"
                    src={AnonimIcon}
                    alt=""
                  />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-base font-medium text-gray-900"> Anónimo </span>
                  </span>
                </span>
              </span>
          </div>

          {/* Navigation */}
          <nav className="mt-6 px-3">
            <div className="space-y-1">
              <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headlinee">
                Sobre el centro
              </h3>
              {navItems?.map((item) => (
                <Link 
                  key={item.name}
                  to={item.route}
                  className={classNames(
                    item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                    'group flex items-center px-6 py-2 text-sm font-medium rounded-md'
                )}>
                  <img
                    src={item.icon}
                    alt="iconCorrect"
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        

        
      </div>
      <div className="flex flex-0 flex-col justify-center align-middle items-center space-y-6 mb-4">
        <p className="text-2xl -ml-2"> 👋 AprovaT </p>
        <Link to="/" >
          <button className="bg-stone-200 font-semibold hover:bg-stone-300 hover:px-20 px-16 py-1 rounded-full"> 
            Login
          </button>
        </Link>
      </div>
    </div>
	)
}

export default SidebarAnonimo;
