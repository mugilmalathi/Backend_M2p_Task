const service = require("./../services/done.services");

module.exports = {
    list: async (req, res) => {
        try{
            const list = await service.list(req.body);
            res.send(list);
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    get: async (req, res) => {
        try{
            const record = await service.get(req.params.id);
            res.send(record);
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    create: async (req, res) => {
        try{
            const record = await service.create(req.body);
            res.send(record)
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    update: async (req, res) => {
        try{
            const record = await service.update(req.params.id, req.body);
            res.send(record);
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    delete: async (req, res) =>{
        try{
            const record = await service.delete(req.params.id);
            res.send(record);
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },
}