import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions 
} from 'react-native';
import { IconButton,Icon, NativeBaseProvider } from "native-base"
import styles from './styles';
// import { categories } from '../../data/dataArrays';
 import { bindActionCreators } from 'redux';
 import { connect } from 'react-redux';
 import { fetchCategories } from '../../../redux/actions/categories';
 import { fetchProducts } from '../../../redux/actions/products';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from "@expo/vector-icons"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
    this.state={
      data:null,
      SelectedCategory:'all',
      colorSelect:false
    }
  }

  async componentDidMount(){
   await this.props.fetchCategories();
   await this.props.fetchProducts();

  }
  onPressCategory = (item) => {
    this.setState({SelectedCategory:item})
    console.log(this.state.SelectedCategory,item)
    // this.props.navigation.navigate('RecipesList', { category, title });
  };

  onPressProduct = (item) => {
    this.setState({SelectedCategory:item})
    console.log(this.state.SelectedCategory,item)
    // this.props.navigation.navigate('RecipesList', { category, title });
  };

  //  ProductsFilter(params) {
  //   return params;
  // }

  renderCategory = ({ item }) => (
    <TouchableOpacity 
     onPress={() => this.onPressCategory(item)}>
      <View style={[styles.categoriesItemContainer,
        {backgroundColor:this.state.SelectedCategory==item?'orange':false}]}>
        <Text style={styles.categoriesName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  renderProducts = ({ item }) => (
    <TouchableOpacity 
     onPress={() => this.onPressProduct(item)}>
      <View style={[styles.categoriesItemContainer,
        {backgroundColor:'white',
        width:(windowWidth/2)-20
        }]}>

        <Image style={[styles.categoriesPhoto,{width:(windowWidth/2)-20,height:110}]} resizeMode={'contain'} source={{ uri: item.image }} />
        <IconButton
          
          icon={<Icon style={{position:'absolute',right:0,bottom:2}}
           size="md" as={<FontAwesome5 name="heart" />} color="black" />}
        />
        <Text style={styles.categoriesName} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.categoriesInfo}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <NativeBaseProvider>


        <FlatList
        horizontal={true}
          data={this.props.Categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item}`}
        />
        <View>
         
            <FlatList
          
            data={this.props.Products}
            renderItem={this.renderProducts}
            numColumns={2}
            keyExtractor={item => `${item.id}`}
          /> 
        </View>
        </NativeBaseProvider>
    );
  }
}
function mapStateToProps(state) {
  return {
    Categories: state.categoriesReducer.Categories,
    Products: state.productReducers.Products
  }
}

function mapDispatchToProps(dispatch) {
  return {
      ...bindActionCreators({ fetchCategories,fetchProducts  }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)
