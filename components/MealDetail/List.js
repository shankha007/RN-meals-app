import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return (
    <View style={styles.rootContainer}>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
