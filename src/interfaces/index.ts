export interface User {
	userId: number
	username: string
	password: string
	name: string
	venue: Venue
}

export interface Venue {
	name: string
	courts: Court[]
}

export interface Court {
	courtId: number
	title: string
	style: {
		bg: TBgColor
		font: TFontColor
	}
	matches: Match[]
}

export interface Match {
	id: number
	table: string
	homeTeam: Team
	awayTeam: Team
}

export interface Team {
	score: number
	name: string
	image: string
}

export type TBgColor =
	| 'bg-black'
	| 'bg-gray-700'
	| 'bg-blue-700'
	| 'bg-red-700'
	| 'bg-green-700'
	| 'bg-yellow-400'
	| 'bg-orange-400'
	| 'bg-purple-700'
	| ''

export enum BgColorEnum {
	dark = 'bg-black',
	blue = 'bg-blue-700',
	gray = 'bg-gray-700',
	red = 'bg-red-700',
	green = 'bg-green-700',
	purple = 'bg-purple-700',
	yellow = 'bg-yellow-400',
	orange = 'bg-orange-400',
	white = ''
}

export type TFontColor = 'text-black' | 'text-white'

export enum FontColorEnum {
	dark = 'text-black',
	white = 'text-white'
}
