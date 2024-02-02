function sockMerchant(n, ar) {
   // Create an object to store the count of each color
   const colorCount = {};
 
   ar.forEach((color) => {
     colorCount[color] = (colorCount[color] || 0) + 1;
   });
 
   // Calculate the number of pairs for each color
   let pairCount = 0;

   Object.values(colorCount).forEach((count) => {
     pairCount += Math.floor(count / 2);
   });
 
   return pairCount;
 }
 

 const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
 console.log(result); 
 