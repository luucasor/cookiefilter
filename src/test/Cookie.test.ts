import TestBuilderService from "./builders/ScreenBuilder"
import CookieService from "../services/CookieService"
import FilterService from "../services/FilterService"
import { EnumCookie } from "../models/enums/EnumCookie"
import { EnumScreen } from "../models/enums/EnumScreen"

let cookieService: CookieService
let filterService: FilterService
let testBuilderService: TestBuilderService

beforeEach(() => {
    cookieService = new CookieService()
    filterService = new FilterService()
    testBuilderService = new TestBuilderService()
});

test('deve gravar informação no cookie e verificar se os filtros da tela de cobranças foram salvos corretamente', () => {    
    cookieService.create(EnumCookie.FILTER_SCREEN, testBuilderService.buildScreens())
    let cookieFilterScreen = cookieService.read(EnumCookie.FILTER_SCREEN)
    let screenCobrancas = filterService.findScreenInFilterCookie(EnumScreen.COBRANCAS, cookieFilterScreen)
    expect(screenCobrancas).toEqual(testBuilderService.buildScreenCobrancas())
})

