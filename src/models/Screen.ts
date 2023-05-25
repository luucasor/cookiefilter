import IScreen from "@/models/interfaces/IScreen"
import { EnumScreen } from "@/models/enums/EnumScreen"
import IFilter from "@/models/interfaces/IFilter"

export default class Screen implements IScreen {
  name: EnumScreen
  filters: IFilter[]

  constructor(name: EnumScreen, filters: IFilter[]) {
    this.setName(name)
    this.setFilters(filters)
  }

  public setName(name: EnumScreen) {
    this.name = name
  }

  public setFilters(filters: IFilter[]) {
    this.filters = filters
  }
}