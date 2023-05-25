import { EnumFilter } from "@/models/enums/EnumFilter"

export default interface IFilter {
    id: string
    type: EnumFilter
    value: object
}