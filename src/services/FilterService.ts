import { EnumScreen } from "../models/enums/EnumScreen"
import Filter from "../models/Filter"
import Screen from "../models/Screen"

export default class FilterService {

    private screens: Array<Screen> = []

    public saveFilter(screenName: EnumScreen, filter: Filter) {
        if(this.existsScreen(screenName)){
            this.addFilterInScreen(screenName, filter)
        } else {
            this.createScreen(screenName)
            this.addFilterInScreen(screenName, filter)            
        }
    }

    public removeFilter(screenName: EnumScreen, filterId: string) {
        if(this.existsScreen(screenName) && this.existsFilter(screenName, filterId)){
            let screen = this.screens.find(item => item.name === screenName)
            let filter = screen?.filters.filter(item => item.id !== filterId)
            screen?.setFilters(filter)
        }
    }

    public removeAllFilters(screenName: EnumScreen) {
        if(this.existsScreen(screenName)){
            let screen = this.screens.find(item => item.name === screenName)
            screen?.setFilters([])
        }
    }

    public getScreens(): Array<Screen> {
        return this.screens
    }

    private createScreen(screenName: EnumScreen) {
        this.screens.push(new Screen(screenName, []))
    }

    private existsScreen(screenName: EnumScreen): boolean {
        return this.screens.some(item => item.name === screenName)
    }

    private existsFilter(screenName: EnumScreen, filterId: string): boolean | undefined {
        return this.findScreen(screenName)?.filters.some(item => item.id === filterId)
    }

    private findScreen(screenName: EnumScreen): Screen | undefined {
        return this.screens.find(item => item.name === screenName)
    }

    private addFilterInScreen(screenName: EnumScreen, filter: Filter): void {
        this.findScreen(screenName)?.addFilter(filter)
    }
}