import Link from 'next/link'

const RandomJoke = () => {
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
      <h2 className="text-3xl font-semibold mb-4">Random Joke API</h2>
      <p className="text-lg mb-4">Get a random joke to spice up your app.</p>
      
      {/* api endpoint description */}
      <h3 className="text-xl font-medium mb-2">endpoint:</h3>
      <pre className="bg-gray-800 p-4 rounded-lg">GET /v1/joke</pre>

      {/* example request url for api */}
      <h3 className="text-xl font-medium mt-4 mb-2">example request url:</h3>
      <pre className="bg-gray-800 p-4 rounded-lg">https://api.qeintech.in/v1/joke</pre>

      {/* json response format */}
      <h3 className="text-xl font-medium mt-4 mb-2">response (json):</h3>
      <pre className="bg-gray-800 p-4 rounded-lg">
{`{
  "category": "joke",
  "joke": "I told my wife she was getting too emotional, so she threw a cup of tea at me. It was steeped in emotion",
  "response_time": "1ms"
}`}
      </pre>

      {/* end of the page */}
    </div>
  )
}

export default RandomJoke