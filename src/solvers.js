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



window.findNRooksSolution = function(n) {
  //create a handler function(currentNodeAmount, currentRow, currentCol, currentBoard) -> recursion
  //iterate through the n*n board
  //store all solutions

    var solution = [];
    for(var i=0; i<n; i++){
      solution.push(Array(n).fill(0));
    }
    for (let j = 0; j < n; j++) {
      solution[j][j] = 1;  
    }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
  var results = 0;
  var board = new Board({n:n});

  var findASolution = function(startRow){

    if(startRow === n) {
      results++;
      return;
    } else {
      for(var col = 0; col < n; col++){
        board.togglePiece(startRow, col);

        if(!board.hasAnyRooksConflicts()){
          findASolution(startRow+1);
        }
        board.togglePiece(startRow,col);
      }
    }
  };

  findASolution(0);
  
  console.log('Number of solutions for ' + n + ' rooks:', results);
  return results;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n : n});
  //a function take a board and count
  var findASolution = function(row){
    //edge: row = n : return
    if(row === n){
      return;
    }else{
      for(var col = 0; col < n; col++){
        // debugger;
        board.togglePiece(row, col);
        if(!board.hasAnyQueensConflicts()){
          findASolution(row+1);
        }
        board.togglePiece(row, col);
      }
    }
  };
  findASolution(0);

  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var findASolution = function(startRow){

    if(startRow === n) {
      solutionCount++;
    } else {
      for(var col = 0; col < n; col++){
        board.togglePiece(startRow, col);

        if(!board.hasAnyQueensConflicts()){
          findASolution(startRow+1);
        }
        board.togglePiece(startRow,col);
      }
    }
  };

  findASolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
