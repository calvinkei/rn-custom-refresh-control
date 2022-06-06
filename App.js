import React from "react";
import * as Progress from "react-native-progress";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  RefreshControl,
} from "react-native";

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(i) => i}
        refreshControl={
          <RefreshControl
            tintColor="transparent"
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 3000);
            }}
          />
        }
        ListHeaderComponent={
          <View style={styles.progress}>
            <Progress.Circle size={30} indeterminate />
          </View>
        }
        renderItem={({ item }) => (
          <Text style={styles.text}>{`Item ${item}`}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progress: {
    alignItems: "center",
    marginTop: -30,
  },
  text: {
    padding: 15,
  },
});
