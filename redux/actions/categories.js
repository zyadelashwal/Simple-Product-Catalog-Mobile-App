import { FETCHING_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions/actionType';
import axios  from "axios";


export  function fetchCategories() {

  return (dispatch)  => {
    dispatch(getCategories())

     axios.get('https://fakestoreapi.com/products/categories')
        .then(function (response) {
          
            return(dispatch(getCategoriesSuccess(["all"].concat(response.data))))
        })
        .catch(err => dispatch(getCategoriesFailure(err)))
}

}

function getCategories() {

    return {
        type: FETCHING_CATEGORIES
    }
}

function getCategoriesSuccess(data) {
console.log(data)
  return {
      type: FETCH_CATEGORIES_SUCCESS,
      data
  }
}

function getCategoriesFailure(err) {
  return {
      type: FETCH_CATEGORIES_FAILURE
  }
}

