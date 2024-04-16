
import "./Player.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import x from "../assets/x.png";
import instaimage from "../assets/insta.png";
import leetcode from "../assets/leetcode.png";

import PropTypes from "prop-types";
import { Store } from "../store/store";

const Player = ({ data }) => {
    const store=Store()
    return (
        <tr className="user" onClick={()=>{
store.setselectedplayer(data);
store.setisopen(true)
        }}>
            <td className="number">
                {data.position === 1 ? (
                    <img src={first} alt="" />
                ) : data.position === 2 ? (
                    <img src={second} alt="" />
                ) : data.position === 3 ? (
                    <img src={third} alt="" />
                ) : (
                    data.position
                )}
            </td>
            <td className="name poppins-bold">{data.name}</td>
            <td className="points">{data.points}</td>
            <td className="contact_info">
                <a href={data.twitter}>
                    <img src={x} alt="Twitter" />
                </a>
                <a href={data.insta}>
                    <img src={instaimage} alt="Instagram" />
                </a>
                <a href={data.leetcode}>
                    <img src={leetcode} alt="LeetCode" />
                </a>
            </td>
        </tr>
    );
};

Player.propTypes = {
    data: PropTypes.object.isRequired,
};

Player.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  XLink: PropTypes.string,
  instagramLink: PropTypes.string,
  leetcodeLink: PropTypes.string,
};

export default Player;
