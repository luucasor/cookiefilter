import { EnumScreen } from "../../models/enums/EnumScreen"
import Filter from "../../models/Filter"
import Screen from "../../models/Screen"
import FilterBuilder from "./FilterBuilder"

export default class ScreenBuilder {

    private filterBuilder = new FilterBuilder()

    public buildScreens(): Screen[] {
        return [this.buildScreenCobrancas(), this.buildScreenTransferencias()]
    }
    
    public buildScreenCobrancas(): Screen {
        let filtersCobrancas : Array<Filter> = [this.filterBuilder.buildFilterNomeCliente(), this.filterBuilder.buildFilterMeioPagamento()]                                  
        let screenCobrancas = new Screen(EnumScreen.COBRANCAS, filtersCobrancas)
        return screenCobrancas
    }
    
    private buildScreenTransferencias(): Screen {
        let filtersTransferencias : Array<Filter> = []
        let screenTransferencias = new Screen(EnumScreen.TRANSFERENCIAS, filtersTransferencias)
        return screenTransferencias
    }
}