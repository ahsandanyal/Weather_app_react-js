import React, { useEffect } from 'react';
import {useState} from "react";
import "../styles/Searchmain.css";
import WeatherDetails from './WeatherDetails';
function Searchmain() {
    const [searchTerm, setSearchTerm] = useState('karachi');
    const [tempInfo, setTempInfo] = useState({});
    // console.log(searchTerm);
    const getWeatherInfo = async()=>{
      

      try{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=30.3753&lon=69.3451&appid=b756361557de205e88be0c51bf87a8fd`
      //  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=f840f08444ce09a2fbb87f9bff214`
       let res = await fetch(url);
       let data = await res.json();
       console.log(data);
       const{temp, humidity, pressure} = data.main;
       const{main: weatherType} = data.weather[0];
       const{name} = data;
       const{speed} = data.wind;
       const{country, sunset} = data.sys;

       const myNewWeatherInfo ={
        temp, humidity, pressure, weatherType, name, speed, country, sunset
       };
       setTempInfo(myNewWeatherInfo);
      }catch(error){
       console.log(error);
      }
    }
    useEffect(()=>{
        getWeatherInfo();
    }, []);
  return (
    <>
    <div className="wrap">
        <div className="search">
        <input type="search" className='inp' placeholder="Enter city name" id="search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
        <button className="searchButton" onClick={getWeatherInfo}>Search City</button>
        </div>
      
        
    </div>
   <WeatherDetails {...tempInfo}></WeatherDetails>
    </>
  )
}

export default Searchmain;
