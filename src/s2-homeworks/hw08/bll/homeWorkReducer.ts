import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy= [...state];

            if (action.payload === 'up') {
                stateCopy =  stateCopy.sort( (e1,e2) => e1.name > e2.name ? 1 : -1 )
            } else if(action.payload === 'down' ) {
                stateCopy =  stateCopy.sort( (e1,e2) => e1.name < e2.name ? 1 : -1 )
            }
            return stateCopy  // need to fix
        }
        case 'check': {

            return [...state].filter( el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
