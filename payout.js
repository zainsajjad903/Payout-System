let basesalery = Number(prompt("Enter the base salary:"));
let absent = Number(prompt("Enter the number of absent days:"));
let halfleave = Number(prompt("Enter the number of half leave days:"));
let sickleave = Number(prompt("Enter the number of sick leave days:"));
let extra = Number(prompt("Enter the extra amount:"));
let ramdanbouspercent = Number(prompt("Enter the Ramadan bonus percentage:"));
//extra information
let daysinmonth = 30;
let hoursperday = 8;
//total salery days month or hour  ka lyhaz sa
let perday = basesalery / daysinmonth;
let perhour = perday / hoursperday;
let perminute = perhour / 60;
//jo ubsent thin or half leaves thin un kly ha ya
let unpaidDays = absent + halfleave * 0.5;
//leave logic
if (sickLeave > 0) {
  if (sickLeave <= 3) {
  } else {
    let extraSickDays = sickLeave - 3;
    unpaidDays += extraSickDays;
    alert(
      "Only 3 sick leaves are paid. Extra " +
        extraSickDays +
        " day(s) deducted.",
    );
  }
}
let extramoney = 0;
if (shift === "night") {
  extramoney = 2000;

  if (baseSalary >= 50000) {
    extramoney += 1000;
  }
} else if (shift === "day") {
  extramoney = 0;
} else {
  document.writeln("Invalid shift! Defaulting to day.");
}
let deduction = unpaidDays * perDay;
let ramadanBonus = (bonusPercent / 100) * baseSalary;
let netSalary = baseSalary - deduction + extra + ramadanBonus + extramoney;
document.writeln(
  `Per Day: ${perDay.toFixed(2)}\nPer Hour: ${perHour.toFixed(2)}\nPer Minute: ${perMinute.toFixed(2)}\nNet Salary: ${netSalary.toFixed(2)}`,
);
