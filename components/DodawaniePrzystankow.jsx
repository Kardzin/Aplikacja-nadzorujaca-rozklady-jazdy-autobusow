import axios from "axios";
import home from "./../image/BamBus.png";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [przystanek, setUser] = useState({
    nazwa: "",
    miasto_id: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/stops", przystanek);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
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
    <div className="form">
      <h1>Dodawanie przystanków</h1>
      <input
        type="text"
        placeholder="Nazwa przystanku"
        name="nazwa"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Numer id miasta"
        name="miasto_id"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Dodaj</button>
      {error && "Something went wrong!"}
      <button><Link to="/">Strona główna</Link></button>
    </div>
    </center>
    </div>
  );
};

export default Add;
