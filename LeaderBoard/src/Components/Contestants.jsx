import React from "react";
import "./Contestants.css";
import Player from "./Player";
import data from "../data/data";
import newdata from "../data/newdata";
import updateLeaderboard from "../update/update";
const Contestants = () => {
  // Filter and sort the data based on points
  const filteredSortedData = data.filter(item => item.points > 0).sort((a, b) => b.points - a.points);

  // Add positions to the filtered and sorted data
  const filteredSortedDataWithPositions = filteredSortedData.map((user, index) => ({
    ...user,
    position: index + 1 // Add 1 to index to start positions from 1
  }));
  const updatedLeaderboardData = updateLeaderboard(data, newdata);
console.log(updatedLeaderboardData);
  return (
    <div id="leaderboard">
      <table>
        {
          filteredSortedDataWithPositions.map((user, index) => (
            // Conditionally render the Player component only for top 10 players
            user.position <= 10 && <Player key={index} data={user} />
          ))
        }
      </table>
    </div>
  );
};

export default Contestants;
