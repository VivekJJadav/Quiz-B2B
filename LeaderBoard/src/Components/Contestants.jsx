import "./Contestants.css";
import Player from "./Player";

const Contestants = () => {
  return (
    <div id="leaderboard">
      <div className="ribbon"></div>
      <table>
        <Player number={1} />
        <Player number={2} />
        <Player number={3} />
        <Player number={4} />
        <Player number={5} />
        <Player number={6} />
        <Player number={7} />
        <Player number={8} />
        <Player number={9} />
        <Player number={10} />
      </table>
    </div>
  );
};

export default Contestants;
