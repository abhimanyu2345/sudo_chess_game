const Initial_State = [
    "black_rook", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_rook",
        "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn",
        '8', '8', '8', '8', '8', '8', '8', '8','8', '8', '8', '8', '8', '8', '8', '8',
        '8', '8', '8', '8', '8', '8', '8', '8',
        '8', '8', '8', '8', '8', '8', '8', '8',
        "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn",
        "white_rook", "white_knight", "white_bishop", "white_queen", "white_king", "white_bishop", "white_knight", "white_rook"
    ];
    
    var SQUARES = [
        'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
        'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
        'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
        'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
        'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
        'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
        'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
        'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
    ];
    const RowList = [
        [0, 1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30, 31],
        [32, 33, 34, 35, 36, 37, 38, 39],
        [40, 41, 42, 43, 44, 45, 46, 47],
        [48, 49, 50, 51, 52, 53, 54, 55],
        [56, 57, 58, 59, 60, 61, 62, 63]
    ]
    const ColList =[
        [0, 8, 16, 24, 32, 40, 48, 56],
    [1, 9, 17, 25, 33, 41, 49, 57],
    [2, 10, 18, 26, 34, 42, 50, 58],
    [3, 11, 19, 27, 35, 43, 51, 59],
    [4, 12, 20, 28, 36, 44, 52, 60],
    [5, 13, 21, 29, 37, 45, 53, 61],
    [6, 14, 22, 30, 38, 46, 54, 62],
    [7, 15, 23, 31, 39, 47, 55, 63]]
    const DiagonalList = [
        [0],
        [1, 8],
        [2, 9, 16],
        [3, 10, 17, 24],
        [4, 11, 18, 25, 32],
        [5, 12, 19, 26, 33, 40],
        [6, 13, 20, 27, 34, 41, 48],
        [7, 14, 21, 28, 35, 42, 49, 56],
        [15, 22, 29, 36, 43, 50, 57],
        [23, 30, 37, 44, 51, 58],
        [31, 38, 45, 52, 59],
        [39, 46, 53, 60],
        [47, 54, 61],
        [55, 62],
        [63]
    ];
    
    const AntiDiagList= [
        [7],
        [6, 15],
        [5, 14, 23],
        [4, 13, 22, 31],
        [3, 12, 21, 30, 39],
        [2, 11, 20, 29, 38, 47],
        [1, 10, 19, 28, 37, 46, 55],
        [0, 9, 18, 27, 36, 45, 54, 63],
        [8, 17, 26, 35, 44, 53, 62],
        [16, 25, 34, 43, 52, 61],
        [24, 33, 42, 51, 60],
        [32, 41, 50, 59],
        [40, 49, 58],
        [48, 57],
        [56],]