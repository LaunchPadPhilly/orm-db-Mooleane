export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Welcome to Aaron's Portfolio
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          I am an Associate at Launchpad Philly. I like to draw and play video games.
        </p>

        <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <p className="text-yellow-900 font-semibold">
            💡 Tip: Check the README.md for detailed instructions and examples!
          </p>
        </div>
      </div>
    </div>
  )
}
