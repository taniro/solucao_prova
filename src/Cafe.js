import { useEffect, useState } from "react";

const Cafe = () => {

    const [data, setData] = useState([])

    const fetchApi = async () => {
        const result = await fetch("https://random-data-api.com/api/coffee/random_coffee?size=20")
        const coffees = await result.json()
        setData(coffees)
    }

    useEffect( ()=> {
        fetchApi()
    }, [])

    return <section>{data.map( (c) => {
        return <div key={c.id}>
                <h1>{c.blend_name}</h1>
                <p>{c.origin}</p>
            </div>
    })}</section>

}

export default Cafe;

/*

                    */