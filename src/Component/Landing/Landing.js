import React from 'react';
import './Landing.scss';
import image from "../Dashboard/assets/banner.img";

const Landing = () => (
    <div>
    <h1>Hue Out There</h1>
    <img className='app-image' alt='icon' src={image}/>
      <ul>
          <button onClick>Log in</button>
      <button onClick>Sign in</button>
    </ul>

    </div>
);
export default Landing;
