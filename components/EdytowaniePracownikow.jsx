import axios from "axios";
import home from "./../image/BamBus.png";
import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const [user, setUser] = useState({
    name: "",
    surename: "",
    login: "",
    password: "",
    rola_id: ""
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const userId = location.pathname.split("/")[2]

  console.log(location.pathname.split("/")[2])

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/users/"+ userId, user);
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
            <a href='/UsuwaniePracownikow'>Zarządzanie pracownikami</a>
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
      <h1>Edytowanie pracowników</h1>
      <input
        type="text"
        placeholder="Imie"
        name="name"
        onChange={handleChange}
      />
      <input
        rows={5}
        type="text"
        placeholder="Nazwisko"
        name="surename"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Nazwa użytkownika"
        name="login"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Hasło"
        name="password"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Rola pracownika"
        name="rola_id"
        onChange={handleChange}
      />  

      <button onClick={handleClick}>Edytuj</button>
      {error && "Something went wrong!"}
      <button><Link to="/">Strona główna</Link></button>
    </div>
    </center>
    </div>
  );
};

export default Update;
