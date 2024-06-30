declare module '*.jpg'
declare module '*.png'

declare type RootState = ReturnType<typeof import('../../module/store').store.getState>
declare type AppDispatch = typeof import('../../module/store').store.dispatch
