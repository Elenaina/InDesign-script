var document = app.activeDocument;
alert('start skryptu');
for (var currentPageIndex = 0; currentPageIndex < document.pages.length; currentPageIndex++){
        var currentPage = document.pages.item(currentPageIndex);
         for (var currentFrameIndex = 0; currentFrameIndex < currentPage.textFrames.length; currentFrameIndex++) {
            var currentFrame = currentPage.textFrames[currentFrameIndex];
            for(var currentTableIndex = 0; currentTableIndex < currentFrame.tables.length; currentTableIndex++){
                var currentTable = currentFrame.tables.item(currentTableIndex);
                for(currentRow = 0; currentRow < currentTable.rows.length-1; currentRow++){                    
                    if (currentTable.rows[currentRow].cells.item(currentTable.rows[currentRow].cells.length-2).texts.item(0).contents.indexOf("katalogowy") !== -1 ) { 
                        for (var currentRowIndex = currentRow+1; currentRowIndex < currentTable.rows.length; currentRowIndex++) {                      
                            var currentCell = currentTable.rows[currentRowIndex].cells[currentTable.rows[currentRowIndex].cells.length-2]; 
                             currentCell.texts.item(0).contents = currentCell.texts.item(0).contents.replace(/\s/g, "");
                             }
                      } ;
                  };
              };
            };
        };
alert('koniec działania skryptu');

