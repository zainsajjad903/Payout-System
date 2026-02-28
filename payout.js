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
  document.writeln("Invalid shift! Defaulting to day.");
}
let deduction = unpaidDays * perday; //wo psy jo absent or half leave k waja sa cut hon gy
let ramadanBonus = (ramdanbouspercent / 100) * basesalery; //rmazan ka bonas add ho ga
let netSalary = basesalery - deduction + extra + ramadanBonus + extramoney; //final salary calculate ho ga
document.writeln(
  `Per Day: ${perday.toFixed(2)}</br>Per Hour: ${perhour.toFixed(2)}</br>Per Minute: ${perminute.toFixed(2)}</br>Net Salary: ${netSalary.toFixed(2)}`, //sb print hon gi line break ho kr
);
