import Filter from "../models/Filter"
import { EnumFilter } from "../models/enums/EnumFilter"
import { EnumScreen } from "../models/enums/EnumScreen"
import FilterService from "../services/FilterService"
import FilterBuilder from "./builders/FilterBuilder"

let filterService: FilterService = new FilterService()
let filterBuilder: FilterBuilder = new FilterBuilder()

test('deve salvar filtro na lista por tela', ()=> {
    console.log("antes", filterService.getScreens())
    filterService.saveFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterNomeCliente())
    console.log("depois", filterService.getScreens())


    filterService.saveFilter(EnumScreen.COBRANCAS, new Filter("nomeCliente", EnumFilter.AUTOCOMPLETE, {}))
})