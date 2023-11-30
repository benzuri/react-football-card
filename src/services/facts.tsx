const CAT_ENDPOINT_RANDOM_FACT = "https://api.codetabs.com/v1/proxy/?quest=https://transfermarkt-api.vercel.app/players/18867/profile"

export const getRandomFact = async () => {


    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    
    const data = await res.json()
    const fact = data.age
    //console.log(data)

    return fact
}
