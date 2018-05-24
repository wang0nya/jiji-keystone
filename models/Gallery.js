var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Gallery.add({
	name: { type: String, required: true },
	description: { type: Types.Textarea, height: 150 },
	photographer: { type: String, required: false },
	twitter: { type: String, required: false },
	instagram: { type: String, required: false },
	camera: { type: String, required: false },
	lens: { type: String, required: false },
	publishedDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Gallery.register();
