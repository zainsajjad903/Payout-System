let basesalery = Number(prompt("Enter the base salary:"));
let absent = Number(prompt("Enter the number of absent days:"));
let halfleave = Number(prompt("Enter the number of half leave days:"));
let sickleave = Number(prompt("Enter the number of sick leave days:"));
let extra = Number(prompt("Enter the extra amount:"));
let ramdanbouspercent = Number(prompt("Enter the Ramadan bonus percentage:"));
let daysinmonth = 30;
let hoursperday = 8;
//total salery days month or hour  ka lyhaz sa
let perday = basesalery / daysinmonth;
let perhour = perday / hoursperday;
let perminute = perhour / 60;
//jo ubsent thin or half leaves thin un kly ha ya
let unpaidDays = absent + halfleave * 0.5;
let deduction = unpaidDays * perday;

// Net salary
let ramadanBonus = (ramdanbouspercent / 100) * basesalery;
let netSalary = basesalery - deduction + extra + ramadanBonus;
