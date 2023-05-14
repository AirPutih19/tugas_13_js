function panggilBuah(){
    var data = ['Pisang','Jeruk'];
    console.log(data)
    data.unshift('Apel','Mangga')
    return data
}
console.log(panggilBuah())