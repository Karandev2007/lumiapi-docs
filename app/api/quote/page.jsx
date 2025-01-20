import Link from 'next/link'

const RandomQuote = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-900 text-white">
      {/* back button to home */}
      <Link href="../">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          ← Back
        </button>
      </Link>
      <br /><br />

      {/* api info header */}
      <h2 className="text-3xl font-semibold mb-4">Random Quote API</h2>
      <p className="text-lg mb-4">Get a random inspirational or motivative quote.</p>
      
      {/* api endpoint description */}
      <h3 className="text-xl font-medium mb-2">endpoint:</h3>
      <pre className="bg-gray-800 p-4 rounded-lg">GET /v1/quote</pre>

      <h3 className="text-xl font-medium mt-4 mb-2">example request url:</h3>
      <pre className="bg-gray-800 p-4 rounded-lg">https://api.qeintech.in/v1/quote</pre>

      {/* json response format */}
      <h3 className="text-xl font-medium mt-4 mb-2">response (json):</h3>
      <pre className="bg-gray-800 p-4 rounded-lg">
{`{
  "category": "quote",
  "quote": "Don’t worry if plan A doesn’t work. There are 25 more letters in the alphabet.",
  "response_time": "1ms"
}`}
      </pre>

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

export default RandomQuote