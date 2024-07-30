import * as mongoose from 'mongoose'

export const TeamSchema = new mongoose.Schema({
	score: Number,
	name: String,
	image: String
})

export const MatchSchema = new mongoose.Schema({
	id: Number,
	table: String,
	homeTeam: TeamSchema,
	awayTeam: TeamSchema
})

export const StyleSchema = new mongoose.Schema({
	bg: String,
	font: String
})

export const CourtSchema = new mongoose.Schema({
	courtId: Number,
	title: String,
	style: StyleSchema,
	matches: [MatchSchema]
})

export const VenueSchema = new mongoose.Schema({
	name: String,
	courts: [CourtSchema]
})

export const UserSchema = new mongoose.Schema({
	userId: Number,
	username: String,
	password: String,
	name: String,
	venue: VenueSchema,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})
