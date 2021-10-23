import React from "react";
import './app.scss'

const App = () => {

  return (
    <div className={'container'}>
      <div className={'wrapper'}>
        <form className={'form'}>
          <input className={'input'} type="email" />
          <input className={'input'} type="password" />
          <button className={'button'} type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default App;
