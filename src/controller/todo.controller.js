const service = require("./../services/todo.services")

module.exports = {
    list: async (req, res, next) => {
        try{
            const list = await service.list(req.body);
            res.status(201).send(list);
            next()
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    get: async (req, res, next) => {
        try{
            const record = await service.get(req.params.id);
            res.status(201).send(record);
            next()
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    create: async (req, res, next) => {
        try{
            req.body.user_id = req.user._id
            const record = await service.create(req.body);
            res.status(201).send(record)
            next()
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    update: async (req, res) => {
        try{
            const record = await service.update(req.params.id, req.body);
            res.status(201).send(record);
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },

    delete: async (req, res) =>{
        try{
            const record = await service.delete(req.params.id);
            res.status(204).send(record);
        }
        catch (ex){
            console.error(ex);
            res.status(500).json({error: ex.message});
        }
    },
}