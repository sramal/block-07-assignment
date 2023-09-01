//  Pseudocode
//      1. Write a function handle default vault combination
//      2. Write an anonymous function to generate random vault
//         combination.
//

// Handle to the New combination to button.
const btnHandle = document.querySelector(".btn");

/*
    add an event listener for the above button.

    Pseudocode
        1. Generate the three random numbers and set to 3 variables.
        2. Pad the number with zero if < than 10.
        3. Set the h1 to new vault combination.
*/
btnHandle.addEventListener("click", () => {
    // variable to hold combinations
    // use random() to genrate number 1 to 60 and 0 pad the single didgit number
    let num1 = Math.floor(Math.random() * 60 + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    let num2 = Math.floor(Math.random() * 60 + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    let num3 = Math.floor(Math.random() * 60 + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });

    // handle to the h1 that holds combination text
    const vaultCombo = document.querySelector(".vault-combination");
    const txt = `Vault combination ${num1} - ${num2} - ${num3}`;

    // set the textcontent of h1
    vaultCombo.textContent = txt;
});

/*
    defaultCombination(): Set the vault combination to 10 - 40 - 39.
                          Called after the page loads or ehen the reset button
                          is clicked.

    Pseudocode
        1. Set the h1 to 10 - 40 -39 vault combination.                          
*/
function defaultCombination() {
    // variable to hold combinations
    let num1 = 5 * 2;
    let num2 = 160 / 4;
    let num3 = 40 - 1;

    // handle to the h1 that holds combination text
    const vaultCombo = document.querySelector(".vault-combination");

    // set the textcontent of h1
    vaultCombo.textContent = `Vault combination ${num1} - ${num2} - ${num3}`;
}
