import Ranking from "../Ranking";
import "./Contestants.css";
import Player from "./Player";

const Contestants = () => {
  const ranking = Ranking().slice(0, 10);

  return (
    <div id="leaderboard">
      <table>
        {ranking.map((user, index) => (
          <Player
            key={index}
            username={user.username}
            score={user.score}
            rank={user.rank}
            XLink={user.XLink}
            instagramLink={user.instagramLink}
            leetcodeLink={user.leetcodeLink}
          />
        ))}
      </table>
    </div>
  );
};

export default Contestants;
