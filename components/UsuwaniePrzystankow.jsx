import React from "react";
import home from "./../image/BamBus.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Stops = () => {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    const fetchAllStops = async () => {
      try {
        const res = await axios.get("http://localhost:8800/stops");
        setStops(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStops();
  }, []);

  console.log(stops);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/stops/"+id);
      window.location.reload()
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      <center>    
      <div className='NazwaStrony'>
      <img className='imgh' src={home} alt="home"/>
      <div className='napis'>
      BamBus
      </div>
      </div>
        <div className='nawigacja'>
            <button>
            <p className="link">
            <a href='/rejestracja'>Rejestracja</a>
            </p>
            </button>
            <button>
            <p className="link">
            <a href='/login'>Login</a>
            </p>
            </button>
            <button>
            <p className="link">
            <a href='/Logout'>Wylogowywanie</a>
            </p>
            </button>
            <button>
            <p className="link">
            <a href='/DodawaniePracownikow'>Dodawanie Pracowników</a>
            </p>
            </button>
            <button>
            <p className="link">
            <a href='/DodawaniePojazdow'>Dodawanie Pojazdów</a>
            </p>
            </button>
            <button>
            <p className="link">
            <a href='/UsuwaniePracownikow'>Usuwanie pracowników</a>
            </p>
            </button>
            <button>
            <p className="link">
            <a href='/DodawaniePrzystankow'>Dodawanie przystanków</a>
            </p>
            </button>
            
            <button>
            <p className="link">
            <a href='/UsuwaniePojazdow'>Usuwanie Pojazdow</a>
            </p>
            </button>

            <button>
            <p className="link">
            <a href='/UsuwaniePrzystankow'>Usuwanie Przystankow</a>
            </p>
            </button>

            <button>
            <p className="link">
            <a href='/EdytowaniePrzystankow'>Edytowanie Przystankow</a>
            </p>
            </button>
            
          </div>
          <div className="formusun">
        {stops.map((przystanek) => (
          <div key={przystanek.id} className="stop">
            <h2>Nazwa przystanku: {przystanek.nazwa}</h2>
            <h2>Numer id miasta: {przystanek.miasto_id}</h2>
            <button className="delete" onClick={() => handleDelete(przystanek.id)}>Usuń</button>
          </div>
        ))}
        </div>
      </center>
    </div>
  );  
};

export default Stops;