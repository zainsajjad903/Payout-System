let basesalery = Number(prompt("Enter the base salary:"));
let absent = Number(prompt("Enter the number of absent days:"));
let halfleave = Number(prompt("Enter the number of half leave days:"));
let sickleave = Number(prompt("Enter the number of sick leave days:"));
let extra = Number(prompt("Enter the extra amount:"));
let ramdanbouspercent = Number(prompt("Enter the Ramadan bonus percentage:"));
//extra information
let daysinmonth = Number(prompt("Enter the number of days in the month:"));
let hoursperday = 8;
//total salery days month or hour  ka lyhaz sa
let perday = basesalery / daysinmonth;
let perhour = perday / hoursperday;
let perminute = perhour / 60;
//jo ubsent thin or half leaves thin un kly ha ya
let unpaidDays = absent + halfleave * 0.5;
//invalid daays lgic
if (daysinmonth > 31 || daysinmonth <= 0) {
  document.writeln(
    "Invalid input! Number of days in the month must be between 1 and 31.",
  );
} else if (
  absent < 0 ||
  halfleave < 0 ||
  sickleave < 0 ||
  absent > daysinmonth ||
  halfleave > daysinmonth ||
  sickleave > daysinmonth
) {
  document.writeln(
    "Invalid input! Absent, half leave, and sick leave days must be between 0 and the number of days in the month.",
  );
} else if (extra <= 0) {
  window.alert("Invalid input! Extra amount cannot be negative.");
} else if (ramdanbouspercent <= 0 || ramdanbouspercent >= 100) {
  document.writeln(
    "Invalid input! Ramadan bonus percentage must be between 0 and 100.",
  );
} else if (basesalery <= 0 || basesalery >= 1000000) {
  window.alert("Invalid input! Base salary must be between 0 and 1,000,000.");
} else if (absent > daysinmonth || absent < 0) {
  window.alert(
    "Invalid input! Absent or half leave days cannot exceed the number of days in the month.",
  );
} else if (halfleave > daysinmonth || halfleave < 0) {
  window.alert(
    "Invalid input! Half leave days cannot exceed the number of days in the month.",
  );
} else if (netSalary <= 0) {
  window.alert("0");
}
//leave logic
if (sickleave > 0) {
  if (sickleave <= 3) {
  } else {
    let extraSickDays = sickleave - 3;
    unpaidDays += extraSickDays;
    alert(
      "Only 3 sick leaves are paid. Extra " +
        extraSickDays +
        " day(s) deducted.",
    );
  }
}
let extramoney = 0;
let shift = prompt("Enter the shift (day/night):").toLowerCase();
if (shift === "night") {
  extramoney = 0.1 * basesalery; // 10% extra for night shift

  if (basesalery >= 50000) {
    extramoney += 1000;
  }
} else if (shift === "day") {
  extramoney = 0;
} else {
  document.writeln("Invalid shift! Please enter 'day' or 'night'.");
}
let deduction = unpaidDays * perday; //wo psy jo absent or half leave k waja sa cut hon gy
let ramadanBonus = (ramdanbouspercent / 100) * basesalery; //rmazan ka bonas add ho ga
let netSalary = basesalery - deduction + extra + ramadanBonus + extramoney; //final salary calculate ho ga
const resultEl = document.getElementById("result");

resultEl.innerHTML = `
  <h5 class="mb-3 text-primary">Payroll Summary</h5>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
      <span>Per Day</span><strong>${perday.toFixed(2)}</strong>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>Per Hour</span><strong>${perhour.toFixed(2)}</strong>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>Per Minute</span><strong>${perminute.toFixed(2)}</strong>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>Net Salary</span><strong>${netSalary.toFixed(2)}</strong>
    </li>
  </ul>
`;
