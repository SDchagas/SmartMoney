import { getRealm } from "./Realm";

export const saveEntry = async () => {
    const realm = getRealm();

    realm.write(() => { //realme write abre uma transação, no caso escreve os dados
        const data ={
            id: 'string',
            amount: 'double',
            entryAt: 'date',
            isInit: 'bool',
        };

        realm.create('Entry', data, true);  //entry é o schema, data é o que sera gravado e true define que sempre atualiza se ja existir
    });
};