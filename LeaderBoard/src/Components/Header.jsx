import './Header.css'
import king from "../assets/king.png" 
const Header = () => {
    return <header>
       <div className='container'>
        <img src={king} alt="" />
        <h1>LeaderBoard </h1>
        
       </div>
    </header>
}
export default Header;