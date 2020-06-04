/****************************************************************************************************
 * Author: Arman Kabir
 * Instructor: Melissa Lynch
 * CSCI 39547: Projects in CSCI
 * Assignment 2
 * Recreate 10-12 of the functions listed in the document. 
 * (forEach(), map(), filter(), some() AKA any(), every(), reduce(), 
 * includes(), indexOf(), push(), lastIndexOf(), Object.keys(), Object.values()).
***************************************************************************************************/

/**
 * myEach() Function
 * @param arr : An array taken in that will have each of its elements adjusted
 * @param callback : function that will be executed on each element of arr
 **/
function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }//end for

} //end myEach() function

/**
 * myMap() Function
 * @param arr: Array that will have each element called back
 * @param callback: callback function that will be executed on each element
 * @return returnArr: array that holds the original array with each element adjusted by the callback function
 */
function myMap(arr, callback){
    let returnArr = [];

      //each element of returnArr takes the value of the original array 
    //from the sanme index, after the callback function has adjusted the value
    for(let i = 0; i < arr.length; i++){
       returnArr[i] = callback(arr[i]);
    }//end for 

    return returnArr;
} //end myMap() functoin

/**
 * myFilter() Function
 * @param arr: Array that will have each element called back
 * @param callback: callback function that will be executed on each element, returns a bool, that is checked for filtering
 * @return filterArr: array that holds the filtered arr
 */
function myFilter(arr, callback){
    let filterArr = [];

    for(let i = 0; i < arr.length; i++){
        //iterator for the array the array holding filtered elements
       let filterItt = 0;
       if(callback(arr[i])){
           filterArr[filterItt] = arr[i];
           filterItt++;
       }//end if
    }//end for

    return filterArr;
}//end MyFilter() function


/**
 * mySome() Function
 * @param arr: Array that will have each element called back
 * @param callback: callback function that will be executed on each element, returns a bool
 * @return returnVal: boolean that is true if the callback function returns true
 */
function mySome(arr, callback){
    let returnVal = false;
    for(let i = 0; i < arr.length; i++){
       if(callback(arr[i])){
           returnVal = true;
           //exit function since at least one value found true
           return returnVal;
       }//end if
    }//end for

    //will be false since function has not returned a value yet if it reaches this point
    return returnVal;

} //End mySome() Function

/**
 * myEvery() Function
 * @param arr: Array that will have each element called back
 * @param callback: callback function that will be executed on each element, returns a bool
 * @return returnVal: boolean that stays true if every value is true for the callback function
 */
function myEvery(arr, callback){
    let returnVal = true;
    for(let i = 0; i < arr.length; i++){
        //Checking if false 
       if(!callback(arr[i])){
           returnVal = false;
           return returnVal;
       }//end if
    }//end for
    
    //returnVal will remain true if function reaches this point
    return returnVal;

} //End myEvery() Function

/**
 * myReduce() Function
 * @param arr: Array that will have each element called back
 * @param callback: callback function that will be executed on each element, returns a bool
 * @return reducedVal : value that has been reduced by callback function
 */
function myReduce(arr, callback){
    let reducedVal;
    for(let i = 0; i < arr.length; i++){
       reducedVal += callback(arr[i]);
    }//end for
    return reducedVal;
} //End myReduce() Function

/**
 * myIncludes() Function
 * @param arr: Array that will have each element checked
 * @param  element: value the function is checking for
 * @return check : boolean that is true if element is found
 */
function myIncludes(arr, element){
    let check = false;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] = element){
           check = true;
           return check;
       }//end if 
    }//end for
    //element was not found if function reaches this point. Will return false
    return check;
} //End myIncludes() Function

/**
 * myIndexOf() Function
 * @param arr: Array that will have each element checked
 * @param  element: value the function is checking for
 * @return returns index of the element in the array. returns -1 if element is not found
 */
function myIndexOf(arr, element){
    for(let i = 0; i < arr.length; i++){
       if(arr[i] = element){
           return i;
       }//end if 
    }//end for

    //element was not found if function reaches this point. Will return -1
    return -1;
} //End myIndexOf() Function

/**
 * myPush() Function
 * @param arr: Array of elements
 * @param  elementToAdd: value that will be appended to the end of the array
 * @return arr: array with elementToAdd appended
 */
function myPush(arr, elementToAdd){
    arr[arr.length] = elementToAdd;
    return arr;
}// end myPush() function

/**
 * myIndexOf() Function
 * @param arr: Array that will have each element checked
 * @param  element: value the function is checking for
 * @return index:  last index of the element in the array. returns -1 if element is not found
 */
function myLastIndexOf(arr, element){
    let index = -1;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] = element){
           index = i;
       }//end if 
    }//end for
    //if element was not found, index will = -1
    return index
} //End myLastIndexOf() Function

/**
 * grabKeys() Function
 * @param  myObject: objext keys is being extracted from
 * @return returnArr:  array holding keys of the object
 */
function grabKeys(myObject){
    let returnArr = [];
    for(i in myObject){
        returnArr.push(i);
    }//end for
    return returnArr;
}//end grabKeys() function

/**
 * grabValues() Function
 * @param  myObject: objext values is being extracted from
 * @return returnArr:  array holding each value of the object
 */
function grabValues(myObject){
    let returnArr = [];
    for(i in myObject){
        returnArr.push(myObject[i]);
    }//end for
    return returnArr;
}//end grabValues() function
