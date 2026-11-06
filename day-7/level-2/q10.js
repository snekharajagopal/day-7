let balance=1000;
let choice;
do{
    choice=Number(prompt(
        `--------ATM Menu---------
        current balance=${balance}

        1.check Balance
        2.Deposit Money
        3.Withdraw Money
        4.Exit

        Enter your choice(1-4):`
    ));


  switch (choice) {
    case 1:
      console.log(`Balance: Rs. ${balance.toFixed(2)}`);
      break;

    case 2: {
      const deposit = Number(prompt("Enter deposit amount:"));

      if (!Number.isFinite(deposit) || deposit <= 0) {
        console.log("Enter a valid positive amount.");
      } else {
        balance += deposit;
        console.log(`New balance: Rs. ${balance.toFixed(2)}`);
      }
      break;
    }

    case 3: {
      const withdrawal = Number(prompt("Enter withdrawal amount:"));

      if (!Number.isFinite(withdrawal) || withdrawal <= 0) {
        console.log("Enter a valid positive amount.");
      } else if (withdrawal > balance) {
        console.log("Insufficient balance.");
      } else {
        balance -= withdrawal;
        console.log(`New balance: Rs. ${balance.toFixed(2)}`);
      }
      break;
    }

    case 4:
      console.log("Thank you. Goodbye!");
      break;


    default:
      console.log("Invalid choice.");
  }
} while (choice !== 4);