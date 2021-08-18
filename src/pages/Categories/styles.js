import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
    alignContent:'center',
    paddingHorizontal:10
  },
  categoriesPhoto: {
    width: '100%',
    
   
  },
  categoriesName: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 8,
   
    
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  },
  productItemContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignContent:'center',
    paddingHorizontal:10
  }
});

export default styles;
