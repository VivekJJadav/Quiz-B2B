const updateLeaderboard = (previousData, newData) => {
    // Create a map for easy lookup of existing players based on their names
    const existingPlayersMap = {};
    previousData.forEach((player) => {
        existingPlayersMap[player.name] = player;
    });

    // Update existing players' points and add new players
    newData.forEach((newPlayer) => {
        if (existingPlayersMap[newPlayer.name]) {
            // Player exists, update their points
            existingPlayersMap[newPlayer.name].points += newPlayer.points;
        } else {
            // New player, add to the data
            previousData.push(newPlayer);
        }
    });

    // Sort the data based on points
    previousData.sort((a, b) => b.points - a.points);

    // Assign positions to players
    previousData.forEach((player, index) => {
        player.position = index + 1;
    });

    // Return the updated data
    return previousData;
};

export default updateLeaderboard;
