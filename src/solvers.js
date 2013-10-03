/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var board = new Board(makeEmptyMatrix(n));
  for (var r = 0; r < n; r ++) {
    for (var c = 0; c < n; c ++) {
      board.togglePiece(r, c);
      if (board.hasAnyRookConflictOn(r, c)) {
        board.togglePiece(r, c);
        continue;
      } else {
        break;
      }
    }
  }
  var solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = 0;
  if (n === 0){
    return 1;
  };
  var recurse = function(board) {
    board = board || [];
    if (board.length === n) {
      solutionCount ++;
      return;
    }
    for (var i = 0; i < n; i++) {
      var checkBoard = board.concat(i);
      if (!rookBoardConflict(checkBoard)) {
        recurse(checkBoard);
      } else {
        continue;
      }
    }
  }
  recurse();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

var rookBoardConflict = function(board) {
  if (_(board).uniq().length !== board.length) {
    return true;
  }

  return false;
}


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var board = new Board(makeEmptyMatrix(n));
  for (var r = 0; r < n; r ++) {
    for (var c = 0; c < n; c ++) {
      board.togglePiece(r, c);
      if (board.hasAnyQueenConflictsOn(r, c)) {
        board.togglePiece(r, c);
        continue;
      } else {
        break;
      }
    }
  }
  var solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = 0;
  if (n === 0){
    return 1;
  };
  var recurse = function(board) {
    board = board || [];
    if (board.length === n) {
      solutionCount ++;
      return;
    }
    for (var i = 0; i < n; i++) {
      var checkBoard = board.concat(i);
      if (!queenBoardConflict(checkBoard)) {
        recurse(checkBoard);
      } else {
        continue;
      }
    }
  }
  recurse();
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

var queenBoardConflict = function(board) {
  if (_(board).uniq().length !== board.length) {
    return true;
  }

  for (var i = 0; i < board.length; i ++) {
    for (var j = i + 1; j < board.length; j++) {
      if (Math.abs(board[i] - board[j]) === j - i) {
        return true;
      }
    }
  }

  return false;
}

window.makeEmptyMatrix = function(n){
  return _(_.range(n)).map(function(){
    return _(_.range(n)).map(function(){
      return 0;
    });
  });
};
