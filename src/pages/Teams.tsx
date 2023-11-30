import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Team from "../interfaces/Team"
import Loading from "../Components/Loading"

export function Teams() {
    const [teams, setTeams] = useState<Team[]>([])
    const [loading, setLoading] = useState(false)
    const apiUrlTeams = import.meta.env.VITE_API_URL + "teams/"
    const proxyUrl = import.meta.env.VITE_PROXY_URL
    const url = import.meta.env.VITE_URL

    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        fetch(proxyUrl + encodeURIComponent(apiUrlTeams + id))
            .then(response => response.json())
            .then(json => setTeams(json))
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
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50/50 dark:bg-gray-700/50 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Team
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody key={'team-' + id}>
                                    {teams.map(team => (
                                    <tr key={team.id} className="bg-white/50 border-b dark:bg-gray-800/50 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row gap-2">
                                            <img src={'https://tmssl.akamaized.net/images/wappen/homepageWappen150x150/' + team.id + '.png'} className="w-6 h-6 rounded-full" loading="lazy" />
                                            <Link to={`../players/${team.id}`}>
                                                {team.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`../players/${team.id}`}>
                                                {url}{team.link}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    )
}

export default Teams
