var GameController = function($scope) {
	
	$scope.cells= ['', '', '', '', '', '', '', '', ''];
	var sepArray= [];
	// Generates a random number between 1 and 2 decide who goes first
	var isXturn = Math.floor((Math.random()*2)+1);
		// setting
		if (isXturn == 1) {
			$scope.playerStart = "'X' Starts!";
		} else {
			$scope.playerStart = "'O' Starts!";
		}
	
	var moves = 0;


	
	$scope.playerTurn = function(index) {
		if (isXturn == 1) {
			if ($scope.cells[index] === '') {
				sepArray[index] = 1;
				console.log(sepArray);
				console.log("Index" + index);
				$scope.cells[index] = 'X';//x
				$scope.playerNum = "Player 1";
				maxMoves();
				winOrLose();
				isXturn++;
			} else {
				alert("Please Choose Another box.");
			}
		} else if (isXturn == 2) {
			if ($scope.cells[index] === '') {
				sepArray[index] = 2;
				console.log(sepArray);
				$scope.cells[index] = 'O';
				$scope.playerNum = "Player 2";
				maxMoves();
				winOrLose();
				isXturn--;
		} else {
				alert("Please Choose Another box.");
			}
		}
	};

	var maxMoves = function() {
		if (moves < 9) {
			moves++;
			console.log(moves);
		} else {
			$scope.end = ("Game Over");
		}
	};
	var winOrLose = function() {
		if (moves > 5) {
		var winningNum = [sepArray[0] + sepArray[1] + sepArray[2], sepArray[3] + sepArray[4] + sepArray[5], sepArray[6] + sepArray[7] + sepArray[8]];
			for (var i = 0; i < winningNum.length; i++) {
				if (winningNum[i] === 3) {
					$scope.whoWins = "Player 1 Wins";
					window.setTimeout(reset(), 1000);
				} else if (winningNum[i] === 6) {
					$scope.whoWins = "Player 2 Wins";
					window.setTimeout(reset(), 1000);
				} else if (moves == 9 && winningNum[i] !== 3 && winningNum[i] !== 6) {
					$scope.whoWins = "Its a tie";
					window.setTimeout(reset(), 1000);
				}
			}
		var winningNum2 = [sepArray[0] + sepArray[3] + sepArray[6], sepArray[1] + sepArray[4] + sepArray[7], sepArray[2] + sepArray[5] + sepArray[8]];
			for (var i = 0; i < winningNum2.length; i++) {
				if (winningNum2[i] === 3) {
					$scope.whoWins = "Player 1 Wins";
					window.setTimeout(reset(), 1000);
				} else if (winningNum2[i] === 6) {
					$scope.whoWins="Player 2 Wins";
					window.setTimeout(reset(), 1000);
				} else if (moves == 9 && winningNum2[i] !== 3 && winningNum2[i] !== 6) {
					$scope.whoWins = "Its a tie"; 

					window.setTimeout(reset(), 1000);
				}
			}
		var winningNum3 = [sepArray[0] + sepArray[4] + sepArray[8], sepArray[2] + sepArray[4] + sepArray[6]];
			for (var i = 0; i < winningNum3.length; i++) {
				if (winningNum3[i] === 3) {
					$scope.whoWins = "Player 1 Wins";
					window.setTimeout(reset(), 1000);
				} else if (winningNum3[i] === 6) {
					$scope.whoWins = "Player 2 Wins";
					window.setTimeout(reset(), 1000);
				} else if (moves == 9 && winningNum3[i] !== 3 && winningNum3[i] !== 6) {
					$scope.whoWins = "Its a tie";
	
					window.setTimeout(reset(), 1000);
				}
			}
		}

		};

		
		$scope.spaceCharNum = '';
		$scope.updates = -1;

		var onKeyPress = function($scope) {
			console.log('key pressed');
			// if ($event.keyCode == 32) {
			// 	console.log($scope.updates);
			// 	$scope.updates++;
			// } else {
			// 	$scope.spaceCharNum;	// }
		};

		$scope.oneScore = 0;
		$scope.twoScore = 0;
		
		function reset() {
			if ($scope.whoWins == "Player 1 Wins") {
				$scope.oneScore++;
			}	else if ($scope.whoWins == "Player 2 Wins") {
				$scope.twoScore++;
			}
			$scope.cells= ['', '', '', '', '', '', '', '', ''];
			sepArray= [];
			moves = 0;
			var isXturn = Math.floor((Math.random()*2)+1);
				if (isXturn == 1) {
					$scope.playerStart = "'X' Starts!";
				} else {
					$scope.playerStart = "'O' Starts!";
				}
		}
};
	

