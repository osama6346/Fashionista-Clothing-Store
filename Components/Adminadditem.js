import * as React from 'react';
import { auth, db } from '../firebase';
import {ref, set, push} from 'firebase/database';
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
export default function Adminadditem({navigation, route}) {
  const [name, setname] = React.useState("")
  const [price, setprice] = React.useState("")
  const [color, setcolor] = React.useState("")
  const [quantity, setquantity] = React.useState("")
  const [category, setcategory] = React.useState("")
  const [desc, setdesc] = React.useState("")
  const [imageUri, setimageUri] = React.useState()

  let images = ['https://media.istockphoto.com/id/955641488/photo/clothes-shop-costume-dress-fashion-store-style-concept.jpg?s=612x612&w=0&k=20&c=ZouECh5-XOCuBzvKBQfxgyw0RIGEUg9u5F0sJiZV86s=', 
'https://www.thenews.com.pk/assets/uploads/magazine/2020-05-17/659735_124514_updates.jpg', 'http://static1.squarespace.com/static/547a3834e4b053a861c4874e/t/63911cbdd8a7c8026f414301/1670454464448/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Eco+Friendly+Baby+Clothing+%7C+Organic+Baby+Clothes.jpg?format=1500w',
'https://media.gettyimages.com/id/1213015649/photo/clothes-hanging-in-the-wardrobe.jpg?s=612x612&w=gi&k=20&c=pssjrFbmEnEbA2PbpNweXwoKHViccMrFa5LGJ8GRiS0=',
'https://thumbs.dreamstime.com/b/blue-jeans-isolated-white-34440719.jpg', 'https://www.fashionoutlet.pk/wp-content/uploads/2020/02/DIESEL-jeans-32-1024x838-1.jpg',
'https://imgur.com/DbmogVm.jpg']

  function addItem() {
    push(ref(db, 'products'), {
      Name: name,
      Price: price,
      Color : color,
      Quantity: quantity,
      Category: category,
      imageurl:  imageUri,
      Gender: route.params.gender,
      Description: desc
    });
    Alert.alert("Item Added Succesfully")
    navigation.navigate("AdminDashboard")
  }
  let options={
    saveToPhotos:true,
    mediaType:'photo',
  };

  const openGallery= async ()=>{
    const result = await launchImageLibrary(options);
  //  console.log(result.assets[0].uri);
    setimageUri(result.assets[0].uri);
  };
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
              <TouchableOpacity onPress={openGallery}>
              <Ionicons
                style={{marginLeft: 10, marginTop: 2}}
                name="image-outline"
                size={35}
                color="red"
              />
              </TouchableOpacity>
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
          onPress={addItem}
          disabled={name <2 || price < 2 || color < 2 || quantity < 1 || category < 3 }
          >
          <Text style={{fontSize: 20, fontWeight: '', color: 'white'}}>
            Save
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
