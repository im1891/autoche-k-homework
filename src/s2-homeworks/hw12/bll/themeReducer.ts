type InitStateType = {
    themeId: number
}
type ChangeThemeIdType = {
    type: string
    id: number
}

const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdType): any => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
