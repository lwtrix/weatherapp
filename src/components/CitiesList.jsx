import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CitiesList = () => {

    const [citiesData, setCities] = useState([])

    const fetchCities = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ab2594bb9cmsh5be1c87d88bb0c1p112766jsn50e27924ed47',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        const res = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/locations/52.4862-1.8904/nearbyCities?radius=100&limit=10', options)
        const data = await res.json();
        // console.log(data)
        setCities(data.data)
    }

    let timeoutId;

    useEffect(() => {
        if(timeoutId) {
            clearInterval(timeoutId)
        }
        timeoutId = setTimeout(() => {
            citiesData.length ? console.log(citiesData) : fetchCities()
        }, 500)
        
    }, [])

    return (
        <div>
       { console.log(citiesData)}
             {citiesData && citiesData.map((cityData) => (
                <Link key={cityData.id} className="city-card" to={`/${cityData.name}`}>
                    <h2>{cityData.name}</h2>
                    <p>{cityData.country}</p>
                    <span>{cityData.region}</span>
                </Link>
            ))} 
        </div>
    )
}

export default CitiesList;