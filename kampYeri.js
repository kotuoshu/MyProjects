function kampYeri (row1, row2, row3, row4, row5, row6, row7, row8, tentsInColumns){
    
    let allRows = [row1, row2, row3, row4, row5, row6, row7, row8]
    
    // solve for rows with 0 tents
    for (i = 0; i < allRows.length; i++){
        let currentRow = allRows[i]
        if (currentRow[currentRow.length - 1] == 0){
            for (j = 0; j < currentRow.length; j ++){
                if (currentRow[j] == 0){
                    currentRow[j] = ' '
                }
            }
        }
    }

    // solve for columns with 0 tents
    for (i = 0; i < tentsInColumns.length; i++){
        if (tentsInColumns[i] == 0){
            for (j = 0; j < allRows.length; j++){
                let currentRow = allRows[j]
                if (currentRow[i] == 0){
                    currentRow[i] = ' '
                } 
            }
        }
    }

    // solve for spaces with no adjacent trees
    for (i = 0; i < allRows.length; i++){
        let previousRow = []
        if (i != 0){
           previousRow = allRows[i - 1] 
        } else {
           previousRow = allRows[i]
        }        
        let currentRow = allRows[i]
        let nextRow = []
        if (i != allRows.length - 1){
            nextRow = allRows[i + 1] 
         } else {
            nextRow = allRows[i]
         }
        for (j = 0; j < currentRow.length; j++){
            if (previousRow[j] != 'T' && currentRow[j - 1] != 'T' && currentRow[j] != 'T' && currentRow[j + 1] != 'T' && nextRow[j] != 'T'){
                currentRow[j] = ' '
            }            
        }
    }

    console.log(row1.slice(0, -1).join('  '))
    console.log(row2.slice(0, -1).join('  '))
    console.log(row3.slice(0, -1).join('  '))
    console.log(row4.slice(0, -1).join('  '))
    console.log(row5.slice(0, -1).join('  '))
    console.log(row6.slice(0, -1).join('  '))
    console.log(row7.slice(0, -1).join('  '))
    console.log(row8.slice(0, -1).join('  '))
}

kampYeri ([0 , 0 , 0 ,'T', 0 , 0 , 0 , 0 , 2],
          [0 ,'T', 0 , 0 , 0 ,'T', 0 ,'T', 2],
          [0 , 0 , 0 ,'T', 0 , 0 , 0 , 0 , 1],
          [0 , 0 ,'T', 0 , 0 , 0 ,'T', 0 , 2],
          [0 ,'T', 0 , 0 ,'T', 0 ,'T', 0 , 2],
          [0 , 0 ,'T', 0 , 0 , 0 , 0 , 0 , 2],
          [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1],
          [0 , 0 , 0 , 0 , 0 ,'T', 0 , 0 , 0],
          [1 , 2 , 0 , 3 , 0 , 3 , 1 , 2])