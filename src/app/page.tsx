import StoreTank from "../StoreTank"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-gray-800 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-2xl font-bold text-gray-800">Store Tank</span>
            </div>
            <nav>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
                Files
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Settings
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="py-8">
        <StoreTank />
      </main>
      <footer className="bg-gray-800 text-gray-300 py-4 mt-8">
        <div className="max-w-4xl mx-auto px-6 text-center">© 2023 Store Tank. All rights reserved.</div>
      </footer>
    </div>
  )
}

