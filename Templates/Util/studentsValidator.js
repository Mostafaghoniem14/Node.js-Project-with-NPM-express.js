const Ajv = require("ajv");
const ajv = new Ajv();
const schema = {
    "type":"object",
    "properties" : {
        "name" : {
            "type" : "string",
        }
    },
    "required":["name"],
    "maxProperties" : 1,
    "minProperties" : 1,
};
module.exports= ajv.compile(schema);