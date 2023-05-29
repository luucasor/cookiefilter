import { EnumScreen } from "../models/enums/EnumScreen"
import Filter from "../models/Filter"
import Screen from "../models/Screen"
import IFilter from "../models/interfaces/IFilter"
import IScreen from "../models/interfaces/IScreen"


export default class FilterService {

    private screens: Array<Screen> = []

    public createFilter(screenName: EnumScreen, filter: IFilter) {
        if(this.existsScreen(screenName)){
            this.addFilterInScreen(screenName, filter)
        } else {
            this.createScreen(screenName)
            this.addFilterInScreen(screenName, filter)            
        }
    }

    public findFilterByScreenNameAndFilterId(screenName: EnumScreen, filterId: string): IFilter | undefined {
        let filter = undefined
        if(this.existsScreen(screenName)){
            let screen = this.findScreen(screenName)
            filter = this.findFilterInScreen(screenName, filterId)
        } 
        return filter
    }

    public updateFilter(screenName: EnumScreen, filter: IFilter): void {
        this.createFilter(screenName, filter)
    }

    public deleteFilter(screenName: EnumScreen, filterId: string) {
        if(this.existsScreen(screenName) && this.existsFilter(screenName, filterId)){
            let screen = this.screens.find(item => item.name === screenName)
            let filter = screen?.filters.filter(item => item.id !== filterId)
            screen?.setFilters(filter)
        }
    }

    public deleteAllFilters(screenName: EnumScreen) {
        if(this.existsScreen(screenName)){
            let screen = this.screens.find(item => item.name === screenName)
            screen?.setFilters([])
        }
    }

    public getScreens(): Array<Screen> {
        return this.screens
    }

    private createScreen(screenName: EnumScreen) {
        this.getScreens().push(new Screen(screenName, []))
    }

    private existsScreen(screenName: EnumScreen): boolean {
        return this.getScreens().some(item => item.name === screenName)
    }

    private existsFilter(screenName: EnumScreen, filterId: string): boolean | undefined {
        return this.findScreen(screenName)?.filters.some((item: Filter) => item.id === filterId)
    }

    private findScreen(screenName: EnumScreen): IScreen | undefined {
        return this.getScreens().find((item: IScreen) => item.name === screenName)
    }

    private findFilterInScreen(screenName: EnumScreen, filterId: string): IFilter | undefined {
        let screen = this.findScreen(screenName)
        return screen?.filters?.find((item: IFilter) => item.id === filterId)
    }

    private addFilterInScreen(screenName: EnumScreen, filter: IFilter): void {
        this.findScreen(screenName)?.addFilter(filter)
    }
}