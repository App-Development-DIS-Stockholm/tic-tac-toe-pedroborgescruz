import { StyleSheet, View } from "react-native";
import BoardDecoration from "./BoardDecoration";

export default function Board() {
  function handlePressEvent(i) {}

  return (
    <View style={styles.board}>
      <BoardDecoration />
      <View style={styles.row}></View>
      <View style={styles.row}></View>
      <View style={styles.row}></View>
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
