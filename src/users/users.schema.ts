import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ versionKey: false })
export class Team {
	@Prop({
		type: Number,
		default: 0
	})
	score: number

	@Prop({
		type: String,
		required: true
	})
	name: string

	@Prop({
		type: String
	})
	image: string
}
export type TeamDocument = Team & Document
export const TeamSchema = SchemaFactory.createForClass(Team)

@Schema({ versionKey: false })
export class Match {
	@Prop({
		type: Number
	})
	id: number

	@Prop({
		type: String,
		required: true
	})
	table: string

	@Prop({
		type: TeamSchema
	})
	homeTeam: TeamDocument

	@Prop({
		type: TeamSchema
	})
	awayTeam: TeamDocument
}
export type MatchDocument = Match & Document
export const MatchSchema = SchemaFactory.createForClass(Match)

@Schema({ versionKey: false })
export class Style {
	@Prop({
		type: String
	})
	bg: string

	@Prop({
		type: String
	})
	font: string
}
export type StyleDocument = Style & Document
export const StyleSchema = SchemaFactory.createForClass(Style)

@Schema({ versionKey: false })
export class Court {
	@Prop({
		type: Number,
		required: true,
		unique: true
	})
	courtId: number

	@Prop({
		type: String
	})
	title: string

	@Prop({
		type: StyleSchema
	})
	style: Style

	@Prop({
		type: [MatchSchema]
	})
	matches: Match[]
}
export type CourtDocument = Court & Document
export const CourtSchema = SchemaFactory.createForClass(Court)

@Schema({ versionKey: false })
export class Venue {
	@Prop({
		type: String
	})
	name: string

	@Prop({
		type: [CourtSchema]
	})
	courts: [Court]
}
export type VenueDocument = Venue & Document
export const VenueSchema = SchemaFactory.createForClass(Venue)

@Schema({ versionKey: false, timestamps: true })
export class User {
	@Prop({
		type: Number,
		unique: true,
		required: true
	})
	userId: number

	@Prop({
		type: String,
		unique: true,
		required: true
	})
	username: string

	@Prop({
		type: String
	})
	name: string

	@Prop({
		type: String
	})
	password: string

	@Prop({
		type: VenueSchema
	})
	venue: Venue
}
export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
