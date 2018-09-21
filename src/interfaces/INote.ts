export default interface INote {
    id: string,
    body: string,
    title?: string,
    created: Date,
    updated?: Date,
}