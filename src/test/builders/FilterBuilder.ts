import Filter from "../../models/Filter"
import { EnumFilter } from "../../models/enums/EnumFilter"

export default class FilterBuilder {

    public buildFilterNomeCliente(): Filter {
        return new Filter('nomeCliente', EnumFilter.AUTOCOMPLETE, {id: 1, name: "Lucas Ortigara Reis"})
    }

    public buildFilterMeioPagamento(): Filter {
        return new Filter('meioPagamento', EnumFilter.AUTOCOMPLETE, {id: 3, title: "Pix"})
    }
}