import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ScheduleModule } from '@nestjs/schedule'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
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
	providers: [AppService]
})
export class AppModule {}
