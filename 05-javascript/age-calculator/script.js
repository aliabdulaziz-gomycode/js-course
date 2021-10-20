var calcAgeBtn = document.querySelector('form > button');
var resultViewer = document.getElementById('resultViewer');

function getAge(dob) {
    // calculate difference in milliseconds
    var dobInMilliSeconds = Date.parse(dob);
    var nowInMilliSeconds = Date.now();
    var differenceInMilliSeconds = nowInMilliSeconds - dobInMilliSeconds;

    // calculate years
    var yearsDivider = 1000 * 60 * 60 * 24 * 365.25;
    var years = Math.floor(differenceInMilliSeconds / yearsDivider);
    var yearsRemainder = differenceInMilliSeconds % yearsDivider;

    // calculate months
    var monthsDivider = 1000 * 60 * 60 * 24 * (365.25 / 12);
    var months = Math.floor(yearsRemainder / monthsDivider);
    var monthsRemainder = yearsRemainder % monthsDivider;

    // calculate days
    var daysDivider = 1000 * 60 * 60 * 24;
    var days = Math.floor(monthsRemainder / daysDivider);

    return [years, months, days];
}

function displayAge() {
    var dob = document.getElementById('dob').value;

    var dobInMilliSeconds = Date.parse(dob);
    var nowInMilliSeconds = Date.now();

    if (dobInMilliSeconds > nowInMilliSeconds) {
        alert('Date of birth cannot be greater than current date!')
    } else {
        // call getAge to calculate the age
        var [years, months, days] = getAge(dob);

        resultViewer.innerHTML = `Your age is: <strong>${years}</strong> years, <strong>${months}</strong> months and <strong>${days}</strong> days.`;
    }
}

// call displayAge function when user click on
// the Calculate age button
calcAgeBtn.addEventListener('click', displayAge)