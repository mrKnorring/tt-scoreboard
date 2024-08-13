import { Match } from "src/interfaces"

export interface StyleUpdateDto {
	bg: string
	font: string
}

export interface MatchUpdateDto {
	score: number
	name: string
	image: string
}

export interface CourtUpdateDto {
	courtId: number
	title: string
	style: StyleUpdateDto
	matches: MatchUpdateDto[]
}

export interface VenueUpdateDto {
	name: string
	courts: CourtUpdateDto[]
}

export interface UserUpdateDto {
	venue: VenueUpdateDto
}

export interface PasswordUpdateDto {
	newPassword: string
	confirmPassword: string
}

export interface MatchUpdateDto {
	courtId: string
	match: Match
}
