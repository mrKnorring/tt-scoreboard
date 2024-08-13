// main.ts
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'

import { Logger } from '@nestjs/common'
import * as session from 'express-session'
import * as hbs from 'hbs'
import * as passport from 'passport'
import { config } from './config'
import flash = require('connect-flash')

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.useStaticAssets(join(__dirname, '..', 'public'))
	app.setBaseViewsDir(join(__dirname, '..', 'public/views'))
	app.setViewEngine('hbs')
	app.set('view options', { layout: 'layouts/main' })

	hbs.registerHelper('json', (context: object) => {
		return JSON.stringify(context)
	})

	app.use(
		session({
			secret: config.SECRET,
			resave: false,
			saveUninitialized: false
		})
	)

	app.use(passport.initialize())
	app.use(passport.session())
	app.use(flash())

	await app.listen(config.PORT, () => Logger.log(`Listening on port: ${config.PORT}`))
}
bootstrap()
