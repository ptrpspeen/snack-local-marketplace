import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>My App</Text>
      <Text style={styles.subtitle}>Ready for your idea.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f5f6fa' },
  title: { fontSize: 28, fontWeight: '700', color: '#182238' },
  subtitle: { marginTop: 12, fontSize: 16, color: '#526079' },
});
