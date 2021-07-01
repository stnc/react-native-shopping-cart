import { createStackNavigator } from 'react-navigation';

import DetailBlog from '../screens/posts/DetailBlog';

const DetailBlogTab = createStackNavigator({
  DetailBlog: DetailBlog,
},
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#0091EA',
          },
          headerTintColor: '#fff',
          title: 'detail news',
      },
  }
);


export default DetailBlogTab;
