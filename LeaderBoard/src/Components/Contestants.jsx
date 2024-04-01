import "./Contestants.css";
import Player from "./Player";


const Contestants = () => {
  

  const ranking=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div id="leaderboard">

      <table>
        {
          ranking.map((user,index)=>(
            <Player key={index} number={user} />

          ))
         

        }
      </table>
    </div>
  );
};

export default Contestants;
