import "./Player.css";
import x from "../assets/x.png"
import instaimage from "../assets/insta.png"
import leetcode from "../assets/leetcode.png"
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
const Player = ({ number }) => {
  return (
    <tr className="user">
      <td className="number">
        
      {number === 1 ? (
          <img src={first} alt="" />
        ) : number === 2 ? (
          <img src={second} alt="" />
        ) : number === 3 ? (
          <img src={third} alt="" />
        ) : (
          number
        )}</td>
      <td className="name">Name</td>
      <td className="points">0</td>
    <div className="contact_info">  <a href="">
        <img src={x}/>
      </a>
      <a href="">
        <img src={instaimage}/>
      </a>
      <a href="">
        <img src={leetcode}/>
      </a></div>
    </tr>
  );
};

export default Player;
