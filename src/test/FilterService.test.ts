import { EnumScreen } from "../models/enums/EnumScreen"
import FilterService from "../services/FilterService"
import FilterBuilder from "./builders/FilterBuilder"

let filterService: FilterService = new FilterService()
let filterBuilder: FilterBuilder = new FilterBuilder()

test('deve salvar filtro na lista por tela', ()=> {
    filterService.saveFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterNomeCliente())
    expect(filterService.getScreens().length).toEqual(1)
})

test('deve remover o filtro na lista por tela e nome do filtro', ()=> {
    filterService.saveFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterMeioPagamento())
    filterService.removeFilter(EnumScreen.COBRANCAS, 'meioPagamento')
    expect(filterService.getScreens().find(item => item.name === EnumScreen.COBRANCAS)?.filters.length).toEqual(1)
})

test('deve remover todos os filtros na lista por tela', ()=> {
    filterService.saveFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterMeioPagamento())
    filterService.removeAllFilters(EnumScreen.COBRANCAS)
    expect(filterService.getScreens().find(item => item.name === EnumScreen.COBRANCAS)?.filters.length).toEqual(0)
})