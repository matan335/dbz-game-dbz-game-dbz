
const initialState = {
  isBattleMode: false,
  player:null,
  enemy:null
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ENTER_BATTLE':

    const isBattleMode = true
    const { enemy, player } = action
    enemy.health = 100
    player.health = 100
  
    return {...state, isBattleMode, enemy, player}
    
    default :
    return {...state}
  }
}

export default reducer