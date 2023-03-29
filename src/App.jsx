import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import 'bulma/css/bulma.min.css';
import Todolistt from './Todolistt'
import { Account } from './components'
import RefreshButton from './RefreshButton'
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';
import Services from './Services';
import Footer from './Footer';

export function App() {
  const { isConnected } = useAccount()
  return (
    <>
    <div style={{backgroundColor:'#00007A', overflow:'hidden'}}>  
      {/* <h1>wagmi + RainbowKit + Vite</h1> */}
    
    {/* <ConnectButton/> */}
    
    <Navbar/>
    <Header/>
    <Todolistt/>
    <RefreshButton />
    <Services/>
    <Content/>
    <Footer/>
      {/* {isConnected && <Account />} */}
      </div>
    </>
  )
}
