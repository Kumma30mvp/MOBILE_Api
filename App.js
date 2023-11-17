import { StatusBar, Linking, ScrollView } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Gif from 'react-native-gif';
import * as Animatable from 'react-native-animatable';

export default function App() {
  const [data, setData] = useState('');
  const [urlToScan, setUrlToScan] = useState('');

  const handleScan = async () => {
    const apiUrl = 'http://192.168.1.33:4000/api/proxy';

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlToScan }),
      };

      const response = await fetch(apiUrl, requestOptions);
      const dataObject = await response.json();
      setData(dataObject);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const openResultURL = () => {
    if (data && data.result) {
      Linking.openURL(data.result);
    }
  };

  const renderResult = () => {
    if (data) {
      if (data.message && data.visibility) {
        return (
          <View style={[styles.resultContainer, { backgroundColor: 'rgba(255, 255, 255, 0.8)' }]}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{data.message}!</Text>
            <Text>{`Visibility: ${data.visibility}`}</Text>
            <Text>Link:</Text>
            <TouchableOpacity onPress={openResultURL}>
              <Text style={{ color: 'blue' }}>{data.result}</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View style={[styles.resultContainer, { backgroundColor: 'rgba(255, 255, 255, 0.8)' }]}>
            <Text>¡No podemos mostrar el análisis de esta página!</Text>
          </View>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Gif
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://tenor.com/es/view/hackerman-hacker-apple-glitch-logo-gif-15548598.gif' }}
      />

      <View style={styles.overlay}>
        <Animatable.View animation="fadeIn" duration={1000} style={styles.innerContainer}>
          <Text style={[styles.title, { marginBottom: 20 }]}>URL Scan</Text>

          <Animatable.View animation="fadeIn" duration={1000} style={[styles.inputContainer, { marginBottom: 10 }]}>
            <TextInput
              style={styles.input}
              placeholder="Insert URL to scan"
              value={urlToScan}
              onChangeText={(text) => setUrlToScan(text)}
            />
          </Animatable.View>

          <Animatable.View animation="fadeIn" duration={1000} style={[styles.buttonContainer, { marginBottom: 10 }]}>
            <TouchableOpacity style={styles.button} onPress={handleScan}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeIn" duration={1000} style={[styles.resultContainer, { marginBottom: 20 }]}>
            {renderResult()}
          </Animatable.View>

          <StatusBar style="auto" />
        </Animatable.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
