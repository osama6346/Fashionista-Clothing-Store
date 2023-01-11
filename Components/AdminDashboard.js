import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Admindash({navigation}) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Ionicons
                style={{ marginLeft: 10, marginTop: 6 }}
                name="menu"
                size={35}
                color="red"
              />
            </TouchableOpacity>
            <Text style={styles.fashionista}>Admin Dashboard</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={styles.search}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 15 }}>
            Inventory
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop: 10, marginLeft: 15 }}>
          <View>
            <Image
              style={{ height: 200, width: '100%', }}
              source={require('../assets/pexels.jpg')}
            />

            <View style={{ flexDirection: 'row',  }}>
              <Text style={{ marginRight: 50, fontSize: 20 }}>MEN</Text>
              <View style={{marginLeft:-15}}>
                <TouchableOpacity style={{ marginRight: 13 }}
                onPress={()=>{
                  navigation.navigate("Adminedititem", {
                    gender: "Men"
                  })
                }}>
                  <Text style={{ color: 'red', fontSize: 20 }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("Adminadditem", {
                    gender: "Men"
                  })
                }}>
                  <Text style={{ color: 'red', fontSize: 20, paddingTop: 5 }}>
                    Add
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{
                  navigation.navigate("Admindeleteitem", {
                    gender: "Men"
                  })
                }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 20,
                      paddingTop: 5,
                      marginLeft: -17,
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Image
              style={{ height: 200, width: "100%", marginRight: 15 }}
              source={require('../assets/pexel5.jpg')}
            />

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 50, fontSize: 20 }}>KIDS</Text>
              <View style={{marginLeft:-15}}>
                <TouchableOpacity style={{ marginRight: 13 }} 
                 onPress={()=>{
                  navigation.navigate("Adminedititem", {
                    gender: "Kids"
                  })
                }}>
                  <Text style={{ color: 'red', fontSize: 20 }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("Adminadditem", {
                    gender: "Kids"
                  })
                }}>
                  <Text style={{ color: 'red', fontSize: 20, paddingTop: 5 }}>
                    Add
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{
                  navigation.navigate("Admindeleteitem", {
                    gender: "Kids"
                  })
                }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 20,
                      paddingTop: 5,
                      marginLeft: -17,
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
          <View>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require('../assets/black.jpg')}
            />

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 20, fontSize: 20 }}>WOMEN</Text>
              <View style={{marginLeft:-15}}>
                <TouchableOpacity style={{ marginRight: 13 }}
                 onPress={()=>{
                  navigation.navigate("Adminedititem", {
                    gender: "Women"
                  })
                }}
                >
                  <Text style={{ color: 'red', fontSize: 20 }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("Adminadditem", {
                    gender: "Women"
                  })
                }}>
                  <Text style={{ color: 'red', fontSize: 20, paddingTop: 5 }}>
                    Add
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{
                  navigation.navigate("Admindeleteitem", {
                    gender: "Women"
                  })
                }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 20,
                      paddingTop: 5,
                      marginLeft: -17,
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>

        

        

        

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 15 }}>
            Orders
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop: 10, marginLeft: 15 }}>
          <TouchableOpacity>
            <Ionicons
              style={{ marginLeft: 10, marginRight: 15 }}
              name="checkmark-done-circle-outline"
              size={100}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ marginLeft: 10, marginRight: 15 }}
              name="timer-outline"
              size={100}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ marginLeft: 10 }}
              name="cube-outline"
              size={100}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent:'space-evenly' ,marginTop: 10,  }}>
          <Text style={{ }}>Completed</Text>
          <Text style={{  }}>Pending</Text>
          <Text>Exchange</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 15 }}>
            Suppliers
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop: 10, marginLeft: 15 }}>
          <TouchableOpacity>
            <Ionicons
              style={{}}
              name="body-outline"
              size={100}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{  }}
              name="cart-outline"
              size={100}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ }}
              name="cash-outline"
              size={100}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fashionista: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
    marginTop: 8,
  },
  search: {
    fontSize: 15,
    fontWeight: '',
    color: 'red',
    marginRight: 10,
    marginTop: 15,
  },
});
