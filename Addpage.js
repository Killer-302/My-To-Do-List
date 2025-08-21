const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');
const userDescription = urlParams.get('user');
document.getElementById('outputMessage').innerText = `Task : ${userName}`;
document.getElementById('outputMessage1').innerText = `Description : ${userDescription}`;

