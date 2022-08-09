import React, { useEffect, useState } from 'react'

import "../styles/Searchmain.css";
function WeatherDetails({temp, humidity, pressure, weatherType, name, speed, country, sunset}) {

   const[weatherState, setWeatherState] = useState("");
   useEffect(()=>{
    if(weatherType){
      switch(weatherType){
         case "Clouds":
         setWeatherState("wi wi-day-cloudy");
         break;
         case "Haze":
          setWeatherState("wi-fog");
          break;
          case "Clear":
            setWeatherState("wi-day-sunny");
            break;
            case "Mist":
               setWeatherState("wi-dust");
               break;
               case "Rain":
                  setWeatherState("wi-day-rain");
                  break;

                  default:
                     setWeatherState("wi-day-sunny");
                     break;
      }
    }
   }, [weatherType])


   // converting the seconds in time
   let sec = sunset;
   let date = new Date(sec * 1000);
   let timeStr = `${date.getHours()}:${date.getMinutes()}`
   let te = temp;
   let temdata = te / 100;  
  return (
    <>
      <article className="widget">
         <div className="weatherIcon">
           <i className={`wi ${weatherState}`}></i>
         </div>
         <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
             <div className="weatherCondition">{weatherType}</div>
             <div className="place">{name},{country}</div>
          </div>
         
         </div>
         <div className="date">
            {new Date().toLocaleDateString()}
          </div>
          <div className="extra-temp">
             <div className="temp-info-minmax">
                <div className="two-sided-section">
                   <p>
                <i className={"wi wi-sunset"}></i>
                   </p>
                   <p className="extra-info-left-side">
                   {timeStr}PM <br/>
                      Sunset
                   </p>
                </div>
                
                <div className="two-sided-section">
                   <p>
                <i className={"wi wi-humidity"}></i>
                   </p>
                   <p className="extra-info-left-side">
                     {humidity} <br/>humidity
                   </p>
                </div>
                </div>

                <div className="weather-extra-info">
                <div className="two-sided-section">
                   <p>
                <i className={"wi wi-rain"}></i>
                   </p>
                   <p className="extra-info-left-side">
                     {pressure}&deg; <br/>
                     pressure
                   </p>
                </div>
                
                <div className="two-sided-section">
                   <p>
                <i className={"wi wi-strong-wind"}></i>
                   </p>
                   <p className="extra-info-left-side">
                     {speed} <br/>Speed
                     
                   </p>
                </div>
                </div>
             
          </div>
      </article>
    </>
  )
}

export default WeatherDetails;
