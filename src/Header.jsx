import React from 'react';
import HeaderImage from './images/book4.jpg';

function Header() {
  return (
    
    <div id='home'  style={{ 
      position: 'relative', 
      backgroundColor: '####', 
      overflow: 'hidden' 
    }}>
      <img 
        src={HeaderImage} 
        alt="Header Image" 
        style={{ 
          width: '100%', 
          height: '30%', 
          objectFit: 'cover' 
        }} 
      /> 
    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor:'#00007A',opacity:'30%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{backgroundColor:'', color: 'gold', fontSize: '4rem', marginBottom: '2rem' }}>MARYLIST</h1>
        <p style={{color:'whitesmoke'}}>take charge of your tasks</p>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        <a href="#services" style={{ textDecoration: 'underline' }}>
          <button style={{ padding: '1rem 2rem', borderRadius: '50px', background:'green', color: 'white', fontSize: '20px' }}>Welcome</button>
        </a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="yellowgreen" fill-opacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,288L1440,224L1440,320L0,320Z"></path></svg> */}
     
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#603a70" fill-opacity="1" d="M0,320L48,298.7C96,277,192,235,288,234.7C384,235,480,277,576,282.7C672,288,768,256,864,250.7C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      <div class="notification">
    <button class="delete"></button>
      <strong>  
    To view the latest state of the List , please use the "Refresh" button bellow. Simply click on the button to update the content on your screen. Thank you for using our app!"</strong>
       <p>You can only modify, delete or toggle the todos that you created. The view function is public to the whlole group </p>
     <strong>This contract was deployed on the </strong><strong style={{color:"limegreen"}}> SEPOLIA TESTNET</strong>
    </div>
 </div>
  );
}

export default Header;
