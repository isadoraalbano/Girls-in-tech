import fs from 'fs';
const merchants = fs.readFileSync('../data/merchants.json')
let newMerchants = JSON.parse(merchants);
class MerchantController {

    static findAll(req, res) {
        try {
            return res
                .status(200)
                .json(newMerchants);
        }
        catch (error) {
            return res
                .status(500)
                .json(error.message);
        };
    };

    static findById(req, res) {
        const { id } = req.params;
        try {
            let foundMerchant = findMerchant(id);
            return res
                .status(200)
                .json(foundMerchant);
        }
        catch (error) {
            return res.status(500).json(error.message)
        };
    };

    static createMerchant(req, res) {
        const createdMerchant = req.body;
        try {
            newMerchants.push(createdMerchant);
            return res
                .status(200)
                .json(`Restaurante criado com sucesso!`);
        }
        catch (error) {
            return res
                .status(500)
                .json(error.message);
        };
    };



    static updateMerchant(req, res) {
        const { id } = req.params;
        try {
            const index = findIndex(id);
            newMerchants[index] = req.body;
            return res
                .status(200)
                .json(`Restaurante atualizado com sucesso!`);
        }
        catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static updateStatus(req, res) {
        const { id } = req.params;
        try {
            const index = findIndex(id);
            newMerchants[index].status = req.body;
            return res
                .status(200)
                .json(`Status do restaurante atualizado com sucesso!`);
        }
        catch (error) {
            return res
                .status(500)
                .json(error.message);
        };
    };

    static sendMessage(req, res) {
        const { id } = req.params
        try {
            const date = Date.now()
            const dateMessage = new Date(date);
            const index = findIndex(id)
            newMerchants[index][message] = { text: req.body.message, date: dateMessage }
            return res
                .status(200)
                .json(`A mensagem foi enviada com sucesso ao restaurante ${newMerchants[index].merchant}!`)
        }
        catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }


    static deleteMerchant(req, res) {
        const { id } = req.params;
        try {
            const index = findIndex(id);
            newMerchants.splice(index, 1);
            return res
                .status(200)
                .json(`Restaurante ${id} deletado com sucesso!`);
        }
        catch (error) {
            return res
                .status(500)
                .json(error.message);
        };
    };

}

function findMerchant(id) {
    return newMerchants.find(merchant => merchant.merchantId == id)

}

function findIndex(id) {
    return newMerchants.findIndex(merchant => merchant.merchantId == id)

}


export default MerchantController;