// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcryptjs'
import { Model } from 'mongoose'
import { MatchUpdateDto, UserUpdateDto } from './users.dto'
import { Court, User } from './users.schema'

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
		return (user && user.venue && user.venue.courts[0]) || ({} as Court)
	}

	async getUsers() {
		const users = (await this.userModel.find().lean()).map(({ name, userId, venue }) => ({ userId, name, venue }))
		return users
	}

	async update(userId: number, dto: UserUpdateDto): Promise<User> {
		await this.userModel.updateOne({ userId }, dto)

		return await this.userModel.findOne({ userId })
	}

	async updatePassword(userId: number, newPassword: string): Promise<User> {
		const password = await bcrypt.hashSync(newPassword)
		await this.userModel.updateOne({ userId }, { $set: { password, updatedAt: Date.now() } })

		return await this.findOne(userId)
	}

	async updateMatch(userId: number, courtId: number, matchDto: MatchUpdateDto): Promise<User> {

		return await this.userModel.findOneAndUpdate(
			{
			  userId,
			  'venue.courts': {
				$elemMatch: {
				  courtId,
				  'matches.id': matchDto.match.id,
				},
			  },
			},
			{
			  $set: {
				'venue.courts.$[court].matches.$[match]': matchDto.match,
			  },
			},
			{
			  new: true,
			  arrayFilters: [
				{ 'court.courtId': +courtId },
				{ 'match.id': +matchDto.match.id },
			  ],
			},
		  )


	}
}
