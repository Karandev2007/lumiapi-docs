'use client'

import { useState } from 'react'
import Link from 'next/link'

const apis = [
  {
    name: 'Text-to-Speech API',
    description: 'Convert Text into Speech.',
    link: '/api/text2speech', // changed url for the detailed api page
  },
  {
    name: 'GitHub User Information API',
    description: 'Get GitHub user information',
    link: '/api/githubinfo', // changed url for the detailed api page
  },
  {
    name: 'Translation API',
    description: 'Translate text into any language.',
    link: '/api/translate', // changed url for the detailed api page
  },
  {
    name: 'Random Joke API',
    description: 'Fetch a random joke for fun.',
    link: '/api/random-joke', // changed url for the detailed api page
  }
]

export default function Home() {
  const [search, setSearch] = useState('')

  // filtering apis based on search
  const filteredApis = apis.filter(api =>
    api.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-900 text-white">
      {/* search box to filter apis */}
      <form className="flex items-center max-w-sm mx-auto mb-8">
        <label htmlFor="simple-search" className="sr-only">search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Search API's"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      {/* api cards display, loop through and show */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApis.map((api, index) => (
          <div key={index} className="max-w-sm p-6 bg-gray-800 rounded-lg shadow cursor-pointer hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{api.name}</h5>
            <p className="mb-3 font-normal text-gray-400">{api.description}</p>
            <Link href={api.link}>
              {/* button to redirect to the detailed api page */}
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Checkout
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* footer section with copyright and credits */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Qein Tech. all rights reserved.
          </p>
          <div className="mt-4">
            {/* link to github profile */}
            <a href="https://github.com/Karandev2007" className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              Made by Karandev2007
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}