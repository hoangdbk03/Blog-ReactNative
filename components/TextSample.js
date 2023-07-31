import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextSample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.capitalLetter}>
            L
        </Text>

        <Text>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text>
            Ut enim ad <Text style={styles.wordBold}>minim </Text>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>

        <Text style={styles.italicText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>

        <Text style={styles.textShadow}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
    
      </Text>
    </View>
  )
}

export default TextSample

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
        padding: 20
    },
    text: {
        color: '#41cdf4'
    },
    capitalLetter: {
        color: 'red',
        fontSize: 20
    },
    wordBold: {
        fontWeight: 'bold',
        color: 'black'
    },
    italicText: {
        color: '#37859b',
        fontStyle: 'italic'
    },
    textShadow: {
        textShadowColor: 'red',
        textShadowOffset: {width:2, height:2},
        textShadowRadius: 5
    }
})