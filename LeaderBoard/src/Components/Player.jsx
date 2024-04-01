import React from "react";
import "./Player.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import x from "../assets/x.png";
import instaimage from "../assets/insta.png";
import leetcode from "../assets/leetcode.png";

import PropTypes from "prop-types";

const Player = ({ data }) => {
    return (
        <tr className="user">
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
            <td className="name">{data.name}</td>
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

export default Player;
