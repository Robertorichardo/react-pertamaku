import { useEffect, useState } from "react";

export default function Cuaca() {
    const [weather, setWeather] = useState(null);

    const fetchCuaca = async () => {
        const response = await fetch("https://ibnux.github.io/BMKG-importer/cuaca/501220.json");
       const data = await response.json();
       setWeather(data);
    };
    useEffect(() => {
        fetchCuaca();
    }, []);
    const urlicon = "https://ibnux.github.io/BMKG-importer/icon/";

    const formatDateTime = (date) => {
        const dateObject = new Date(date);

        const months = [
            "Januari", "Ferbuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember",
        ];
        const day = dateObject.getDate();
        const month = months[dateObject.getMonth()];
        const year = dateObject.getFullYear();
        const hours = ('0' + dateObject.getHours()).slice (-2);
        const minutes = ('0' + dateObject.getMinutes()).slice (-2);

        return `${day} ${month} ${hours} : ${minutes}`;
    }
    // console.log(weather);
    return (
        <div className="container mx-auto py-20">
            <h1 className="text-6xl font-teko text-center">Cuaca di Cikarang</h1>
           < br />

           <div className="grid grid-cols-12 gap-4">
            { weather ? weather.map((cuaca) => (

                <div key={cuaca.jamCuaca} className="col-span-3 border-2 p-6 rouded-2xl border-gray-700 hover-card group">
                    <h2>{formatDateTime(cuaca.jamCuaca)}</h2>
                   < br />
                   <img src={urlicon + cuaca.kodeCuaca + ".png"} alt={cuaca.cuaca}
                   className="mx-auto group-hover:animate-ping" />
                   < br />
                    <h1 className="font-bold text-2xl">{cuaca.cuaca}</h1>
                    <p> Kelembapan : {cuaca.humidity} %</p>
                    <p>Suhu(C) : {cuaca.tempC} &deg;C / {cuaca.tempF} &deg;F
                    </p>
                    
            </div>
            
            )) : "Loading..."}
           </div>
        </div>
    );
}