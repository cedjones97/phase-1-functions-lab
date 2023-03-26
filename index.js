// Code your solution in this file!

  distanceFromHqInBlocks = function(someValue){
   let blocks = 42

   if (someValue > 42){

    return someValue - blocks

   }
   else{
    return blocks - someValue
   }
    
    
}


function distanceFromHqInFeet(someValue){
    let blocks = distanceFromHqInBlocks(someValue)

     let distanceFromHqInFeet = 264

     

     return distanceFromHqInFeet * blocks


     }
 

function distanceTravelledInFeet(start, destination){

if (destination > start){

return (destination - start) * 264

} else{ 
  
  return (start - destination) * 264
}
  
}


//console.log(distanceTravelledInFeet(44, 58))
//console.log(distanceTravelledInFeet(70, 48))



 function calculatesFarePrice(start, destination){

  if (distanceTravelledInFeet(start, destination) < 400){

    return (start - destination) * 0

  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){

    return (start - destination) * 2.56 / 2

  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){

    return 25

  } else{

    return "cannot travel that far"
  }
  

    
  }







