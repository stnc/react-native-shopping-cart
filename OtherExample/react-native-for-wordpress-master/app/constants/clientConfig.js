export const BaseConfig = {
	siteBaseUrl: 'http://api.biyoguvenlik.info.tr/',
	username:'Rest',
	password:'AU3Nl1GXhuNtCzhmey)CwOG!'
};

export const clientConfig = {
	siteUrl: BaseConfig.siteBaseUrl,
	TokenUrl: BaseConfig.siteBaseUrl+'wp-json/jwt-auth/v1/token',
	ValidateTokenUrl: BaseConfig.siteBaseUrl+'wp-json/jwt-auth/v1/token/validate',
	PostUrl: BaseConfig.siteBaseUrl+'wp-json/wp/v2/posts',
	PostUrlEmbed: BaseConfig.siteBaseUrl+'wp-json/wp/v2/posts/?_embed',
	LoginUrl: BaseConfig.siteBaseUrl+'wp-json/jwt-auth/v1/token',
	MediaUrl: BaseConfig.siteBaseUrl+'wp-json/wp/v2/media',
	RegisterUrl: BaseConfig.siteBaseUrl+'wp-json/wp/v2/users',
	RegisterUrl_Extension: BaseConfig.siteBaseUrl+'wp-json/wp/v2/users/register'
};

export const MediaConfig = {
	defaultPostsImage: 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg'
};



// export default clientConfig;
// export default MediaConfig;