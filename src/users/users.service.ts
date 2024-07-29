// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { BgColorEnum, Court, FontColorEnum, User } from 'src/interfaces'

@Injectable()
export class UsersService {
	private readonly users: User[]

	constructor() {
		this.users = [
			{
				userId: 1,
				username: 'lpk',
				name: 'Linköpings PK',
				password: 'pingis',
				court: {
					title: 'Div 3 ÖSSÖ',
					style: {
						font: FontColorEnum.white,
						bg: BgColorEnum.dark
					},
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
						},
						{
							id: 3,
							table: 'Bord 5-6',
							homeTeam: {
								score: 3,
								name: 'Spårvägen C1',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3202'
							},
							awayTeam: {
								score: 3,
								name: 'Västers BTK C2',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3345'
							}
						},
						{
							id: 4,
							table: 'Bord 7-8',
							homeTeam: {
								score: 1,
								name: 'Ljungsbro BTK B',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3033'
							},
							awayTeam: {
								score: 5,
								name: 'Huskvarna AI BTK A',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2875'
							}
						}
					]
				}
			},
			{
				userId: 2,
				username: 'iks',
				name: 'IK Sirius BTK',
				password: 'pingis',
				court: {
					title: 'Div 2 Damer Norra',
					style: {
						bg: BgColorEnum.blue,
						font: FontColorEnum.white
					},
					matches: [
						{
							id: 1,
							table: 'Bord 1-2',
							homeTeam: {
								score: 3,
								name: 'Ängby SK D',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3366'
							},
							awayTeam: {
								score: 2,
								name: 'IK Sirius BTK',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/6487'
							}
						},
						{
							id: 2,
							table: 'Bord 3-4',
							homeTeam: {
								score: 1,
								name: 'Spårvägens BTK D1',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3202'
							},
							awayTeam: {
								score: 6,
								name: 'Djurgårdens IF BTF A1',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2773'
							}
						},
						{
							id: 3,
							table: 'Bord 5-6',
							homeTeam: {
								score: 5,
								name: 'Köpings BTK',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3000'
							},
							awayTeam: {
								score: 3,
								name: 'Stratos Enköping BTK',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3216'
							}
						},
						{
							id: 4,
							table: 'Bord 7-8',
							homeTeam: {
								score: 4,
								name: 'IFK Österåkers BTK',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2933'
							},
							awayTeam: {
								score: 1,
								name: 'IFA Eskilstuna',
								image:
									'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/22113'
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

	async getUsers() {
		const users = this.users.map(({ name, userId }) => ({ userId, name }))
		return users
	}
}
