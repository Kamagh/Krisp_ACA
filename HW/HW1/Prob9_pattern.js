const pattern = () => {
    let ptr = "";
    for(let row = 0; row < 7; row++){
        for(let col = 0; col < 6; col++){
            if (row === 0 || row === 7-1){
                if (col === 6-1){
                    ptr += "\n";
                    //console.log("\n");
                }else {
                    ptr += "* ";
                    //console.log("* ");
                }
            }else{
                if (col === 0) ptr += "* "; //console.log("* ");
                else if (col === 6-1) ptr += "* \n";
                else if(col < 4) ptr += "  "; //console.log(" ")
            }
        }
    }
    return ptr;
}

console.log(pattern());