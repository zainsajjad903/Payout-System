let basesalery = 80000;
let absent = 2;
let halfleave = 1;
let sickleave = 1;
let extra = 5000;
let ramdanbouspercent = 10;
let daysinmonth = 30;
let hoursperday = 8;
//total salery days month or hour  ka lyhaz sa
let perday = basesalery / daysinmonth;
let perhour = perday / hoursperday;
let perminute = perhour / 60;
let unpaidDays = absent + halfleave * 0.5;
let deduction = unpaidDays * perday;

// Net salary
let ramadanBonus = (ramdanbouspercent / 100) * basesalery;
let netSalary = basesalery - deduction + extra + ramadanBonus;
