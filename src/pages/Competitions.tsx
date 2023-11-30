import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Competition from "../interfaces/Competition"
import Loading from "../Components/Loading"
import NoResult from "../Components/NoResult"

export function Competitions() {
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [loading, setLoading] = useState(false)
    const apiUrlCompetition = import.meta.env.VITE_API_URL + "competitions/"
    const proxyUrl = import.meta.env.VITE_PROXY_URL
    const url = import.meta.env.VITE_URL

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        fetch(proxyUrl + encodeURIComponent(apiUrlCompetition + id))
            .then(response => response.json())
            .then(json => setCompetitions(json))
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
                    {competitions.length > 1 ? (
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50/50 dark:bg-gray-700/50 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Competition
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Link
                                        </th>
                                    </tr>
                                </thead>
                                <tbody key={'competition-' + id}>
                                    {competitions.map(competition => (
                                        <tr key={competition.id} className="bg-white/50 border-b dark:bg-gray-800/50 dark:border-gray-700">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center gap-4">
                                                <img src={'https://tmssl.akamaized.net/images/logo/normal/' + competition.id.toLowerCase() + '.png'} className="w-9 h-9 rounded-lg" loading="lazy" />
                                                <Link to={`../teams/${competition.id}`}>
                                                    {competition.name}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`../teams/${competition.id}`}>
                                                    {url}{competition.link}
                                                </Link>                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <NoResult />
                    )}

                </>
            )}
        </div>
    )
}

export default Competitions