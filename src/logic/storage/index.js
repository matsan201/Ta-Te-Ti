/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
export const saveGameToStorage = ({board, turn}) => {
    // guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
}


export const resetGameToStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}