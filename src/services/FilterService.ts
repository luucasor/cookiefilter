import { EnumScreen } from "@/models/enums/EnumScreen";
import Screen from "@/models/Screen"

export default class FilterService {

    public findScreenInFilterCookie(key: EnumScreen, screens: Array<Screen>) : Screen {
        return screens.find(k => k.name == EnumScreen.COBRANCAS)
    }
}