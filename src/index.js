import { create, Whatsapp } from 'venom-bot';
import bitcoin from './functions/currency/bitcoin';
import msg from './messages/messages';

class Index {
    constructor() {

    }

    async createBot() {
        try {
            var client = await create();
            await this.start(client);
        } catch (e) {
            console.log(e);
        }
    }
    async start(client) {
        client.onMessage(async (message) => {
            switch (message.body) {
                case msg.TESTE:
                    try {
                        var result = await client.sendText(message.from, "Teste OK");
                        console.log(result);
                    } catch (e) {
                        console.log(e)
                    }
                    break;
                case msg.BITCOIN:
                    let cotacao = "";
                    try {
                        cotacao = await bitcoin.getCurrency();
                        var result = await client.sendText(message.from, cotacao);
                        console.log(result);
                    } catch (e) {
                        console.log(e);
                    }
                    break;
                default:
                    try {
                        var result = await client.sendText(message.from, "*Não entendi o que você falou.*");
                        console.log(result);
                    } catch (e) {
                        console.log(e);
                    }

            }
        })
    }
}

export default Index;
const index = new Index();
index.createBot();
