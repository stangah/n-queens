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
  if (n === 0){
    return 1;
  }
  var board = new Board(makeEmptyMatrix(n));
  var solutionCount = 0;
  var recurse = function(r) {
    r = r || 0;
    for (var c = 0; c < n; c ++) {
      board.togglePiece(r, c);
      if (board.hasAnyRookConflictOn(r, c)) {
        board.togglePiece(r, c);
      } else {
        if (r === n - 1) {
          solutionCount ++;
          board.togglePiece(r, c);
          return;
        }
        recurse(r+1);
        board.togglePiece(r, c);
      }
    }
    // }
  };
  recurse();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



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
  if (n === 0){
    return 1;
  }
  var board = new Board(makeEmptyMatrix(n));
  var solutionCount = 0;
  var recurse = function(r) {
    r = r || 0;
    // c = c || 0;
    //Create solutions and increment solutionCount
    // if (rooks === n && !board.hasAnyRooksConflicts()){
    //   solutionCount ++;
    // }
  // for (i = r; i < n; i ++) {
    for (var c = 0; c < n; c ++) {
      board.togglePiece(r, c);
      if (board.hasAnyQueenConflictsOn(r, c)) {
        board.togglePiece(r, c);
      } else {
        if (r === n - 1) {
          solutionCount ++;
          board.togglePiece(r, c);
          return;
        }
        recurse(r+1);
        board.togglePiece(r, c);
      }
    }
    // }
  };
  recurse();
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.makeEmptyMatrix = function(n){
  return _(_.range(n)).map(function(){
    return _(_.range(n)).map(function(){
      return 0;
    });
  });
};
