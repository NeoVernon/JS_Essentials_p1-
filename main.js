
var name = prompt ('Enter your name', 'Petro'),
    myEvent = prompt ('Enter the event you have to visit', 'meeting'),
    place  = prompt ('Enter the place you need to be', 'Milan'),
    time = prompt ('Enter the time', 'today at 17:00'),
    output;


if (name && myEvent && place && time) {
    output = name + ' has a ' + myEvent + ' ' + time + ' in ' + place;

    //result in console
    console.log(output);

    document.querySelector('.main-text').innerHTML = 'Great, thank you!';
}
else {
    document.querySelector('.main-text').innerHTML = 'Please, refresh the page and fill in all of the fields.';
}
