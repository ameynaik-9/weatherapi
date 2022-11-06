import React, { useEffect, useState } from 'react'
import '../index.css'
import cloudyImg from '../images/cloudy.jpeg'

export default function Search() {
    // const [city,setCity] = useState(null)
    const [search, setSearch] = useState("")
    const [input, setInput] = useState()
    const [showStatus, setShowstatus] = useState(false)

    const myStyle = {
        backgroundImage :{cloudyImg}
    }



    const getWeatherDetails = (search) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4b0762f5363f35911da5c6aab2e76bc7`)
            .then(res => res.json())
            .then(data => setInput(data.main.temp))
            .catch((err) => console.log(err))
    }
    // console.log(input.main)
    function handleOnChange(event) {
        setSearch(event.target.value)
    }
    function handleOnClick() {
        getWeatherDetails(search)
        setShowstatus(true);
    }


    return (
        <div>
            <div className='container my-5'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="City" aria-label="Recipient's username" aria-describedby="basic-addon2"
                        onChange={handleOnChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"
                            onClick={handleOnClick}
                        >Button</button>
                    </div>
                </div>
            </div>
            <div className='card' style={myStyle}>
            <div className='box d-flex'>
                {/* <h1>{((JSON.stringify(input.main.temp))-273.15).toPrecision(4)}°C</h1> */}
                {/* <h1>{}</h1> */}
                <h3>{(input - 273.15).toPrecision(4)}°C</h3>
            </div>
            </div>
        </div >
    )
}