import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <Text
        style={{
          color: colors.white,
          fontWeight: 'bold',
        }}>
        We have not focus on anything yet!
      </Text>
    );
  }
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.white,
          fontWeight: 'bold',
        }}>
        Things we have focus on :
      </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  item: {
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
