import Joi from 'joi';

export const validateName = name => {
  let schema = Joi.object({
    name: Joi.string().pattern(new RegExp('^[a-zA-Z ]{3,30}$')),
  });
  const response = schema.validate({name});
  // console.log("🚀 ~ file: Validate.js:8 ~ validateName ~ response:", response)
  const error = response.error;
  
  if (error) {
    const responseError = {
      error: error.details[0].message
    };
    // console.log("🚀 ~ file: Validate.js:13 ~ validateName ~ error:", error)
    return responseError;
  }
  const responseSuccess = {
    success: 'Match with Regular Expression',
  };

  return responseSuccess;
};
