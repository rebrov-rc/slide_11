type Uni = number | string | boolean;
const obj: Uni{num: number next: object} = {
    num: 1,
    next: {
        num: 2,
        next: {
            num: 3,
            next: stop

}
let arr: number[] = new Array;
function rec (obj): number[] {
   return arr.push(obj.num) += rec(obj.next);
}
// console.log(rec(obj))
// arr.push(obj.num)
console.log(arr)
console.log(obj)