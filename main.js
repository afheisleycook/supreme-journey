/*
name: austin heisley cook 
*/
function listnumtotal(nums,opt) {
    let total = 0;
    if (opt == "-") {
        for (let index = 0;index < nums.length; index++)
         total-=nums[index];              
        }
        
    
    if (opt == "+") {
        for (let index = 0;index < nums.length; index++)
         total+=nums[index];              
        }
        
    
    if (opt == "*") {
        for (let index = Math.min(nums);index < nums.length; index++) {
         total*=nums[index];              
        }
        
    }
    if (opt == "/") {
        for (let index = 0;index < nums.length; index++) {
         total/=nums[index];              
        }
    
    }
    return total;
}

basenums = [1,2,3.4]
let sumtotal =  listnumtotal(basenums,'+');
let subtotal =  listnumtotal(basenums,'-');
let divtotal =  listnumtotal(basenums,'/');
let multtotal =  listnumtotal(basenums,'*');
totals = [
    subtotal,
    sumtotal,
    divtotal,
    multtotal,
    
];
console.table(totals);