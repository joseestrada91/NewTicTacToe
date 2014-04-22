var GameController = function($scope) {
	
	$scope.cells= ['', '', '', '', '', '', '', '', ''];
	var sepArray= [];
	var player = 1;
	// $scope.isXturn = 1;
	var isXturn = 1;
	var moves = 0;

	$scope.playerTurn = function(index) {
		if (isXturn == 1) {
			if ($scope.cells[index] === '') {
				sepArray[index] = 1;
				console.log(sepArray);
				console.log("Index" + index);
				$scope.cells[index] = 'X';//x
				$scope.playerNum = "Player 1";
				isXturn++;
				maxMoves();
			} else {
				alert("Please Choose Another box.");
			}
		} else if (isXturn === 2) {   
			if ($scope.cells[index] === '') {
				sepArray[index] = 2;
				console.log(sepArray);
				$scope.cells[index] = 'O';
				$scope.playerNum = "Player 2";
				isXturn--;
				maxMoves();
		} else {
				alert("Please Choose Another box.");
			}
		}
	};
	var maxMoves = function() {
		if (moves < 8) {
			moves++;
			console.log(moves);
			winOrLose();

		} else {
			winOrLose();
			console.log("Game Over");



		}
	};
	var winningNum = [];
	var winOrLose = function() {
		winningNum = [sepArray[0] + sepArray[1] + sepArray[2], sepArray[3] + sepArray[4] + sepArray[5], sepArray[6] + sepArray[7] + sepArray[8]];
			for (var i = 0; i < winningNum.length; i++) {
			 	winningNum[i];
				if (winningNum[i] === 3) { 
					console.log("Player 1 Wins");
				} else if (winningNum[i] === 6) {
					console.log("Player 2 Wins");
				} else {
					console.log("Its a tie");
				}
			}


		};
};
	

