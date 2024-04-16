import { DataEntry } from "../database/DataEntry.js";

const Ranking = () => {
    const sortedScores = DataEntry.slice().sort((a, b) => b.score - a.score);

    const rankedScores = sortedScores.map((player, index) => ({
        username: player.username,
        score: player.score,
        rank: index + 1,
        XLink: player.X,
        instagramLink: player.instagram,
        leetcodeLink: player.leetcode
    }));

    return rankedScores;
}

export default Ranking;
