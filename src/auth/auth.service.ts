// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.usersService.getUser(username)
		if (user && user.password === pass) {
			const { name, userId, username } = user
			return { name, userId, username }
		}
		return null
	}
}
