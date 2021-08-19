import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions 
} from 'react-native';
import { IconButton,Icon, NativeBaseProvider } from "native-base"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Product'
  };

  constructor(props) {
    super(props);
    this.state={
     
    }
  }

  async componentDidMount(){
  

  }


  render() {
   const item= this.props.route.params.PrdudctItem
    return (
      <NativeBaseProvider>
          <Text>{item.title}</Text>
          <Text>{item.price} $</Text>
        </NativeBaseProvider>
    );
  }
}


export default (ProductScreen)
