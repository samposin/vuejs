import VueRouter from 'vue-router'
// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Form from './pages/Form'
//import NestedAboutUs from './pages/NestedAboutUs'
import Users from './pages/Users'
import User from './pages/User'
import UserList from './pages/UserList'
import UserProfile from './pages/UserProfile'
import UserPosts from './pages/UserPosts'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    component: Home,
    meta: {
      auth: undefined,
      title: 'Home Page - App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our app.'
        }
      ]
    }
  },
  {
    path: '/dynamic-form',
    name: 'dynamic_form',
    title: 'Dynamic Form',
    component: Form,
    meta: {
      auth: false,
      title: 'Dynamic Form Page - App',
      metaTags: [
        {
          name: 'description',
          content: 'The Dynamic Form page of our app.'
        },
        {
          property: 'og:description',
          content: 'The Dynamic Form page of our app.'
        }
      ]
    }
  },
  {
    path: '/users',
    //name: 'users',
    title: 'Users',
    component: Users,
    meta: {
      auth: false,
      title: 'Users - App',
      metaTags: [
        {
          name: 'description',
          content: 'The Users page of our app.'
        },
        {
          property: 'og:description',
          content: 'The Users page of our app.'
        }
      ]
    },
    children: [
      {
        path: ':id',
        //name: 'user',
        title: 'User',
        component: User,
        meta: {
          auth: false,
          title: 'User - App',
          metaTags: [
            {
              name: 'description',
              content: 'The User page of our app.'
            },
            {
              property: 'og:description',
              content: 'The User page of our app.'
            }
          ]
        },
        children: [
          {
            path: '/',
            name: 'user_profile',
            title: 'User Profile',
            component: UserProfile,
            meta: {
              auth: false,
              title: 'User Profile - App',
              metaTags: [
                {
                  name: 'description',
                  content: 'The User Profile page of our app.'
                },
                {
                  property: 'og:description',
                  content: 'The User Profile page of our app.'
                }
              ]
            },
          },
          {
            // UserPosts will be rendered inside User's <router-view>
            // when /users/:id/posts is matched
            path: 'posts',
            name: 'user_posts',
            title: 'User Posts',
            component: UserPosts,
            meta: {
              auth: false,
              title: 'User Posts - App',
              metaTags: [
                {
                  name: 'description',
                  content: 'The User Posts page of our app.'
                },
                {
                  property: 'og:description',
                  content: 'The User Posts page of our app.'
                }
              ]
            },
          }
        ]
      },
      {
        path: '',
        name: 'user_list',
        title: 'User List',
        component: UserList,
        meta: {
          auth: false,
          title: 'User List - App',
          metaTags: [
            {
              name: 'description',
              content: 'The User List page of our app.'
            },
            {
              property: 'og:description',
              content: 'The User List page of our app.'
            }
          ]
        },
      },
    ]
  },
  {
    path: '/about-us',
    name: 'about_us',
    title: 'About Us',
    component: AboutUs,
    meta: {
      auth: false,
      title: 'Home Page - App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our app.'
        }
      ]
    }
  },
  {
    path: '/contact-us',
    name: 'contact_us',
    title: 'Contact Us',
    component: ContactUs,
    meta: {
      auth: false,
      title: 'Contact Us - App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our app.'
        }
      ]
    }
  }
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  Window.console.log(nearestWithTitle);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  //const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router