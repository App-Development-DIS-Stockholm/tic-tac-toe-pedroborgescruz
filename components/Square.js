import { Pressable, Text, StyleSheet } from 'react-native';

export default function Square({ value, onPress }) {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'black',
  },
});

