import * as dotenv from 'dotenv'
import * as Joi from 'joi'

dotenv.config()

export class ConfigService {
	constructor() {}

	get DB_CONNECTION_STRING(): string {
		return process.env.DB_CONNECTION_STRING
	}
}

export const validationSchema: Joi.ObjectSchema = Joi.object({
	DB_CONNECTION_STRING: Joi.string().required(),

	NODE_ENV: Joi.string()
		.valid('development', 'staging', 'production')
		.default('development')
})
