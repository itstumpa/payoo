const validPin = 1234;

// add money feature

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Invalid account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });


//   cashout feature 


document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById("withdraw-amount").value);
const agentnumber = document.getElementById("agent-number").value; // input field for agent number
  const cashpin = document.getElementById("cash-pin").value; // input field for pin
  const validPin = "1234"; // you can change this to your real pin system

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount");
    return;
  }

  if (agentnumber.length < 11) {
    alert("Invalid account number");
    return;
  }

  if (cashpin !== validPin) {
    alert("Invalid pin number");
    return;
  }

  if (amount > availableBalance) {
    alert("Insufficient balance");
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});


//   toggling feature 


document.getElementById("add-button").addEventListener("click",function(){
      document.getElementById("cash-out-parent").style.display = "none"
      document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-button").addEventListener("click",function(){
      document.getElementById("add-money-parent").style.display = "none"
      document.getElementById("cash-out-parent").style.display = "block"
})