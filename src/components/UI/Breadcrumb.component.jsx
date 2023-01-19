import React, { useState, useEffect } from 'react'
import { HomeIcon } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom';



const Breadcrumb = () => {
  const location = useLocation();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("Infrastructura");

  useEffect(() => {
    const path = location.pathname.split("/").slice(1);
    const pathNormalized = path.map(p => p.charAt(0).toUpperCase() + p.slice(1));
    setPages([{ name: "AprovaT " + pathNormalized[0], href: "#", current: false }]);
    setCurrentPage(pathNormalized[1] || "Infrastructura");
  }, [location.pathname]);


	return (
		<nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="# " className="text-gray-400 hover:text-gray-500">
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
              href="# "
              className="ml-4 text-sm font-medium text-black-500 hover:text-gray-700"
              aria-current='page'>
              {currentPage}
            </a>  
          </div>
        </li>

      </ol>
    </nav>
	)
}

export default Breadcrumb