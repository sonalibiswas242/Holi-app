import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FriendsCard from '../components/FriendsCard'

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor:"#540b0e", padding:10, height:120,width:"100%", marginTop:30, marginBottom: 10}}>
        <Text style={{color:"white", fontWeight:"bold",fontSize:20, textAlign:"center", paddingTop:10}}>Let's Play Holi !</Text>
        <Text style={{color:"white", fontWeight:"bold",fontSize:18, textAlign:"center", paddingTop:20}}>Poke Yours Friends with flower !</Text>
      </View>

      <View>
        <FriendsCard/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})