import { FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/actionType';
import axios  from "axios";


export  function fetchProducts() {

  return (dispatch)  => {
    dispatch(getProducts())

     axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
          
            return(dispatch(getProductsSuccess((response.data))))
        })
        .catch(err => dispatch(getProductsFailure(err)))
}

}

function getProducts() {

    return {
        type: FETCHING_PRODUCTS
    }
}

function getProductsSuccess(data) {
console.log(data)
  return {
      type: FETCH_PRODUCTS_SUCCESS,
      data
  }
}

function getProductsFailure(err) {
  return {
      type: FETCH_PRODUCTS_FAILURE
  }
}

