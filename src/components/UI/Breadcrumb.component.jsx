import React from 'react'
import { HomeIcon } from '@heroicons/react/20/solid'



const pages = [
  { name: 'Aprovat de Lana Ruedines', href: '#', current: false },
]

const currentPage = { name: 'Dashboard', href: '#', current: true }



const Breadcrumb = () => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}>
                {page.name}
              </a>
            </div>
          </li>
        ))}
        <li>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a
              href={currentPage.href}
              className="ml-4 text-sm font-medium text-black-500 hover:text-gray-700"
              aria-current={currentPage.current ? 'page' : undefined}>
              {currentPage.name}
            </a>  
          </div>
        </li>
      </ol>
    </nav>
	)
}

export default Breadcrumb