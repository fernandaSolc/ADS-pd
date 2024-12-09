import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  JWT_PRIVATE_KEY_PATH: Joi.string().required(), // Caminho obrigatório para a chave privada
  JWT_PUBLIC_KEY_PATH: Joi.string().required(),  // Caminho obrigatório para a chave pública
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(), // Validações para Google OAuth 2.0
  GOOGLE_CLIENT_SECRET: Joi.string().required(),
});
