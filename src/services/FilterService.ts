import { EnumScreen } from "../models/enums/EnumScreen"
import Filter from "../models/Filter"
import Screen from "../models/Screen"

export default class FilterService {

    private screens: Array<Screen> = []

    public saveFilter(screenName: EnumScreen, filter: Filter) {
        let telaExisteDentroDaLista = this.screens.find(k => k.name == screenName)
        if(telaExisteDentroDaLista){
            //sim: salva filtro na lista
            let screen = this.screens.find(k => k.name == screenName)
            screen?.addFilter(filter)
        } else {
            //não: cria tela e salva filtro na lista
            this.screens.push(new Screen(screenName, [filter]))
        }
    }

    public removeFilter(screenName: EnumScreen, filterName: string) {
        //verifica se lista existe:
            //sim: 
                //verifica se tela existe na lista
                    //sim: verifica se filtro existe na lista
                        //sim: remove filtro da lista
                        //não: não faz nada
                    //não: não faz nada
            //não: não faz nada
    }

    public removeAllFilters(screenName: EnumScreen) {
        //verifica se lista existe:
            //sim: 
                //verifica se tela existe
                    //sim: remove tela da lista
                    //não: não faz nada
            //não: cria lista e salva filtro na lista
    }


    public findScreenInFilterCookie(key: EnumScreen, screens: Array<Screen>) : any {
        return screens !== undefined ? screens.find(k => k.name == EnumScreen.COBRANCAS) : null
    }

    public getScreens(): Array<Screen> {
        return this.screens
    }
}