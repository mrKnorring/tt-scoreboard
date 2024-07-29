// src/app.controller.ts
import { Controller, Get, Param, Post, Render, Req, Request, Res, UseFilters, UseGuards } from '@nestjs/common'
import { Response } from 'express'

import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter'
import { AuthenticatedGuard } from './common/guards/authenticated.guard'
import { LoginGuard } from './common/guards/login.guard'
import { UsersService } from './users/users.service'

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
	constructor(private usersService: UsersService) {}

	@Get('/')
	@Render('dashboard')
	index(): { message: string } {
		return { message: 'hello world' }
	}

	@Get('/login')
	@Render('login')
	login(@Request() req): { message: string } {
		return { message: req.flash('loginError') }
	}

	@UseGuards(LoginGuard)
	@Post('/login')
	loggingIn(@Res() res: Response) {
		res.redirect('/home')
	}

	@UseGuards(AuthenticatedGuard)
	@Get('/home')
	@Render('home')
	getHome(@Request() req) {
		return { user: req.user }
	}

	@Get('/logout')
	logout(@Request() req, @Res() res: Response) {
		req.logout()
		res.redirect('/')
	}

	@Get('public/*')
	test(@Req() req, @Res() res: Response) {
		const url = req.url.split('/public')[1]
		return res.sendFile(url, { root: 'public' })
	}

	@Get('court/:userId')
	async court(@Param('userId') userId: string, @Res() res: Response) {
		const court = await this.usersService.getCourt(userId)
		const layoutExt = court.color ? `-${court.color}` : ''
		res.render('court', { layout: `main${layoutExt}`, court })
	}
}
