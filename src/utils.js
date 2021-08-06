

export const matchString = (input, output) => {
    let inp = input.trim("").split("\n")
    let out = output.trim("").split("\n")
    
    for(let i = 0; i < inp.length; i++){
        for(let j = 0; j < inp[i].length; j++){
           inp[i][j].toLowerCase()
        }
    }

    for(let i = 0; i < out.length; i++){
        for(let j = 0; j < out[i].length; j++){
            out[i][j].toLowerCase()
        }
    }

    let arr = []

    for(let i = 0; i < out.length; i++){
        for(let j = 0; j < inp.length; j++){
            let a = out[i].replace("/t", "")
            let b = inp[j].replace("/t", "")
            if(a == b) {
                arr.push(a)
            }
        }
    }
    console.log(arr, inp, out)
    return arr
}