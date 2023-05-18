import React, { useState } from 'react';
import  logo from "./assets/logo.png"
import "./style.css";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem vindo(a)! </span>

            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="text-center">
              <span className="text">Não possui conta? </span>
              <a className="text2" href="#">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  );
};
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [radio, setRadio] = useState('');
  
  
  
  const handleRegister = () => {
    // Lógica de registro aqui
    console.log('Registro:',name, email,date, password, radio);
  };
  

  return (
    

    <div className="container">
      <div className="container-register">
      <div className="wrap-register">
    <div>
    <span className="login-form-title"> Bem vindo(a)! </span>
      <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>

      <form className="register-form">

      <div className="wrap-input-register">

      <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>
      
      <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

           
            <div className="wrap-input">
            <p>Data de Criação</p>
      <input 
      className={date !== "" ? "has-val input" : "input"}
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      />
      </div>
      <div className="wrap-input">
      <p>Data de Atualização</p>
      <input 
      className={date !== "" ? "has-val input" : "input"}
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      />
      </div>
      <p>Administrador</p>
      <input 
      type="radio"
      value={radio}
      onChange={(e) => setRadio(e.target.value)} 
      />
      <p>Investidor</p>
       <input 
      type="radio"
      className="radio-register"
      value={radio}
      onChange={(e) => setRadio(e.target.value)}  
      />
      
        <div className="container-register-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>
      </div>
    </form>
      </div>
    </div>
    </div>
    </div>
    
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleScreen = () => {
    setShowLogin(!showLogin);
  };

  return (
   
    <div>
      <button className="btn-register" onClick={handleToggleScreen}>
        {showLogin ? 'Ir para Cadastro' : 'Ir para Login'}
      </button>
      {showLogin ? <Login /> : <Register />}
    </div>
    
  );
};

export default App;