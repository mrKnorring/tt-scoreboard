import * as dotenv from 'dotenv'
import * as Joi from 'joi'

dotenv.config()

export class ConfigService {
	constructor() {}

	get DB_CONNECTION_STRING(): string {
		return process.env.DB_CONNECTION_STRING
	}

	get NODE_ENV(): string {
		return process.env.NODE_ENV
	}

	get SECRET(): string {
		return process.env.SECRET
	}

	get PORT(): number {
		return +process.env.PORT
	}
}

export const validationSchema: Joi.ObjectSchema = Joi.object({
	DB_CONNECTION_STRING: Joi.string().required(),

	NODE_ENV: Joi.string().valid('development', 'staging', 'production').default('development'),

	PORT: Joi.number().default(3000),

	SECRET: Joi.string().required()
})
