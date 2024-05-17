let gameStarted = false;
let level = 0;

$(".green").hover(function() {
    $(this).css("box-shadow", "0 8px 8px 0 green");
}, function() {
    $(this).css("box-shadow", "none");
}).click(function() {
    if (gameStarted) {
        checkColor(1); 
    }
});

$(".yellow").hover(function() {
    $(this).css("box-shadow", "0 8px 8px 0 yellow");
}, function() {
    $(this).css("box-shadow", "none");
}).click(function() {
    if (gameStarted) {
        checkColor(3); // Check if yellow matches the expected color
    }
});


$(".red").hover(function() {
    $(this).css("box-shadow", "0 8px 8px 0 red");
}, function() {
    $(this).css("box-shadow", "none");
}).click(function() {
    if (gameStarted) {
        checkColor(2); // Check if yellow matches the expected color
    }
});


$(".blue").hover(function() {
    $(this).css("box-shadow", "0 8px 8px 0 blue");
}, function() {
    $(this).css("box-shadow", "none");
}).click(function() {
    if (gameStarted) {
        checkColor(4); // Check if yellow matches the expected color
    }
});


$(document).on('keypress', function() {
    if (!gameStarted) {
        gameStarted = true;
        level = 1;
        $('h1').html('The game has started');
        $('li').remove();
        $("h1").after("<h2>Level " + level + "</h2>");
        playLevel(level);
    }
});

function playLevel(currentLevel) {
    sequence = generateSequence(currentLevel);
    showSequence(sequence, currentLevel);
}

function generateSequence(level) {
    let sequence = [];
    for (let i = 0; i < level; i++) {
        let ran = Math.floor(Math.random() * 4) + 1;
        sequence.push(ran);
    }
    return sequence;
}

function showSequence(sequence, level) {
    let delay = 1000;
    sequence.forEach((colorIndex, index) => {
        setTimeout(() => {
            switch (colorIndex) {
                case 1:
                    $(".green").fadeToggle(500).fadeToggle(500);
                    break;
                case 2:
                    $(".red").fadeToggle(500).fadeToggle(500);
                    break;
                case 3:
                    $(".yellow").fadeToggle(500).fadeToggle(500);
                    break;
                case 4:
                    $(".blue").fadeToggle(500).fadeToggle(500);
                    break;
                default:
                    break;
            }
        }, delay * (index + 1));
    });

    setTimeout(() => {
        $("h2").text("Level " + level + " complete! Press any key for next level.");
        $(document).on('keypress', function() {
            level++;
            $("h2").text("Level " + level);
            playLevel(level);
        });
    }, delay * sequence.length + 1000);
}
function checkColor(clickedColor) {
    const expectedColor = sequence.shift(); // Get the expected color from the sequence
    if (clickedColor === expectedColor) {
        // Correct color! Proceed to the next level or handle accordingly
        if (sequence.length === 0) {
            // Sequence completed, move to the next level
            level++;
            $("h2").text("Level " + level);
            playLevel(level);
        }
    } else {
        // Incorrect color! End the game or show an error message
        // You can customize this part based on your game logic
        alert("Oops! Wrong color. Game over!");
        // Reset game state if needed
        gameStarted = false;
        level = 0;
        sequence = [];
        $('h1').html('Simon Says Game');
        $("h2").text("Press any key to start");
    }
}
