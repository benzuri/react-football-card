import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PlayerCard from "../Components/Playercard.tsx"
import Loading from "../Components/Loading.tsx"
import Player from "../interfaces/Player"

export function Player() {
    const [player, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const apiUrl = import.meta.env.VITE_API_URL_PROFILE + id + "/profile"
    const proxyUrl = import.meta.env.VITE_PROXY_URL

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
                <div className="relative overflow-x-auto" >
                    <PlayerCard player={player} />
                </div>
            )}
        </div>
    )
}

export default Player
