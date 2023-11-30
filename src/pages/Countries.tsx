import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Country from "../interfaces/Country"
import Loading from "../Components/Loading"
import NoResult from "../Components/NoResult"

export function Countries() {
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const apiUrlCountry = import.meta.env.VITE_API_URL + "countries/"
    const proxyUrl = import.meta.env.VITE_PROXY_URL
    const url = import.meta.env.VITE_URL

    useEffect(() => {
        setLoading(true)
        fetch(proxyUrl + encodeURIComponent(apiUrlCountry))
            .then(response => response.json())
            .then(json => setCountries(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="App">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="relative overflow-x-auto">
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" onChange={(e) => setSearch(e.target.value)} className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search country..." />
                        </div>
                        {countries.filter((e) =>
                            e.name.toLowerCase().includes(search.toLowerCase())
                        ).length === 0 ? (
                            <NoResult />
                        ) : (
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50/50 dark:bg-gray-700/50 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Country
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Link
                                        </th>
                                    </tr>
                                </thead>
                                <tbody key={'countries'}>
                                    {countries.filter((e) =>
                                        e.name.toLowerCase().includes(search.toLowerCase())
                                    ).map(country => (
                                        <tr key={country.id} className="bg-white/50 border-b dark:bg-gray-800/50 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-600/50">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center gap-4">
                                                <img src={`/flags/${country.name}.svg`} className="w-9 h-9 rounded-lg" loading="lazy" />
                                                <Link to={`../competitions/${country.id}`}>
                                                    {country.name}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`../competitions/${country.id}`}>
                                                    {url}{country.link}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Countries