# react-native-for-wordpress
react native for wordpress

# TURKISH LANGUAGE VERSION

<img src="https://github.com/stnc/react-native-for-wordpress/blob/master/dummy/home.png?raw=true" alt="home.png">

<img src="https://github.com/stnc/react-native-for-wordpress/blob/master/dummy/profil.png?raw=true" alt="profil.png">

<img src="https://github.com/stnc/react-native-for-wordpress/blob/master/dummy/register.png?raw=true" alt="register.png">




# used wordpress extension
https://wordpress.org/plugins/wp-ulike/


## How To Get Post Likes Number?
Make use of the following function in WP Loop:

if (function_exists('wp_ulike_get_post_likes')):
	echo wp_ulike_get_post_likes(get_the_ID());
endif;

## How To Get Comment Likes Number?
Make use of the following function in your comments loop:


if (function_exists('wp_ulike_get_comment_likes')):
	echo wp_ulike_get_comment_likes(get_comment_ID());
endif;


## funcitons.php add (for wordpress api)

			//like add post
        add_action( 'rest_api_init', 'stnc_register_ulike' );
        function stnc_register_ulike() {
            register_rest_field( 'post',
                                '_liked',
                                array(
                                      'get_callback'    => 'stnc_get_ulike',
                                      'update_callback' => 'stnc_update_ulike',
                                      'schema'          => null,
                                      )
                                );
        }


        
        /**
         * Handler for getting custom field data.
         */
        function stnc_get_ulike( $object, $field_name, $request ) {
            return get_post_meta( $object[ 'id' ], $field_name );
        }
        
        /**
         * Handler for updating custom field data.
         */
        function stnc_update_ulike( $value, $object, $field_name ) {
            if ( ! $value || ! is_string( $value ) ) {
                return;
            }
            
            return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
        
        }


https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/


