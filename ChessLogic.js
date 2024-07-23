
let MovedElement ;
let initial_position;
let Destination_Block;
let final_position;


const MoveList=[];
const turn= 'black';
const display =document.getElementById('display');
function isBlackSquare(square) {
    if (square.length !== 2) {
        throw new Error('Invalid square format');
    }

    var column = square.charCodeAt(0) - 97; // 'a' is 97 in ASCII
    var row = parseInt(square[1], 10);

    // Check if the sum of column and row is even or odd
    return (column + row) % 2 === 0;
}

function Setup(){
const board = document.querySelector('#board');
    SQUARES.forEach((x, i) => {
        const NewBlock = document.createElement('div');

    
            NewBlock.className =isBlackSquare(x) ?'grey_block':'black_block';
            NewBlock.classList.add("squares");
            
    
        NewBlock.id = x;
        NewBlock.setAttribute('block_no',i);
        if (Initial_State[i] !== '8') {
            let NewElement = document.createElement('div');
            NewElement.className = 'element';
            NewElement.id = Initial_State[i];
            const UnfPieceInfo= Initial_State[i].split('_');
            NewElement.setAttribute('color',UnfPieceInfo[0])
            NewElement.setAttribute('type',UnfPieceInfo[1]);
            //part where svg for playing elements are added . 
            NewElement.innerHTML =elementArray[UnfPieceInfo[1]]
            NewElement.children[0].classList.add(UnfPieceInfo[0])
            NewElement.setAttribute('draggable', true);
            NewBlock.appendChild(NewElement);
        }
        board.appendChild(NewBlock);
    });
    BoardFlip()
    
document.querySelectorAll('.squares').forEach(Element=>{
    Element.addEventListener("dragstart",HandleDrag);
    Element.addEventListener("dragover",HandleDragOver);
    Element.addEventListener('drop',HandleDrop);

})
}

Setup();
function HandleDragOver(e)
{
    e.preventDefault();

}
function HandleDrop(e){
    
    e.stopPropagation();
    console.log(e.target.tagName);
    
    if(e.target.tagName=='path'){
        Destination_Block=e.target.parentNode.parentNode.parentNode
    }
    else if(e.target.tagName=='svg'){
        Destination_Block=e.target.parentNode.parentNode;
    }
    else if(e.target.classList.contains('element')){
        Destination_Block=e.target.parentNode

    }
    else{

        Destination_Block=e.target;}
    
    final_position=parseInt(Destination_Block.getAttribute('block_no'),10);
    console.log(final_position)
    if(Logic()){
        perform_move();
       
    }
    else{
        alert("invalid move")
    }
}




function HandleDrag(e) {
    MovedElement= e.target;
    initial_position=parseInt(e.target.parentNode.getAttribute('block_no'),10)
console.log(MovedElement.id);
console.log(initial_position);


}


function perform_move(){
    if(Destination_Block.hasChildNodes()){
        if(Destination_Block.children[0].getAttribute('color')!=MovedElement.getAttribute('color')){
        Destination_Block.appendChild(MovedElement);
        Destination_Block.removeChild(Destination_Block.children[0]);
        BoardFlip()
        moveConverter(initial_position,final_position,MoveList)
        isCheckmate()
        }
        else{
            alert('same team')
        }}
        
        
    else{
        Destination_Block.appendChild(MovedElement);
        BoardFlip()
        moveConverter(initial_position,final_position,MoveList)
        isCheckmate()
    }
    
    
}
function BoardFlip(){
    
document.querySelectorAll(".squares").forEach(x=>{
const currentBlockNo = parseInt(x.getAttribute('block_no'), 10); // Retrieve and parse the current block_no value
const newBlockNo = 63 - currentBlockNo; // Calculate the new value
x.setAttribute('block_no', newBlockNo); // Set the new value

})}
function Logic(){


    if((MoveList.length%2==1 &&MovedElement.getAttribute('color')=='black')||(MoveList.length%2==0 && MovedElement.getAttribute('color')=='white')){
        switch(MovedElement.getAttribute('type')){

            case'pawn':
            return PawnLogic(initial_position,final_position);
            
            case'rook':
            return(CheckVertical(initial_position,final_position)||CheckHorizontal(initial_position,final_position))
            case'queen':
            return(CheckVertical(initial_position,final_position)||CheckHorizontal(initial_position,final_position)||checkDiagonal(initial_position,final_position))
            
            case'bishop':
            return((checkDiagonal(initial_position,final_position)))
            
            case 'knight':
                return CheckKnight(initial_position,final_position)
            case 'king':
                return CheckKingMove(initial_position,final_position)


        }
    
    }
}
function moveConverter(start,end,MoveList){
    const startRow = Math.floor(start / 8);
    const startCol = start % 8;
    const endRow = Math.floor(end / 8);
    const endCol = end % 8;
    const start_notation= String.fromCharCode(104-startCol)+""+String(startRow+1)
    const end_notation= String.fromCharCode(104-endCol)+""+String(endRow+1)
    MoveList.push((start_notation + " " +end_notation ))
}

