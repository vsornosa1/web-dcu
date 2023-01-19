import React from 'react'

import Header from '../../../UI/Header.component';
import StatsCard from '../../../UI/Cards/StatsCard.component';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const projects = [
  {
    id: 1,
    title: 'Proyecto final DCU',
    initials: 'GA',
    team: 'Diseño Centrado en el Usuario',
    members: [
      {
        name: 'Vicent Sornosa',
        handle: 'vicentsornosa',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Joan Juan Llopis',
        handle: 'jjllopis',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Eliot Titmus',
        handle: 'eliottitmus',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 4,
    lastUpdated: 'Enero 07, 2022',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // Mes projectes...
]


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
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search"
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
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
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

        {/* Stats */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8 grid grid-cols-10 gap-4">
            <div className="col-span-7 bg-red-300">aaaaaaa</div>
            <div className="col-span-3 bg-blue-300">bbbbbbbbbbbbbbbbb</div>
        </div>

        {/* Projects llista - Dinamic + responsive en GUIs mes xicotetes que sm: */}
        <div className="mt-10 sm:hidden">
          <div className="px-4 sm:px-6">
            <h2 className="text-sm font-medium text-gray-900">Projects</h2>
          </div>
          <ul className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
            {projects.map((project) => (
              <li key={project.id}>
                <a href="# " className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                  <span className="flex items-center space-x-3 truncate">
                    <span
                      className={classNames(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                      aria-hidden="true"
                    />
                    <span className="truncate text-sm font-medium leading-6">
                      {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects tabla - Dinamic + responsive en GUIs mes xicotetes que sm: */}
        <div className="mt-8 hidden sm:block">
          <div className="inline-block min-w-full border-b border-gray-200 align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-t border-gray-200">
                  <th
                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    <span className="lg:pl-2">Project</span>
                  </th>
                  <th
                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Members
                  </th>
                  <th
                    className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                    scope="col"
                  >
                    Last updated
                  </th>
                  <th
                    className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                    scope="col"
                  />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                      <div className="flex items-center space-x-3 lg:pl-2">
                        <div
                          className={classNames(project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full')}
                          aria-hidden="true"
                        />
                        <a href="# " className="truncate hover:text-gray-600">
                          <span>
                            {project.title} <span className="font-normal text-gray-500">in {project.team}</span>
                          </span>
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-sm font-medium text-gray-500">
                      <div className="flex items-center space-x-2">
                        <div className="flex flex-shrink-0 -space-x-1">
                          {project.members.map((member) => (
                            <img
                              key={member.handle}
                              className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                              src={member.imageUrl}
                              alt={member.name}
                            />
                          ))}
                        </div>
                        {project.totalMembers > project.members.length ? (
                          <span className="flex-shrink-0 text-xs font-medium leading-5">
                            +{project.totalMembers - project.members.length}
                          </span>
                        ) : null}
                      </div>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                      {project.lastUpdated}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                      <a href="# " className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </main>
    </div>
	)
}

export default Dashboard;