function fetchData() {
    fetch('getData.php')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

fetchData();
