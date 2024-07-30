// src/app.controller.ts
import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	Render,
	Req,
	Request,
	Res,
	UseFilters,
	UseGuards
} from '@nestjs/common'
import { Response } from 'express'

import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter'
import { AuthenticatedGuard } from './common/guards/authenticated.guard'
import { LoginGuard } from './common/guards/login.guard'
import { UserUpdateDto } from './users/users.dto'
import { UsersService } from './users/users.service'

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
	constructor(private usersService: UsersService) {}

	@Get('/')
	@Render('dashboard')
	async index() {
		const users = await this.usersService.getUsers()
		return { users }
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
	async getHome(@Request() req) {
		const user = await this.usersService.findOne(+req.user.userId)
		return { user }
	}

	@Get('/logout')
	logout(@Request() req, @Res() res: Response) {
		req.logout(req.user, (err) => {
			if (err) res.status(500).json({ message: 'Error during logout.' })
			else {
				res.redirect('/')
			}
		})
	}

	@Get('public/*')
	test(@Req() req, @Res() res: Response) {
		const url = req.url.split('/public')[1]
		return res.sendFile(url, { root: 'public' })
	}

	@Get('/court')
	missingCourtId(@Res() res: Response) {
		res.redirect('/')
	}

	@Get('court/:courtId')
	@Render('court')
	async court(@Param('courtId') courtId: string, @Res() res: Response) {
		const court = await this.usersService.getCourt(courtId)
		if (!court.title) res.redirect('/')
		const { title, matches, style } = court
		return { title, matches, fontColor: style.font, bgColor: style.bg }
	}

	@UseGuards(AuthenticatedGuard)
	@Put('users')
	async updateUser(@Request() req, @Body() dto: UserUpdateDto) {
		const userId = +req.user.id
		return await this.usersService.update(userId, dto)
	}
}
