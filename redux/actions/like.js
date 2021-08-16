import { LIKE, UNLIKE } from '../actions/actionType';


export  function insetLike(click) {

    return (dispatch)  => {
        if(click){
            dispatch(LIKE())
            
        }else{
            dispatch(UNLIKE())
            
        }
     
  }
  
  }


function like() {

    return {
        type: LIKE
    }
}

function UNLIKE() {
  return {
      type: UNLIKE
  }
}

