import { EnumFilter } from "../enums/EnumFilter"

export default interface IFilter {
    id: string
    type: EnumFilter
    value: object

    setId(id: string): void
    setType(type: EnumFilter): void
    setValue(value: object): void
}