function kampYeri (row1, row2, row3, row4, row5, row6, row7, row8, tentsInColumns){

    let allRows = [row1, row2, row3, row4, row5, row6, row7, row8]

    // let collumn1 = [row1[0], row2[0], row3[0], row4[0], row5[0], row6[0], row7[0], row8[0]]
    // let collumn2 = [row1[1], row2[1], row3[1], row4[1], row5[1], row6[1], row7[1], row8[1]]
    // let collumn3 = [row1[2], row2[2], row3[2], row4[2], row5[2], row6[2], row7[2], row8[2]]
    // let collumn4 = [row1[3], row2[3], row3[3], row4[3], row5[3], row6[3], row7[3], row8[3]]
    // let collumn5 = [row1[4], row2[4], row3[4], row4[4], row5[4], row6[4], row7[4], row8[4]]
    // let collumn6 = [row1[5], row2[5], row3[5], row4[5], row5[5], row6[5], row7[5], row8[5]]
    // let collumn7 = [row1[6], row2[6], row3[6], row4[6], row5[6], row6[6], row7[6], row8[6]]
    // let collumn8 = [row1[7], row2[7], row3[7], row4[7], row5[7], row6[7], row7[7], row8[7]]
    // let allCollumns = [collumn1, collumn2, collumn3, collumn4, collumn5, collumn6, collumn7, collumn8]
    
    // solve rows with 0 tents
    for (j = 0; j < allRows.length; j++){
        let currentRow = allRows[j]
        if (currentRow[8] == 0){
            for (i = 0; i < currentRow.length; i ++){
                if (currentRow[i] == 0){
                    currentRow[i] = ' '
                }
            }
        }
    }

    // solve collumns with 0 tents
    // for (j = 0; j < allCollumns.length; j++){
    //     let currentCollumn = allCollumns[j]
    //     if (tentsInColumns[j] == 0){
    //         for (i = 0; i < currentCollumn.length; i ++){
    //             if (currentCollumn[i] == 0){
    //                 currentCollumn[i] = ' '
    //             }
    //         }
    //     }
    // }

    

    console.log(row1)
    console.log(row2)
    console.log(row3)
    console.log(row4)
    console.log(row5)
    console.log(row6)
    console.log(row7)
    console.log(row8)
}

kampYeri ([0 , 0 , 0 ,'T', 0 , 0 , 0 , 0 , 2],
          [0 ,'T', 0 , 0 , 0 ,'T', 0 ,'T', 2],
          [0 , 0 , 0 ,'T', 0 , 0 , 0 , 0 , 1],
          [0 , 0 ,'T', 0 , 0 , 0 ,'T', 0 , 2],
          [0 ,'T', 0 , 0 ,'T', 0 ,'T', 0 , 2],
          [0 , 0 ,'T', 0 , 0 , 0 , 0 , 0 , 2],
          [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1],
          [0 , 0 , 0 , 0 , 0 ,'T', 0 , 0 , 0],
          [1 , 2 , 0 , 3 , 0 , 3 , 1 , 2]
)