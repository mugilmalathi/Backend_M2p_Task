const doneModel = require("../model/done.model");

module.exports = {
    list: async () =>{
        try{
            let records = await doneModel.find().lean().exec();
            return records;
        }
        catch (ex){
            throw ex;
        }
    },

    get: async(id) =>{
        try{
            let record = await doneModel.findById(id);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    create: async (fields) =>{
        try{
            let record = await doneModel.create(fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    update: async (id, fields) => {
        try{
            let record = await doneModel.findByIdAndUpdate(id, fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    delete: async (id) =>{
        try{
            let record = await doneModel.findByIdAndDelete(id, {deleted: true});
            return record;
        }
        catch (ex){
            throw ex;
        }
    }
}