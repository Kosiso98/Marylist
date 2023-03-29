import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Logo from './images/logomary.png'

const Navbar = () => {
  const { isConnected } = useAccount();
  
  // Replace "YOUR_RAINBOWKIT_URL_HERE" with the actual URL for the Rainbowkit website
  const rainbowkitUrl = encodeURIComponent("YOUR_RAINBOWKIT_URL_HERE");
  const wagmiConnectUrl = `https://www.wagmii.com/connect?returnUrl=${rainbowkitUrl}`;

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      background: '#00007A', 
      color: '#FFB60A', 
      padding: "1rem", 
      width: "100%", 
      position: "fixed", 
      top: 0, 
      left: 0,
      zIndex: 1,
    }}>
      <div>
        <a href="#">
          <img src={Logo} alt="Logo" style={{height:'100px' }} />
        </a>
      </div>
      <ul style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        alignItems: "center", 
        listStyle: "none", 
        marginRight:'2rem' 
      }}>
        <li ><a href="#home" style={{ color: "yellowgreen", textDecoration: "none", margin: "0 1rem" }}>Home</a></li>
        <li ><a href="#services" style={{ color: "yellowgreen", textDecoration: "none", margin: "0 1rem" }}>Services</a></li>
        <li><a href="#todo" style={{ color: "yellowgreen", textDecoration: "none", margin: "0 1rem" }}>Todos</a></li>
        <li><a href="#about" style={{ color: "yellowgreen", textDecoration: "none", margin: "0 1rem" }}>Tips</a></li>
        <li><ConnectButton /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
