import { EnumScreen } from "@/models/enums/EnumScreen"
import { EnumFilter } from "@/models/enums/EnumFilter"
import Filter from "@/models/Filter"
import Screen from "@/models/Screen"

export default class TestBuilderService {

    public buildScreens(): Screen[] {
        return [this.buildScreenCobrancas(), this.buildScreenTransferencias()]
    }
    
    public buildScreenCobrancas(): Screen {
        let filtersCobrancas : Array<Filter> = [this.buildFilterNomeCliente(), this.buildFilterMeioPagamento()]                                  
        let screenCobrancas = new Screen(EnumScreen.COBRANCAS, filtersCobrancas)
        return screenCobrancas
    }
    
    private buildScreenTransferencias(): Screen {
        let filtersTransferencias : Array<Filter> = []
        let screenTransferencias = new Screen(EnumScreen.TRANSFERENCIAS, filtersTransferencias)
        return screenTransferencias
    }

    private buildFilterNomeCliente(): Filter {
        return new Filter('nomeCliente', EnumFilter.AUTOCOMPLETE, {id: 1, name: "Lucas Ortigara Reis"})
    }

    private buildFilterMeioPagamento(): Filter {
        return new Filter('meioPagamento', EnumFilter.AUTOCOMPLETE, {id: 3, title: "Pix"})
    }
}