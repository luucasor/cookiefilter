import IFilter from "../models/interfaces/IFilter"
import { EnumFilter } from "../models/enums/EnumFilter"

export default class Filter implements IFilter {
    id: string = ""
    type: EnumFilter = EnumFilter.UNDEFINED
    value: object = {}

    constructor(id: string, type: EnumFilter, value: object) {
        this.setId(id)
        this.setType(type)
        this.setValue(value)
    }

    public setId(id: string) {
        this.id = id
    }

    public setType(type: EnumFilter) {
        this.type = type
    }

    public setValue(value: object) {
        this.value = value
    }
}