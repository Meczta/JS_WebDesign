function checkAge() {
    try {
        const name = prompt("Your name:");
        const age = prompt("Your age:");
        const status = prompt("Your status (admin, moderator, user):");

        if (!name || !age || !status) {
            throw new Error('The field is empty');
        }

        if (isNaN(age)) {
            throw new TypeError('Age value is not a number');
        }
        
        if (Number(age) < 18 || Number(age) > 70) {
            throw new RangeError('Your age is not within the allowed range (18-70)');
        }

        const validStatuses = ['admin', 'moderator', 'user'];
        if (!validStatuses.includes(status.toLowerCase())) {
            throw new EvalError('Invalid status value');
        }

        alert('You can watch a movie');

    } catch (error) {
        alert(`Error: ${error.message}\nType: ${error.name}`);
    }
}

checkAge();