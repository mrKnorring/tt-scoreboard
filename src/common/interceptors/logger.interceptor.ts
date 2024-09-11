import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	constructor() {}
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const { method, url } = context.switchToHttp().getRequest()
		const response = context.switchToHttp().getResponse()
		const status = response.statusCode
		const now = Date.now()

		if (url.includes('public')) {
			// If the URL contains "public", skip logging and proceed without further action
			return next.handle()
		}

		return next
			.handle()
			.pipe(
				tap(() =>
					Logger.log(`${method} ${url} time=${Date.now() - now}ms status=${status}`, context.getClass().name)
				)
			)
	}
}
