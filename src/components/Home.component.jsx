import React,{useState , useEffect} from "react";
import axios from "axios";
const API_KEY="7be070451a600b03993116cbc9493435";
//onClick={() => <Weather city={city}/>}
const Home= () => {
    
    const [city,setCity]=useState(null);
    const [weather,setWeather]=useState("Ranchi");
    const [data, setData] = useState(null);
  
    useEffect(()=>{
      const requestWeatherData= async()=>{
        const getWeatherData=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=${API_KEY}`);
        setCity(getWeatherData.data.main);
      };
      requestWeatherData();
    }, [data]);

    const dataProcess = () => {
        setData(weather);
    }

  
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-400">
                <div className="bg-white border-solid border-2 border-black shadow-2xl">

                    <div className="flex flex-col items-center gap-3 mx-3 my-4">
                        <h1 className="text-2xl text-center font-bold text-yellow-900 my-3">React Weather App</h1>
                        <div className="w-36 h-36">
                           <img src="https://www.treehugger.com/thmb/Kc3Gx2Y6SmBJNVZgf0OCoaEZpPQ=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__08__CollectionOfCloudsAgainstABlueSky-8cae9f3109d14dcf98d9facc5775222f.jpg" 
                           alt="weatherimage"
                           className="w-full h-full rounded-md" />
                        </div>
                        <span className="text-2xl text-center font-bold text-yellow-900 my-3">Find Weather of your city</span>
                        <div className="flex items-center mx-2 my-3">
                        
                               <input type="search" 
                               value={weather}
                               placeholder="CityName" 
                               className="border-solid border-2 border-black px-4"
                               onChange={(event) => {setWeather(event.target.value)}}
                               />
                           
                          <button onClick={()=>dataProcess()} className="text-white py-0.5 px-2 bg-black hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Search</button>
                        </div>


                    </div>
                    {!city ? (
                        <p>No data</p>
                  )  : (
                        <div className="flex items-center gap-4 my-4 mx-2">
                        <div className="flex items-center gap-2 ">
                            <div className="w-16 h-16">
                               <img src="https://ayushkul.github.io/react-weather-app/icons/temp.svg" 
                               alt="weatherimage"
                               className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xl text-left font-normal text-yellow-900">{city.temp_min}°C</span>
                                <span className="text-xl text-left font-normal text-yellow-900">Temperature</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 ">
                           <div className="w-16 h-16">
                               <img src="https://ayushkul.github.io/react-weather-app/icons/humidity.svg" 
                               alt="weatherimage"
                               className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xl text-left font-normal text-yellow-900">{city.humidity}</span>
                                <span className="text-xl text-left font-normal text-yellow-900">Humidity</span>
                            </div>
                        </div>
                    </div>
                    )}

                </div>
            </div>
            
        </>
    );
};

export default Home;
