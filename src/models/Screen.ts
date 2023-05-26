import IScreen from "../models/interfaces/IScreen"
import { EnumScreen } from "../models/enums/EnumScreen"
import IFilter from "../models/interfaces/IFilter"

export default class Screen implements IScreen {
  name: EnumScreen = EnumScreen.UNDEFINED
  filters: IFilter[] = []

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

  public addFilter(filter: IFilter) {
    let existFilter = this.filters.find(f => f.id == filter.id)
    if(existFilter){
      this.filters = this.filters.filter(f => f.id !== filter.id)
    } 
    this.filters.push(filter)
  }
}