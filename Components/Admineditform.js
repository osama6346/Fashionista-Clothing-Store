import * as React from 'react';
import { auth, db } from '../firebase';
import {ref, set, push, update} from 'firebase/database';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import database from '@react-native-firebase/database';
export default function Admineditform({navigation, route}) {
  const [name, setname] = React.useState(route.params.item.Name)
  const [price, setprice] = React.useState(route.params.item.Price)
  const [color, setcolor] = React.useState(route.params.item.Color)
  const [quantity, setquantity] = React.useState(route.params.item.Quantity)
  const [category, setcategory] = React.useState(route.params.item.Category)
  const [desc, setdesc] = React.useState(route.params.item.Description)

 

 function editItem() {
    update(ref(db, 'products/'+route.params.item.key), {
      Name: name,
      Price: price,
      Color : color,
      Quantity: quantity,
      Category: category,
      imageurl: route.params.item.imageurl,
      Description: desc
    });
    Alert.alert("Item Updated Succesfully")
    navigation.navigate("AdminDashboard")
  }
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Ionicons
                style={{marginLeft: 10, marginTop: 2}}
                name="menu"
                size={35}
                color="red"
              />
            </TouchableOpacity>
            <Text style={styles.fashionista}>Admin Dashboard</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text style={styles.search}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft: 15}}>
            {route.params.gender}
          </Text>
        </View>

        <View style={{backgroundColor: '#E5E5E5', marginTop: 20}}>
          
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
                Name:
              </Text>
              <TextInput
                placeholder="Ripped Denim "
                value={name}
                onChangeText={setname}
                style={{
                  width: '50%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginLeft: 5
                }}
              />
            </View>
          

          <View style={{flexDirection: 'row', margin: 10, marginTop: 30}}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
              Price:
            </Text>
            <TextInput
            value={price}
            onChangeText={setprice}
              placeholder="2000"
              style={{
                width: '40%',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{flexDirection: 'row', margin: 10, marginTop: 30}}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
              Image URL :
            </Text>
            <TextInput
              placeholder="https://...."
              style={{
                width: '60%',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{flexDirection: 'row', margin: 10, marginTop: 30}}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
              Color:
            </Text>
            <TextInput
            value={color}
            onChangeText={setcolor}
              placeholder="Red"
              style={{
                width: '40%',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{flexDirection: 'row', margin: 10, marginTop: 30}}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
              Quantity:
            </Text>
            <TextInput
            value={quantity}
            onChangeText={setquantity}
              placeholder="2"
              style={{
                width: '30%',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{flexDirection: 'row', margin: 10, marginTop: 30}}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
              Category:
            </Text>
            <TextInput
            value={category}
            onChangeText={setcategory}
              placeholder="Shirts"
              style={{
                width: '60%',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
              }}
            />
          </View>
          

          <View
            style={{
              flexDirection: 'row',
              margin: 10,
              marginTop: 30,
              marginBottom: 30,
            }}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
              Description:
            </Text>
            <TextInput
            value={desc}
            onChangeText={setdesc}
              placeholder="Shirt is oversized"
              style={{
                width: '65%',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            margin: 10,
            marginTop: 30,
            marginLeft: 250,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:10
          }}
          onPress={editItem}
          disabled={name <2 || price < 2 || color < 2 || quantity < 1 || category < 3 }
          >
          <Text style={{fontSize: 20, fontWeight: '', color: 'white'}}>
            Edit
          </Text>
        </TouchableOpacity>
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
  cart: {
    marginTop: 5,
    marginRight: 10,
  },
});
