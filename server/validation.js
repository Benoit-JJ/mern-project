// --------------------------------Validations--------------------------------
const Joi = require("@hapi/joi");

// --------------------------------Enregistrement de la validation--------------------------------
const registerValidation = (data) => {
  console.log(data);
  const schema = Joi.object({
    name: Joi.string().min(6),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
  });
  return schema.validate(data);
};

//--------------------------------LOGIN--------------------------------
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
