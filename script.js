const wallets = {
    sol: "7S8x4rVmAuazq8iMHHwb3T1cMCv5wXnUxiRjwgyYGh5i",
    btc: "bc1qp5xzq2aa4mz3qejp42wqvaandtgc4qguppz9cj"
};

function showWallet(type) {
    const display = document.getElementById('wallet-display');
    display.innerHTML = `Send to ${type.toUpperCase()}: <br><strong>${wallets[type]}</strong><br><br>After sending, email proof to: your-email@example.com`;
}
