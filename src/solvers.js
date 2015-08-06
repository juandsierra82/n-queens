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

//   var i = 0;
//   while(i < n){ //checks unique piece movements
//   var row = 0; 
//   debugger
//   while (row<n){  //checks until it reaches end of board up to down
//     var col = i //checks unique piece movement
//     while( col<n){ //checks until reaches end of board left to right
//       if(board.hasColConflictAt(col)){
//         debugger; //checks col conflict
//         col++; // if col conflict move
//       }
//       else{
//         makePiece(row, col); //else place piece
//         row++; //row can be discarded row is increased
//       }    
//       col++; //col can be increased
//     }
//     row++; //row can be increased
//   }
//   solutionCount++; //solution found
//   i++; //go to the next unique piece movement
// }
    //  row[colIndex] = 1
  
    // if(!board.hasAnyRowConflicts()){ 
    //   // matrix[rowIndex][colIndex] = 0; // col if there is a conflict reset position 
    //   // colIndex++;
    //  if(rowIndex <(n-1))
    //   checkPiece(rowIndex, colIndex + 1);     
    // } 
    // else{
    //   checkPiece(rowIndex, colIndex +1);
    // }                                
    // if(board.hasRowConflictAt(rowIndex)) {//row if there is a conflict reset
    //   // matrix[rowIndex][colIndex] = 0;
    //   // rowIndex++;
    //   // checkPiece()
    //   debugger;
    //   checkPiece(rowIndex + 1, 0);
    // }



  // // var count = checkPiece(0, 0); code comment should say how

  // var counts = board.map(0, 0, function (row, col) {
  //   return checkPiece(rowIndex, colIndex);})
  //   // return "Row " + row + " Col " + col
  
   
window.findNRooksSolution = function(n) {
  var matrix = makeEmptyMatrix(n);//makes matrix
  var board = new Board(matrix);
  var makePiece = function(row, column){
  matrix[row][column] = 1;
  }
  for (var row = 0; row<n; row++){
    for(var col = 0; col<n; col++){
      if(board.hasColConflictAt(col)){
        col++;
      }
      else{
        makePiece(row, col);
        row++;
      }    
    }
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return matrix;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var board = new Board({n:n})
  
  var count = 0;
  function checkPiece(row, col, board){
 
 
    if(row >= n || col >= n){count ++; 

      return 
    }
    
    for(var row = 0; row < n && col <n; row++){
      
      board.togglePiece(row, col);
      if(!board.hasAnyRooksConflicts()){   
        
        checkPiece(row, col+1, board);
      }   
      
      board.togglePiece(row, col);
    } 
  }
  
  var result = checkPiece(0, 0, board);

  console.log(JSON.stringify(board))

  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

 var matrix = makeEmptyMatrix(n);//makes matrix
  var board = new Board(matrix);
  var makePiece = function(row, column){
  matrix[row][column] = 1;
  }
  for (var row = 0; row<n; row++){
    for(var col = 0; col<n; col++){
      if(board.hasColConflictAt(col)){
        col++;
      }
      else{
        makePiece(row, col);
        row++;
      }    
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(matrix));
  return matrix;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
      
  var board = new Board({n:n})
  
  var count = 0;
  function checkPiece(row, col, board){
 
 
    if(row >= n || col >= n){count ++; 
      return 
    }
    
    for(var row = 0; row < n && col <n; row++){
      
      board.togglePiece(row, col);
      
      if(!board.hasAnyQueensConflicts()){   
        
        checkPiece(row, col+1, board);
      }         
      board.togglePiece(row, col);
    } 
  }  
  var result = checkPiece(0, 0, board);
  console.log(JSON.stringify(board))
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};


