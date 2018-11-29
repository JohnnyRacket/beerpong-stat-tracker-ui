
export type State = {
    readonly sideA: string[];
    readonly sideB: string[];
}

const initialState = {
    sideA: {
        cups: []
    },
    sideB: {
        cups: []
    }
  };

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'CUP_HIT': {
        const {index, id, side} = action.payload;
        return ((side === 'a') ?
         {
            ...state,
            sideA: {
                cups: [...state.sideA.cups.slice(0, index), id, ...state.sideA.cups.slice(index+1)]
            }
          }
          :
          {
            ...state,
            sideB: {
                cups: [...state.sideB.cups.slice(0, index), id, ...state.sideB.cups.slice(index+1)]
            }
          });
    }
    default: {
      return state;
    }
  }
}
