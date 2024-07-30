// src/common/filters/auth-exceptions.filter.ts
import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	ForbiddenException,
	HttpException,
	UnauthorizedException
} from '@nestjs/common'
import { Request, Response } from 'express'

interface IRequestFlash extends Request {
	flash: any
}

@Catch(HttpException)
export class AuthExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()
		const request = ctx.getRequest<IRequestFlash>()

		if (exception instanceof UnauthorizedException || exception instanceof ForbiddenException) {
			request.flash('loginError', 'Inloggning misslyckades! Försök igen ...')
			response.redirect('/login')
		} else {
			response.redirect('/error')
		}
	}
}
