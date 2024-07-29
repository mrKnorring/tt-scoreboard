export interface User {
	userId: number
	username: string
	password: string
	name: string
	court: Court
}

export interface Court {
	title: string
	color: 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'orange' | 'purple' | ''
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
