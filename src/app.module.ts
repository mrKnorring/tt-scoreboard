import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'
import { ScheduleModule } from '@nestjs/schedule'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { LoggingInterceptor } from './common/interceptors/logger.interceptor'
import { config, validationSchema } from './config'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({ validationSchema }),
		MongooseModule.forRoot(config.DB_CONNECTION_STRING),
		ScheduleModule.forRoot(),
		AuthModule,
		UsersModule
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor
		}
	]
})
export class AppModule {}
