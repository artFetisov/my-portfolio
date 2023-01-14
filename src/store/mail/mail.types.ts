export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface IMailState {
    status: StatusType
}