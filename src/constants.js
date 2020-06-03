export const SPRITESHEET_KEY = '0123456789abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@£$€%^&*#[]{}()<>'
export const BLANK_TILE_STR = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
export const BLANK_ENTITY_STR = '.................................................................................................................................................................................................................................'

export const SIZES = {
	TILE: 16
}

export const TYPES = {
	TILE: 0,
	ENTITY: 1,
	COLLISION: 2,
	TRIGGER: 3,
	OVERWORLD: 4,
}

export const DIRECTIONS = { // based on character facing in spritesheet
	NORTH: 1,
	EAST: 2,
	SOUTH: 3,
	WEST: 4,
}

export const SPEEDS = { // seconds
	WALK: 0.3,
	TRAVEL: 1.5,
}
