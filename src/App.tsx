//import "./App.css";
import { Link, Outlet } from 'react-router-dom'
import logo from './assets/logo.svg'
import Switcher from './Components/Switcher'
import Search from './Components/Search'

const App = () => {

  return (
    <>
      <nav className="bg-white/50 dark:bg-gray-900/50 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-8">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-10" alt="Football card" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Football card</span>
          </Link>

          <Search />
          
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <Link to="/countries" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Countries
                </Link>
              </li>
              <Switcher />
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-xl items-center justify-between mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;