class List{
  constructor() {
    console.log("created");
    this.data = new Array(10)
    this.size = 0
  }
  // add the value to the firstmost free
  // position in the data array
  push(value) {
    if (this.size === this.data.length) {
       this.grow()
    }
    this.data[this.size] = value
    this.size++
  }
  grow() {
    console.log(`Growing from ${this.data.length} to ${Math.min(this.data.length * 2, this.data.length + 100)}`)
    let aa = new Array(Math.min(this.data.length * 2, this.data.length + 100))
    {
      this.data.forEach((item,i) => aa[i] = item)
    }
    this.data =  aa
  }

  toString() {
    if (this.size === 0) {

      return "[]"
    }
    else {
      let result = "";
      for (let i = 0; i< this.size; i++){
        result += this.data[i] + ", "
      }
      return `[${result}]`

    }
  }
  remove(index) {
    for (let i = index; i < this.size; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.size--
  }
  add(value, index=this.size) {
    if (this.size === this.data.length) {
      this.grow()
    }
    for (let i = this.size + 1; i >= index; i--){
      if (i == index) {
        this.data[i] = value
        continue
      }
      this.data[i] = this.data[i-1]
    }
    this.size++
  }
  indexOf(value, index=0) {
    for (let i = index; i < this.size; i++){
      if (this.data[i] === value){
        return i
      }

    }
    return null
  }
  get(index) {
    if (index < 0) {
      index  += this.size
    }
    if (index < this.size) {
      return this.data[index]
    }
    return null;
  }
  concat(arr) {
    arr.forEach((a) => {
      console.log(a)
      this.add(a)
    })
  }
}


const ll = new List()
for (let i = 1; i <= 10; i++){
  ll.push(i*i)
}
for (let i = 1; i <= 10; i++){
  ll.push(i)
}
// console.log(ll.toString())
// ll.add(4, 3)
ll.concat([99,98,97,1,[...ll.data],2,3,4,5,6,6])
// console.log(ll.toString())
console.log(ll.toString())
