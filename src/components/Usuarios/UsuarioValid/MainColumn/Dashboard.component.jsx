import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react';
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import LanaIcon from '../../../../assets/avatars/lana.svg';


import Header from '../../../UI/Header.component';
import StatsCard from '../../../UI/Cards/StatsCard.component';
import NotaMediaDoubleLineGraph from '../../../UI/Graficas/NotaMediaDoubleLineGraph.component';
import RendimientoVerticalGraph from '../../../UI/Graficas/RendimientoVerticalGraph.component';
import NotasTestsGraph from '../../../UI/Graficas/NotasTestsGraph.component';
import TotalTestsPieGraph from '../../../UI/Graficas/TotalTestsPieGraph.component';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const stats = [
  { 
		name: 'Nota Media ESO',
		stat: '8,21', 
		change: '11\'01%',
		changeType: 'increase',
		idx: 2,
		tieneImg: false
	},
  { 
		name: 'Tests totales 4º ESO',
		stat: '367',
		change: '9\'15%',
		changeType: 'increase',
		idx: 1,
		tieneImg: false
	},
  { 
		name: 'Tareas entregadas',
		stat: '1.016',
		change: '-0\'56%',
		changeType: 'decrease',
		idx: 2,
		tieneImg: false
	},
]


const Dashboard = () => {

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
                    src={LanaIcon}
                    alt="Avatar de Lana"
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
                          Notifications
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
                            Logout
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

        {/* Stats */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-gray-900"> 4º ESO: </h2>
            <div className="flex">
              {
                stats.map(stat => (
                  <StatsCard className="" item={stat} />
                ))
              }
            </div>
        </div>

        {/* Graphs linea 1 */}
        <div className="mt-6 px-4 sm:px-10 lg:px-12 ">
            <div className="flex space-x-4">
              <NotaMediaDoubleLineGraph />
              <RendimientoVerticalGraph />
            </div>
        </div>

        {/* Graphs linea bottom */}
        <div className="mt-6 px-4 sm:px-10 lg:px-12 ">
            <div className="flex space-x-4">
              <NotasTestsGraph />
              <TotalTestsPieGraph />
            </div>
        </div>

        
        
      </main>
    </div>
	)
}

export default Dashboard;