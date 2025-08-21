function redirectToAnotherPage() {
    const userName = document.getElementById('usernameInput').value;
    const userDescription = document.getElementById('usernameInput1').value;
    window.location.href = `Addpage.html?name=${encodeURIComponent(userName)}&user=${encodeURIComponent(userDescription)}`;

}

