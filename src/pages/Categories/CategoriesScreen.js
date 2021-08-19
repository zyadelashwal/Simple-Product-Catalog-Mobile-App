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
      ProdectsData:[],
      SelectedCategory:'all',
      isLoading:false
    }
  }

  async componentDidMount(){
   await this.props.fetchCategories();
   await this.props.fetchProducts();


  }
  onPressCategory = (item) => {
    this.setState({SelectedCategory:item})
    
    this.ProductsFilter();
  };

  onPressProduct = (item) => {
      this.props.navigation.navigate('Product', { PrdudctItem:item });
  };

   ProductsFilter() {
    if(this.state.SelectedCategory=="all")
    {
      this.setState({ProdectsData:this.props.Products})

    }else
    {
      const result = this.props.Products.filter(item => item.category == this.state.SelectedCategory);
      this.setState({ProdectsData:result})

    }
    
  }

  renderCategory = ({ item }) => (
    <TouchableOpacity 
     onPress={() => this.onPressCategory(item)}>
      <View style={[styles.categoriesItemContainer,{backgroundColor:this.state.SelectedCategory===item?'orange':"white"}]}>
        <Text style={styles.categoriesName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  renderProducts = ({ item }) => (
    <TouchableOpacity 
     onPress={() => this.onPressProduct(item)}>
      <View style={[styles.productItemContainer,
        {backgroundColor:'white',
        width:(windowWidth/2)-20
        }]}>

        <Image style={[styles.categoriesPhoto,{width:(windowWidth/2)-20,height:110}]} resizeMode={'center'}  source={{ uri: item.image }} />

       <TouchableOpacity style={{borderRadius:"100%",width:50,height:50,backgroundColor:"white",left:(windowWidth/4)-20}}>
       <Icon 
           size={5} as={<FontAwesome5 name="heart" />} color="black" />
       </TouchableOpacity>
       
        </View>
        <View>
            <Text style={styles.categoriesName} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.categoriesName}>{item.price} $</Text>
        </View>
       
    </TouchableOpacity>
  );

  render() {
    (this.props.Products.length>0&&this.state.ProdectsData.length==0)&& await this.setState({ProdectsData:this.props.Products })

    return (
      <NativeBaseProvider>

      <View>
          <FlatList
            horizontal={true}
            data={this.props.Categories}
            renderItem={this.renderCategory}
            keyExtractor={item => `${item}`}
          />
        </View>
        
        <View>{
          this.state.ProdectsData.length>0&&
            <Text>{this.state.ProdectsData.length} Items</Text>
}
        </View>
        <View>
         
            <FlatList
          
            data={this.state.ProdectsData}
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
