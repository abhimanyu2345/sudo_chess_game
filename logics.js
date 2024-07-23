
        const PawnLogic =(initial_position,final_position) => {
            const SquareList = document.querySelectorAll('.squares');
            if (
                (final_position === initial_position + 8 &&!Destination_Block.hasChildNodes())||((final_position ==initial_position+16) && (!SquareList.item(initial_position+8).hasChildNodes()&&!Destination_Block.hasChildNodes()))
                ||(final_position===initial_position+7 && Destination_Block.hasChildNodes()) 
            ||(final_position===initial_position+9 && Destination_Block.hasChildNodes())){ 
                return true;  
                
              
            }
            return false; 
        };
        const RookLogic=()=>{    
        
        }
        function CheckHorizontal(initialPosition,finalPosition) {
            const [left,right] = initialPosition < finalPosition 
                ? [initialPosition, finalPosition] 
                : [finalPosition, initialPosition];
            let row =null;
            for(const x of RowList){
                
                if(x.includes(left)&&x.includes(right)){
                    row = x;
                    break;
                }
            }
            if(row){
                console.log(row);
                const noOfBtw =right-left-1
                
                  //to find out the number of horizontal positions btw left and right
                for(let i=1; i<=noOfBtw; i++){
        
                    if(document.querySelector(`[block_no="${row[row.indexOf(left)+i]}"]`).hasChildNodes()){
        
                        return false;
                    }
                }
                return true;
            }
            return false;
        
        }
        
        function CheckVertical(initialPosition,finalPosition){
            const [bottom, top] = initialPosition < finalPosition 
                ? [initialPosition, finalPosition] 
                : [finalPosition, initialPosition];
        
            
            let col =null;
            for(const x of ColList){
                if(x.includes(bottom)&&x.includes(top)){
                    col= x;
                    break;
            
                }
            }
            if(col){
                const noOfBtw=col.indexOf(top)-col.indexOf(bottom)-1
                for(let i=1; i<=noOfBtw; i++){
                   // console.log(document.querySelector(`[block_no="${col[col.indexOf(bottom)+i]}"]`))
                    if(document.querySelector(`[block_no="${col[col.indexOf(bottom)+i]}"]`).hasChildNodes()){
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        function checkDiagonal(initialPosition, finalPosition) {
            const [bottom, top] = initialPosition < finalPosition 
                ? [initialPosition, finalPosition] 
                : [finalPosition, initialPosition];
        
            let diag = null;
            for (const diagonal of DiagonalList) {
                if (diagonal.includes(bottom) && diagonal.includes(top)) {
                    diag = diagonal;
                    break;
                }
            }
        
            if (!diag) {
                
                for (const antiDiagonal of AntiDiagList) {
                    if (antiDiagonal.includes(bottom) && antiDiagonal.includes(top)) {
                        diag = antiDiagonal;
                        break;
                    }
                }
            }
        
            if (diag) {
                let [top_index,bottom_index] =(diag.indexOf(bottom)>diag.indexOf(top))?[diag.indexOf(bottom),diag.indexOf(bottom)]:[diag.indexOf(top),diag.indexOf(bottom)]
                const noOfBtw = top_index-bottom_index-1
                for (let i = 1; i <= noOfBtw; i++) {
                    //console.log(document.querySelector(`[block_no="${diag[bottom_index + i]}"]`))
                    const block = document.querySelector(`[block_no="${diag[bottom_index + i]}"]`);
                    if (block && block.hasChildNodes()) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        
        function CheckKnight(initial_position, final_position){
            const startRow =Math.floor(initial_position/8);
            const endRow = Math.floor(final_position/8);
            const startCol = initial_position%8;
            const endCol = final_position%8;
            const rowDiff = Math.abs(endRow - startRow);
            const colDiff = Math.abs(endCol - startCol);
        
            // Check for valid knight move
            return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
        
        }
        function CheckKingMove(start, end) {
            // Convert 1D indices to 2D coordinates
            const startRow = Math.floor(start / 8);
            const startCol = start % 8;
            const endRow = Math.floor(end / 8);
            const endCol = end % 8;
        
            // Calculate row and column differences
            const rowDiff = Math.abs(endRow - startRow);
            const colDiff = Math.abs(endCol - startCol);
        
            // Check for valid king move
            return (rowDiff <= 1 && colDiff <= 1) && !(rowDiff === 0 && colDiff === 0);
        }
        function isCheckmate(){
        
        const [whiteKing,blackKing] =[document.getElementById("white_king"),document.getElementById("black_king")];
        if(!whiteKing || !blackKing){
            
            document.querySelectorAll('[draggable]').forEach((x)=>{
                x.setAttribute("draggable", false);
            })
            if(whiteKing===null){
                alert("black won");}
            else if(blackKing===null){
        
            alert("white won");
            }
        }
        }
     
