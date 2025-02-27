// EXERCICE PLUSGRANDEDATE

// function checkDate (date1, date2) {
//     const recentDate = date1 > date2 ? date1 : date2;

//     console.log(`La date la plus récente est : ${recentDate}`);
// }

// checkDate('2023-10-01', '2024-01-15');

// Avec conversion en date

function checkDate(date1, date2) {
    const newDate1 = new Date(date1);
    const newDate2 = new Date(date2);
    const recentDate = newDate1 > newDate2 ? newDate1 : newDate2;

    console.log(`La date la plus récente est : ${recentDate.toISOString().split('T')[0]}`);
}

checkDate('2023-10-01', '2024-01-15');
