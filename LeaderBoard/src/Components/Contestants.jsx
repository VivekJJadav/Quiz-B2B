import "./Contestants.css";
import Player from "./Player";


const Contestants = () => {
  

  const ranking=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div id="leaderboard">
 <tr className="info">
      <td className="Rank_info">Rank</td>
      <td className="name_info">Name</td>
      <td className="points_info">Points</td>
   
    
    </tr>
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
