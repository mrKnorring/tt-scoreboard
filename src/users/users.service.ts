// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { Court, User } from 'src/interfaces'

@Injectable()
export class UsersService {
	private readonly users: User[]

	constructor() {
		this.users = [
			{
				userId: 1,
				username: 'lpk',
				password: 'pingis',
				court: {
					title: 'Div 3 ÖSSÖ',
					color: 'dark',
					matches: [
						{
							id: 1,
							table: 'Bord 1-2',
							homeTeam: {
								score: 3,
								name: 'Linköpings PK C3',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3027'
							},
							awayTeam: {
								score: 2,
								name: 'IF Nocropensarna B2',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2919'
							}
						},
						{
							id: 2,
							table: 'Bord 3-4',
							homeTeam: {
								score: 1,
								name: 'Tyresö BTK B2',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3276'
							},
							awayTeam: {
								score: 6,
								name: 'Safir A',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2727'
							}
						}
					]
				}
			}
		]
	}

	async findOne(username: string): Promise<any> {
		return this.users.find(user => user.username === username)
	}

	async getCourt(id: string): Promise<Court> {
		const user = this.users.find(({ userId }) => userId === +id)
		return user?.court || ({} as Court)
	}
}
