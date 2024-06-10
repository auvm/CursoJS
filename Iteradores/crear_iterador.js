let iterator = {
    minValue: 0,
    maxValue: 100,
    currentValue: 1,

    next(){
        let result = {value:null, done:false};

        if(this.currentValue > this.minValue && this.currentValue <= this.maxValue){
            result = {value: this.currentValue, done: false}
            this.currentValue += 1;
        }else{
            result = {done: true}
        }

        return result;
    }
};

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


let item = iterator.next();
while(!item.done){
    console.log(item.value);
    item = iterator.next();
};