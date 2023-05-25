import { EnumScreen } from "@/models/enums/EnumScreen"
import IFilter from "@/models/interfaces/IFilter"

export default interface IScreen {
    name: EnumScreen
    filters: IFilter[]

    setName(name: EnumScreen)
    setFilters(filters: IFilter[])
}