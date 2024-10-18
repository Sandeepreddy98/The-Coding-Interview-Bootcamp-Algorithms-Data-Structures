function steps(n){
    let stair = ''
    for(let row=0;row<n;row++){
        for(let column = 0;column<n;column++){
            if(column<=row){
                stair = stair + '#'
            }else{
                stair = stair + ' '
            }
        }
        console.log(stair)
    }
}
steps(3)