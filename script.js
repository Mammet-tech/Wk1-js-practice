// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("gradeButton")
    .addEventListener("click", generateGrades);
  document.getElementById("speedButton").addEventListener("click", detectSpeed);
  document
    .getElementById("salaryButton")
    .addEventListener("click", calculateSalary);
});

// Grade Generator
function generateGrades() {
  let marks = document.getElementById("marks").value;
  let result = document.getElementById("gradeResult");

  if (marks === "" || marks < 0 || marks > 100) {
    result.innerHTML = "Please enter a valid number between 0 and 100.";
    result.style.color = "red";
    return;
  }

  let grade =
    marks > 79
      ? "A"
      : marks >= 60
      ? "B"
      : marks >= 49
      ? "C"
      : marks >= 40
      ? "D"
      : "E";
  let message = `Your grade is ${grade}.`;
  result.innerHTML = message;
  result.style.color = "green";
}

// Speed detector
function detectSpeed() {
  let speed = document.getElementById("speed").value;
  let result = document.getElementById("speedResult");

  if (speed === "" || speed < 0) {
    result.innerHTML = "Please enter a valid speed.";
    result.style.color = "red";
    return;
  }
  let points = Math.floor((speed - 70) / 5);
  if (points > 12) {
    result.innerHTML = "License suspended";
    result.style.color = "red";
  } else if (points >= 0) {
    result.innerHTML = `Points: ${points}`;
    result.style.color = "green";
  } else {
    result.innerHTML = "OK";
    result.style.color = "green";
  }
}

// Function to format numbers
function formatNumber(number) {
  return number % 1 === 0 ? number.toFixed(0) : number.toFixed(2);
}

// Salary calculator
function calculateSalary() {
  const personalRelief = 2400;
  const shifRate = 0.0275;
  const nssfTier1Limit = 8000;
  const nssfTier2Limit = 72000;
  const houseLevy = 0.015;

  let basicSalary = parseFloat(document.getElementById("basicSalary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);
  let grossSalary = basicSalary + benefits;
  
  let payee = 0;

  // Apply PAYE tax bands correctly
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.10;
  } else if (grossSalary <= 32333) {
    payee = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    payee = 24000 * 0.10 + 8333 * 0.25 + (grossSalary - 32333) * 0.30;
  } else if (grossSalary <= 800000) {
    payee = 24000 * 0.10 + 8333 * 0.25 + 166667 * 0.30 + (grossSalary - 500000) * 0.325;
  } else {
    payee = 24000 * 0.10 + 8333 * 0.25 + 166667 * 0.30 + 300000 * 0.325 + (grossSalary - 800000) * 0.35;
  }

  // Subtract personal relief from PAYE
  payee -= personalRelief;

  let shifDeduction = grossSalary * shifRate;
  let nssfDeduction = 0;
  if (grossSalary <= nssfTier1Limit) {
    nssfDeduction = grossSalary * 0.06;
  } else if (grossSalary <= nssfTier2Limit) {
    nssfDeduction =
      nssfTier1Limit * 0.06 + (grossSalary - nssfTier1Limit) * 0.06;
  } else {
    nssfDeduction =
      nssfTier1Limit * 0.06 +
      (nssfTier2Limit - nssfTier1Limit) * 0.06 +
      (grossSalary - nssfTier2Limit) * 0.06;
  }
  
  let houseLevyDeduction = grossSalary * houseLevy;
  let totalDeductions =
    payee + shifDeduction + nssfDeduction + houseLevyDeduction;
  let netSalary = grossSalary - totalDeductions;

  // Display results
  document.getElementById("payeeResult").innerHTML = `PAYE: Ksh ${payee.toFixed(2)}`;
  document.getElementById("shifResult").innerHTML = `SHIF Deduction: Ksh ${shifDeduction.toFixed(2)}`;
  document.getElementById("nssfResult").innerHTML = `NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`;
  document.getElementById("houseLevyResult").innerHTML = `Housing Levy Deduction: Ksh ${houseLevyDeduction.toFixed(2)}`;
  document.getElementById("netSalary").innerHTML = `Net Salary: Ksh ${netSalary.toFixed(2)}`;
}
