// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) {}

	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.usersService.getUser(username)
		if (user && bcrypt.compareSync(password, user.password)) {
			const { name, userId, username } = user
			return { name, userId, username }
		}
		return null
	}
}
