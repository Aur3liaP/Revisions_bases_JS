// CALCULER AGE

function checkAge(birthDate) {
    const birthday = new Date(birthDate);
    const now = new Date();
    const years = now.getFullYear() - birthday.getFullYear();
    const months = now.getMonth() - birthday.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    console.log(`Vous avez ${years} ans et ${months} mois.`);
}

checkAge('2000-01-01');
