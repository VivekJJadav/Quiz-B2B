import PropTypes from "prop-types";
import "./Player.css";
import x from "../assets/x.png";
import instaimage from "../assets/insta.png";
import leetcode from "../assets/leetcode.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

const Player = ({
  username,
  score,
  rank,
  XLink,
  instagramLink,
  leetcodeLink,
}) => {
 
  return (
    <tbody>
      <tr className="user">
        <td className="number">
          {rank === 1 ? (
            <img src={first} alt="" />
          ) : rank === 2 ? (
            <img src={second} alt="" />
          ) : rank === 3 ? (
            <img src={third} alt="" />
          ) : (
            rank
          )}
        </td>
        <td className="name">{username}</td>
        <td className="points">{score}</td>
        <td className="contact_info">
          {XLink && (
            <a href={XLink}>
              <img src={x} alt="" />
            </a>
          )}
          {instagramLink && (
            <a href={instagramLink}>
              <img src={instaimage} alt="" />
            </a>
          )}
          {leetcodeLink && (
            <a href={leetcodeLink}>
              <img src={leetcode} alt="" />
            </a>
          )}
        </td>
      </tr>
    </tbody>
  );
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
