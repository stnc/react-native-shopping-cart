const BaseConfig = {
	siteBaseUrl: 'http://wp.test/',
};

const clientConfig = {
	siteUrl: BaseConfig.siteBaseUrl,
	LoginUrl: BaseConfig.siteBaseUrl+'wp-json/jwt-auth/v1/token',
	RegisterUrl: BaseConfig.siteBaseUrl+'wp-json/wp/v2/users/',
	RegisterUrl_Extension: BaseConfig.siteBaseUrl+'wp-json/wp/v2/users/register'
};

export default clientConfig;