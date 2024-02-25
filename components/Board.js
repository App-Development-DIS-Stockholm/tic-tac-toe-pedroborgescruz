import { StyleSheet, View } from "react-native";
import BoardDecoration from "./BoardDecoration";
import Square from "./Square";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePressEvent(i) {
    if (squares[i] || calculateWinner(squares)) { 
      return; 
    }
    const nextSquares = squares.slice();
    if (xIsNext) { 
      nextSquares[i] = "X";
    } else { 
      nextSquares[i] = "O"; 
    }
    setSquares(nextSquares); // Update state
    setXIsNext(!xIsNext); // Toggle XIsNext
  }

  return (
    <View style={styles.board}>
      <BoardDecoration />
      <View style={styles.row}>
        <Square value={squares[0]} onPress={ () => handlePressEvent(0) }/>
        <Square value={squares[1]} onPress={ () => handlePressEvent(1) }/>
        <Square value={squares[2]} onPress={ () => handlePressEvent(2) }/>
      </View>
      <View style={styles.row}>
      <Square value={squares[3]} onPress={ () => handlePressEvent(3) }/>
      <Square value={squares[4]} onPress={ () => handlePressEvent(4) }/>
      <Square value={squares[5]} onPress={ () => handlePressEvent(5) }/>
      </View>
      <View style={styles.row}>
      <Square value={squares[6]} onPress={ () => handlePressEvent(6) }/>
      <Square value={squares[7]} onPress={ () => handlePressEvent(7) }/>
      <Square value={squares[8]} onPress={ () => handlePressEvent(8) }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: "90%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
