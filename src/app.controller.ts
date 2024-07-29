// src/app.controller.ts
import { Controller, Get, Post, Render, Req, Request, Res, UseFilters, UseGuards } from '@nestjs/common'
import { Response } from 'express'

import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter'
import { AuthenticatedGuard } from './common/guards/authenticated.guard'
import { LoginGuard } from './common/guards/login.guard'

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
	@Get('/')
	@Render('login')
	index(@Request() req): { message: string } {
		return { message: req.flash('loginError') }
	}

	@UseGuards(LoginGuard)
	@Post('/login')
	login(@Res() res: Response) {
		res.redirect('/home')
	}

	@UseGuards(AuthenticatedGuard)
	@Get('/home')
	@Render('home')
	getHome(@Request() req) {
		return { user: req.user }
	}

	@UseGuards(AuthenticatedGuard)
	@Get('/profile')
	@Render('profile')
	getProfile(@Request() req) {
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
}
