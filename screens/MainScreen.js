import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Обратите внимание на библиотеку иконок

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главный экран</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChatScreen')}
      >
        <Icon name="chatbubble-outline" size={40} color="#4F8EF7" />
        <Text style={styles.buttonText}>Сообщения</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ContactScreen')}
      >
        <Icon name="person-outline" size={40} color="#4F8EF7" />
        <Text style={styles.buttonText}>Контакты</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MainScreen;
