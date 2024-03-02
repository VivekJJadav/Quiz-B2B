import "./Player.css";

const Player = ({ number }) => {
  return (
    <tr>
      <td className="number">{number}</td>
      <td className="name">NAME</td>
      <td className="points">0</td>
      <a href="">
        <img src='../assets/download.jpeg'/>
      </a>
      <a href="">
        <img src="../assets/leetcode.png"/>
      </a>
      <a href="">
        <img src="../assets/images.png"/>
      </a>
    </tr>
  );
};

export default Player;
