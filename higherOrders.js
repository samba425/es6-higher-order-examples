 // 1) find unique count

 uniqueCount = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
 var count = {};
 uniqueCount.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
 console.log(count);

 var total = Object.values(count);
 var ss = 0;
 total.forEach(function(i) {
     ss += i;
 });

 console.log(ss)

 // 2) find n! 
 var rsult = (x) => (x * (x - 1))
 // console.log(rsult(5));



 // Higher order functions in es6 like forEach,filter,sort,reduce,map


 // 3) forEach

 companies = [
 {name: "samba",age:27},
 {name: "mani",age:25 },
 {name : "sachin",age: 45 }]

 comapnies.forEach(function(comapny,index,companies){
 	console.log(comapny);
 })


 // 4) filters

const ages = [25,89,45,78,69,58,23,65,12];
// show ages more then 23
const canDrink = ages.filter( age => age>=23); 

// filter comapanies which is equal age of 25

const retailCompanies = companies.filter((find) => find.age === 25 );

//  5) map = creates new array(it can create its own array)


const ownNames = comapnies.map( (name) => name.name);

// 6) sort - sort the array show in ascending age order (or) sort companies by age

const sortedCompany = companies.sort(function(x,y) {
	if(x.age > y.age) {
		return 1;
	} else {
		return -1;
	}
}) 

                // (or)

const sortedCompany = companies.sort((x,y) => (x.age > y.start ? 1 : -1 ));


// 7) sort ages

const sortages = ages.sort((a,b) => a-b ); //ascending order
const sortages = ages.sort((a,b) => b-a ); //descending order



// 8) reduce : add all ages

// using js
let agesum = 0;

for(let i =0; i <ages.length; i++ ){
	agesum += ages[i];
}

// using es6 reduce

const ageSum = ages.reduce((total,age) => total + age , 0 );

                // (or)
const ageSum = ages.reduce(function(total,age) {
	  return  total + age;
},0);


// 9) comined method using map,filter,sort,reduce


  ex: const score = [ 25,14,69,23,57,62,35,46,22,35,26];

  const combined = score.map(doubleScore => doubleScore * 2)
                       .filter(filterScore => filterScore >=50)
                       .sort((x,y) => x-y)
                       .reduce((a,b) => a + b , 0);
































