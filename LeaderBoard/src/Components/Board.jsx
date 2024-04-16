import { Store } from '../store/store';
import './Board.css'
import Contestants from './Contestants';
import x from "../assets/x.png";
import instaimage from "../assets/insta.png";
import leetcode from "../assets/leetcode.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

const Board = () => {
    const store=Store()
    return (
        <>
            <Contestants />
           
            {
                store.isopen?
                <div className='toggle' onClick={()=>store.setisopen(false)}>
                    <div className='det'>
                       <div className='T_rank'> 
                       {store.selectedplayer.position === 1 ? (
                    <img src={first} alt="" />
                ) : store.selectedplayer.position === 2 ? (
                    <img src={second} alt="" />
                ) : store.selectedplayer.position === 3 ? (
                    <img src={third} alt="" />
                ) : (
                   `Rank : `+ store.selectedplayer.position
                )}
                       </div>
                       <div className='T_name'>{`Name : `+store.selectedplayer.name}</div>
                       <p style={{fontSize:"15px", fontFamily:"poppins", display:"flex",justifyContent:"center",alignItems:"center"}}> Social Handles</p>
                       <div className='T_contact'>
                       <a href={store.selectedplayer?.twitter}>
                    <img src={x} alt="Twitter" />
                </a>
                <a href={store.selectedplayer?.insta}>
                    <img src={instaimage} alt="Instagram" />
                </a>
                <a href={store.selectedplayer?.leetcode}>
                    <img src={leetcode} alt="LeetCode" />
                </a>

                       </div>

                    </div>
                </div>:""
            }
        </>
    )
}

export default Board;