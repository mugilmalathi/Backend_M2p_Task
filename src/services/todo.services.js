const todoModel = require("../model/todo.model");

module.exports = {
    list: async () =>{
        try{
            let records = await todoModel.find().lean().exec();
            return records;
        }
        catch (ex){
            throw ex;
        }
    },

    get: async(id) =>{
        try{
            let record = await todoModel.findById(id);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    create: async (fields) =>{
        try{
            let record = await todoModel.create(fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    update: async (id, fields) => {
        try{
            let record = await todoModel.findByIdAndUpdate(id, fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    delete: async (id) =>{
        try{
            let record = await todoModel.findByIdAndDelete(id, {deleted: true});
            return record;
        }
        catch (ex){
            throw ex;
        }
    }
}