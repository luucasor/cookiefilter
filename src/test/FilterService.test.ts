import { EnumScreen } from "../models/enums/EnumScreen"
import FilterService from "../services/FilterService"
import FilterBuilder from "./builders/FilterBuilder"

let filterService: FilterService = new FilterService()
let filterBuilder: FilterBuilder = new FilterBuilder()

test('Create: deve salvar filtro na lista por tela', ()=> {
    filterService.createFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterNomeCliente())
    expect(filterService.getScreens().length).toEqual(1)
})

test('Read: deve buscar o filtro na lista por tela e id do filtro', ()=> {
    filterService.createFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterNomeCliente())
    let filter = filterService.findFilterByScreenNameAndFilterId(EnumScreen.COBRANCAS, "nomeCliente")
    expect(filter?.id).toEqual(filterBuilder.buildFilterNomeCliente().id)
})

test('Update: deve atualizar o filtro na lista por tela, e validar valor atualizado', ()=> {
    filterService.createFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterNomeCliente())
    let filter = filterService.findFilterByScreenNameAndFilterId(EnumScreen.COBRANCAS, "nomeCliente")
    let newValue = {id: 1, name: "Omar Mahmoud"}
    if(filter){
        filter.setValue(newValue)
        filterService.updateFilter(EnumScreen.COBRANCAS, filter)
    }
    expect(filterService.findFilterByScreenNameAndFilterId(EnumScreen.COBRANCAS, "nomeCliente")?.value).toEqual(newValue)
})

test('Delete: deve deletar o filtro na lista por tela e nome do filtro, e validar exclusão', ()=> {
    filterService.createFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterMeioPagamento())
    filterService.deleteFilter(EnumScreen.COBRANCAS, 'meioPagamento')
    expect(filterService.getScreens().find(item => item.name === EnumScreen.COBRANCAS)?.filters.length).toEqual(1)
})

test('Delete: deve deletar todos os filtros na lista por tela, e validar exclusão', ()=> {
    filterService.createFilter(EnumScreen.COBRANCAS, filterBuilder.buildFilterMeioPagamento())
    filterService.deleteAllFilters(EnumScreen.COBRANCAS)
    expect(filterService.getScreens().find(item => item.name === EnumScreen.COBRANCAS)?.filters.length).toEqual(0)
})