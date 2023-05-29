import { EnumScreen } from "@enums/EnumScreen"
import IFilter from "@interfaces/IFilter"

export default interface IScreen {
    name: EnumScreen
    filters: IFilter[]

    setName(name: EnumScreen) : void
    setFilters(filters: IFilter[]) : void
    addFilter(filter: IFilter): void
}