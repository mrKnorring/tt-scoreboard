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
				venue: {
					name: 'Stångåhallen',
					courts: [
						{
							courtId: 1,
							title: 'Div 3 ÖSSÖ',
							style: {
								font: FontColorEnum.dark,
								bg: BgColorEnum.yellow
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
					]
				}
			},
			{
				userId: 2,
				username: 'iks',
				name: 'IK Sirius BTK',
				password: 'pingis',
				venue: {
					name: 'UTK-hallen',
					courts: [
						{
							courtId: 2,
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
						},
						{
							courtId: 5,
							title: 'Div 2 Herrar NSS',
							style: {
								bg: BgColorEnum.dark,
								font: FontColorEnum.white
							},
							matches: [
								{
									id: 1,
									table: '10:00 - Bord 1-2',
									homeTeam: {
										score: 3,
										name: 'Ängby SK C2',
										image:
											'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3366'
									},
									awayTeam: {
										score: 2,
										name: 'Norrtälje BTK',
										image:
											'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/23353'
									}
								},
								{
									id: 2,
									table: '10:00 - Bord 3-4',
									homeTeam: {
										score: 6,
										name: 'IK Sirius BTK B',
										image:
											'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/6487'
									},
									awayTeam: {
										score: 1,
										name: 'IFK Österåkers BTK B',
										image:
											'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2933'
									}
								}
								// {
								// 	id: 3,
								// 	table: '14:30 - Bord 1-2',
								// 	homeTeam: {
								// 		score: 0,
								// 		name: 'Norrtälje BTK',
								// 		image:
								// 			'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/23353'
								// 	},
								// 	awayTeam: {
								// 		score: 0,
								// 		name: 'IK Sirius BTK',
								// 		image:
								// 			'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/6487'
								// 	}
								// },
								// {
								// 	id: 4,
								// 	table: '14:30 - Bord 3-4',
								// 	homeTeam: {
								// 		score: 4,
								// 		name: 'IFK Österåkers BTK B',
								// 		image:
								// 			'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/2933'
								// 	},
								// 	awayTeam: {
								// 		score: 1,
								// 		name: 'Ängby SK C2',
								// 		image:
								// 			'https://res.cloudinary.com/mrknorring/image/upload/c_fill,h_300,w_300/pingiskalk/clubs/3366'
								// 	}
								// }
							]
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
		const venue = this.users
			.flatMap(u => u.venue)
			.flatMap(v => v.courts)
			.find(({ courtId }) => courtId === +id)
		return venue || ({} as Court)
	}

	async getUsers() {
		const users = this.users.map(({ name, userId, venue }) => ({ userId, name, venue }))
		return users
	}
}
