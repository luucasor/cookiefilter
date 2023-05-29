import { EnumCookie } from "../models/enums/EnumCookie"
import CookieService from "../services/CookieService"
import ScreenBuilder from "./builders/ScreenBuilder"

let cookieService: CookieService
let screenBuilder: ScreenBuilder

beforeEach(() => {
    cookieService = new CookieService()
    screenBuilder = new ScreenBuilder()
});

test('Create: deve gravar informação no cookie e verificar se foi salvo corretamente', () => {    
    cookieService.create(EnumCookie.FILTER_SCREEN, screenBuilder.buildScreens())
    let cookieFilterScreen = cookieService.read(EnumCookie.FILTER_SCREEN)
    expect(cookieFilterScreen).toEqual(screenBuilder.buildScreens())
})

test('Read && Delete: deve gravar informação no cookie, verificar se foi gravado corretamente. Remover informação e verificar se foi removido corretamente', () => {    
    cookieService.create(EnumCookie.FILTER_SCREEN, screenBuilder.buildScreens())
    let cookieFilterScreen = cookieService.read(EnumCookie.FILTER_SCREEN)
    expect(cookieFilterScreen).toEqual(screenBuilder.buildScreens())
    cookieService.delete(EnumCookie.FILTER_SCREEN)
    expect(cookieService.read(EnumCookie.FILTER_SCREEN)).toBeNull
})

test('Update: deve gravar informação no cookie, verificar se foi gravado corretamente. Editar informação, e verificar se foi editado corretamente.', () => {
    cookieService.create(EnumCookie.FILTER_SCREEN, screenBuilder.buildScreens())
    let cookieFilterScreen = cookieService.read(EnumCookie.FILTER_SCREEN)
    expect(cookieFilterScreen).toEqual(screenBuilder.buildScreens())
    cookieService.update(EnumCookie.FILTER_SCREEN, screenBuilder.buildScreenCobrancas())
    let editedCookieFilterScreen = cookieService.read(EnumCookie.FILTER_SCREEN)
    expect(editedCookieFilterScreen).toEqual(screenBuilder.buildScreenCobrancas())
})

