import axios from 'axios';

class Bitcoin {
    constructor() {
        this.url = "https://economia.awesomeapi.com.br/BTC/1";
        this.currency = ``;
    }

    async getCurrency() {
        try {
            let res = await axios.get(this.url);
            if(res.status == 200) {
                this.currency = `O Bitcoin atualmente está valendo *${res.data[0].bid}*`;
                return this.currency;
            } else {
                this.currency = `*Deu um errinho com nosso parceiro de busca :c tenta depois!`;
                return this.currency;
            }
        } catch (e) {
            console.log(e)
            this.currency = `*Dei pane :c tenta mais tarde!*`;
            return this.currency;
        }
    }
}

export default new Bitcoin();