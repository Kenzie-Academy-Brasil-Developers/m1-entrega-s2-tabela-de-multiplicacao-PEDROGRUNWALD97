function multiplicationTable(x){
    let tabuada = []
    for(let i = 0; i <= x; i++){
        tabuada.push([0])
        for(let y = 1; y <= x; y++){
            tabuada[i].push(y*i)
        }
    }
    console.table(tabuada)
}
multiplicationTable(15)