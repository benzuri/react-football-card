import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Player  from "../interfaces/Player"
import Loading from "../Components/Loading"

export function Players() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(false)

    const { id } = useParams();
    const apiUrl = import.meta.env.VITE_API_URL + "players/" + id
    const proxyUrl = import.meta.env.VITE_PROXY_URL
    const url = import.meta.env.VITE_URL

    useEffect(() => {
        setLoading(true)
        fetch(proxyUrl + encodeURIComponent(apiUrl))
            .then(response => response.json())
            .then(json => setPlayers(json))
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
                                        Player
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody key={'player-' + id}>
                                {players.map(player => (
                                    <tr key={player.id} className="bg-white/50 border-b dark:bg-gray-800/50 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row gap-2">
                                            <Link to={`../player/${player.id}`}>
                                                <span className="mr-2">#{player.shirtNumber}</span> {player.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`../player/${player.id}`}>
                                                {url}{player.link}
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

export default Players
