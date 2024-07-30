// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Court, User } from 'src/interfaces'
import { UserUpdateDto } from './users.dto'

@Injectable()
export class UsersService {
	constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

	async getUser(username: string): Promise<User> {
		return this.userModel.findOne({ username }).select({ _id: 0, __v: 0 }).lean()
	}

	async findOne(userId: number): Promise<User> {
		return this.userModel.findOne({ userId }).select({ _id: 0, __v: 0, password: 0 }).lean()
	}

	async getCourt(courtId: string): Promise<Court> {
		const user: User = await this.userModel
			.findOne({ 'venue.courts': { $elemMatch: { courtId: +courtId } } }, { 'venue.courts.$': 1 })
			.lean()
		return user?.venue?.courts[0] || ({} as Court)
	}

	async getUsers() {
		const users = (await this.userModel.find().lean()).map(({ name, userId, venue }) => ({ userId, name, venue }))
		return users
	}

	async update(userId: number, dto: UserUpdateDto): Promise<User> {
		await this.userModel.updateOne({ userId }, dto)

		return await this.userModel.findOne({ userId })
	}
}
