import './Header.css'
import king from "../assets/king.png" 
import logo from "../assets/logo.png"
const Header = () => {
    return <header>
       <div className='container'>
        <div className='logo_wrapper'>

            <a href="https://bits-to-bytes.github.io/">  <img src={logo} className='appLogo'   alt="" /></a>
          
        </div>
    <div className='wrapper'>    
        <img src={king} className='leaderboard_logo' alt="" />
        <h1>LeaderBoard </h1></div>
        
       </div>
    </header>
}
export default Header;