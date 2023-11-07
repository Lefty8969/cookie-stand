const chill = () => {
  console.log('whats the vibe?');
  for (let i = 1; i <=10; i++){
    console.log(`chill... ${i}`);
  }
  console.log('beast');

};

//chill();





const noRemainder = (number, mod) =>{
  if (number % mod ===0){
    return true;

  }else {
    return false;
  }

};


/// arrays

const animals = ['monkey','dog', 'cat', 'koala', 'bees', 'rabbit'];
//console.log(animals[2]);

const cat = animals[2];
//console.log(cat);


for (let i = 0; i < animals.length; i++ ){
  //console.log(animals[i]);

}

// to add an index on array .push("value"); add it on last index on array
// to delete an idex item use aniamls.pop); removes last index from array




// Objects

const obj ={
  name: 'lou',
  age: '30',
  home: 'queens',
  // making this array into a function
  sayMyName: function(){
    //console.log(this.name);
  }


}
//to add new object
obj.hobby = 'boxing';
// delete object
delete obj.hobby;

//console.log(obj.age);
//console.log(obj);
//obj.sayMyName();




const map = new Map([[1, 'eat'], [3,'drink'], [4, 'sleep'], [5, 'repeat']]);
// to add a new value
map.set(6, 'wake')
// to find a vaule in the date use has method
//console.log(map.has(1))
//to delete use delete method
map.delete(3)
for(const [key,value] of map){
  //console.log(`${key}: ${value}`);

};

const is








