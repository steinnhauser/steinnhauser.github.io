const cols = 6;
const rows = 5;

var grid;

var canvasWidth, canvasHeight;
var cellwidth, cellheight;

var firstPlayer = "red";
var player;

function setup() {
    canvasWidth = 720;
    canvasHeight = 420;
    // put setup code here
    var myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("P5JS_container");
    
    initGrid();

    cellwidth = canvasWidth / cols;
    cellheight = canvasHeight / rows;

    player = firstPlayer;
}

function initGrid() {
    grid = []
    for (var i = 0; i < cols; i++) {
        grid.push([])
    }
}

function draw() {
    background(244);
    drawBoard();
}


function drawBoard() {

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            
            var player = grid[i][j]
            if (typeof player == "undefined") {
                fill(0); // not set.
            } else if (player == "red") {
                fill(255, 0, 0);
            } else if (player == "blue") {
                fill(0, 0, 255);
            }
            
            var xcoord = (i+0.5) * cellwidth;
            var ycoord = (j+0.5) * cellheight;

            // flip y-coord
            ycoord = canvasHeight - ycoord;

            ellipse(xcoord, ycoord, 50);
            noFill()
            rect(
                xcoord - cellwidth / 2, 
                ycoord - cellheight / 2, 
                xcoord + cellwidth / 2, 
                ycoord + cellheight / 2, 
                );
        }
    }
}


function mousePressed() {
    // Menu Screen button presses:
    if (mouseX < 0 || mouseX > canvasWidth || mouseY < 0 || mouseY > canvasHeight) {
        return;
    } else {
        var column_number = floor(mouseX / cellwidth);
        if (grid[column_number].length >= cols) {
            return;
        }

        if (player == "red") {
            grid[column_number].push("red");
            player = "blue";
        } else {
            grid[column_number].push("blue");
            player = "red";
        }
        
    }
    var winner = checkVictory();
    if (typeof winner !== "undefined") {
        alert(`Winner: ${winner}. Emptying board... `, );
        initGrid();
    }

}

function checkVictory() {
    var req = 4;
    var current_streak, current_winner;

    // verticals
    for (var i = 0; i < cols; i++) {
        if (grid[i].length < req) {
            continue;
        }

        current_winner = grid[i][0];
        current_streak = 1;
        for (var j = 1; j < grid[i].length; j++) {
            if (grid[i][j] == current_winner) {
                current_streak++;
            } else {
                current_streak = 1;
                current_winner = grid[i][j];
            }

            if (current_streak == req) {
                return current_winner;
            }
        }
    }

    for (var plcX = 0; (plcX + req) < cols; plcX++) {
        for (var plcY = 0; (plcY + req) < rows; plcY++) {
            console.log("here");
            var gridvals = [];
            for (var ctr = 0; ctr < req; ctr++) {
                gridvals.push(grid[plcX + ctr][plcY + ctr]);
            }
            var uniques = evalDiag(gridvals);
        }
    }

    // horizontals
    for (var j = 0; j < rows; j++) {
        current_winner = grid[0][j];
        current_streak = 1;
        for (var i = 1; i < cols; i++) {
            if (current_winner == grid[i][j]) {
                current_streak++;
            } else {
                current_streak = 1;
                current_winner = grid[i][j];
            }

            if ((current_streak == req) && (typeof current_winner !== "underfined")) {
                return current_winner;
            }
        }
    }

    // diagonals
    // type == /
    
// type == \
}
