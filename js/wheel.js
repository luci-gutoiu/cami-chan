var data;
var segments = [];

function setResponse(response) {
    data = Object.values(response);
}

$.ajax({
    type: "GET",
    url: "../ajax/options.php",
    datatype: "json",
    async: false,
    success: setResponse,
});

var numSeg = 0;
data.forEach(function (value) {
    segments.push(
        {
            'fillStyle': '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
            'text': value.name,
            'size': winwheelPercentToDegrees(value.probability)
        },
    );
    if (value.probability > 0) {
        numSeg++;
    }
})

var theWheel = new Winwheel({
    'numSegments': numSeg,   // Specify number of segments.
    'outerRadius': 212,  // Set radius to so wheel fits the background.
    'innerRadius': 120,  // Set inner radius to make wheel hollow.
    'textFontSize': 16,   // Set font size accordingly.
    'textMargin': 0,    // Take out default margin.
    'segments':       // Define segments including colour and text.
    segments,
    'animation':           // Define spin to stop animation.
        {
            'type': 'spinToStop',
            'duration': 5,
            'spins': 20,
            'callbackFinished': alertPrize
        }
});

// Vars used by the code in this page to do power controls.
var wheelPower = 2;
var wheelSpinning = false;

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin() {
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        theWheel.animation.spins = 20;

        // Disable the spin button so can't click again while wheel is spinning.
        document.getElementById('spin_button').src = "../img/spin_off.png";
        document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel() {
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
// -------------------------------------------------------
function alertPrize(indicatedSegment) {
    // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
    alert("COGRATS! O SA PRIMESTI: " + indicatedSegment.text);
}
