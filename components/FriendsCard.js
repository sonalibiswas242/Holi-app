import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Modal, Animated } from 'react-native';
import friends from '../data/friends.js';
import { Audio } from 'expo-av';

const FriendsCard = () => {
  const FriendsData = friends;
  const [showModal, setShowModal] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [sound, setSound] = useState();

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(require('../components/flowervoice.mp3'));
      setSound(sound);
    }
    loadSound();
  }, []);

  const handlePoke = async () => {
    setShowModal(true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => {
      setShowModal(false);
      fadeAnim.setValue(1);
    });
  
    if (sound) {
      await sound.setPositionAsync(0);
      await sound.playAsync();
    }
  };
  


  return (
    <ScrollView>
      {FriendsData.map((friend, key) => (
        <View style={{ alignItems: "center", justifyContent: "center", margin: 10 }} key={key}>

          <View style={{ width: "99%", height: 120, backgroundColor: "#e9ff70" , borderRadius:10, borderColor:"#ffd670", borderWidth:2}}>

            <View style={{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden', top: 10, left: 10 }}>
              <Image style={{ width: "100%", height: "100%", resizeMode: "cover" }} source={{ uri: friend.image }} />
            </View>

            <Text style={{ position: "absolute", color: "black", fontSize: 20, fontWeight: "bold", left: 125, top: 40 }}>{friend.name}</Text>

            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#9e2a2b", padding: 10, width:"30%", left:240, bottom:65, borderRadius: 6, borderColor: "#6a040f", borderWidth: 2 }} onPress={handlePoke}>
              <Text style={{textAlign: "center", color:"white", fontSize: 15, fontWeight: "700"}}>Poke</Text>
            </TouchableOpacity>

            <Modal transparent={true} visible={showModal}>
              <View style={{backgroundColor: 'rgba(0,0,0,0.2)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Animated.View style={{ opacity: fadeAnim }}>
                  <View >
                    <Image style={{height:200, width:400, marginBottom: 20, marginLeft: 70}} source={require('../images/Flower.png')}/>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 20, marginLeft:80 }}>You Have Poked Your Friend !</Text>
                  </View>
                </Animated.View>
              </View> 
            </Modal>
            
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default FriendsCard
