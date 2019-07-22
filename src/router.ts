import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Project from './views/Project.vue';
import Page from './views/Page.vue';
import Service from './views/Service.vue';
import Section from './views/Section.vue';

import cc from './content/core.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Cruzat.Media // Interactive + Sound',
        metaTags: [
          {
            name: 'description',
            content: 'You have a web project in need of developers, you have a podcast to record, you have a digital creative team to support. Let\'s talk about what you want to get done.',
          },
          {
            name: 'og:description',
            content: 'You have a web project in need of developers, you have a podcast to record, you have a digital creative team to support. Let\'s talk about what you want to get done.',
          },
          {
            name: 'keywords',
            content: 'interactive, sound, front end development, ux, ux strategy, wordpress, wordpress customization, css, sass, team support, portland, portland or, pdx, cruzat',
          },
          {
            name: 'og:keywords',
            content: 'interactive, sound, front end development, ux, ux strategy, wordpress, wordpress customization, css, sass, team support, portland, portland or, pdx, cruzat',
          },
        ],
      },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Section,
      meta: {
        title: 'Projects // Cruzat.Media',
        metaTags: [
          {
            name: 'description',
            content: 'In 2018 we worked on a number of web projects, including custom WordPress builds and development in Angular2. Take a look at what we have done and what we are doing.',
          },
          {
            name: 'og:description',
            content: 'In 2018 we worked on a number of web projects, including custom WordPress builds and development in Angular2. Take a look at what we have done and what we are doing.',
          },
          {
            name: 'keywords',
            content: 'interactive, sound, front end development, wordpress, vue, react, recording, podcast, css, ux',
          },
          {
            name: 'og:keywords',
            content: 'interactive, sound, front end development, wordpress, vue, react, recording, podcast, css, ux',
          },
        ],
      },
      props: {
        core: cc.pages.projects,
        flavor: 'projects',
        set: cc.projects,
      },
    },
    {
      path: '/projects/att-foundry',
      name: 'ATT',
      component: Project,
      meta: {
        title: 'ATT Foundry Website // Cruzat.Media/projects',
        metaTags: [
          {
            name: 'description',
            content: 'We built a fully responsive, custom WordPress website for AT&T\'s Foundry innovation group, joining forces with Portland OR\'s ConnectiveDX studio.',
          },
          {
            name: 'og:description',
            content: 'We built a fully responsive, custom WordPress website for AT&T\'s Foundry innovation group, joining forces with Portland OR\'s ConnectiveDX studio.',
          },
          {
            name: 'keywords',
            content: 'interactive, front end development, template, template development, wordpress, wordpress customization, AT&T, team support, css',
          },
          {
            name: 'og:keywords',
            content: 'interactive, front end development, template, template development, wordpress, wordpress customization, AT&T, team support, css',
          },
        ],
      },
      props: {
        core: cc.projects.attf,
        set: cc.projects,
        flavor: 'projects',
      },
    },
    {
      path: '/projects/the-collection',
      name: 'Collection',
      component: Project,
      meta: {
        title: 'The Collection // Cruzat.Media/projects',
        metaTags: [
          {
            name: 'description',
            content: '',
          },
          {
            name: 'og:description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'og:keywords',
            content: '',
          },
        ],
      },
      props: {
        core: cc.projects.coll,
        set: cc.projects,
        flavor: 'projects',
      },
    },
    {
      path: '/projects/modern-adventure',
      name: 'Modern Adventure',
      component: Project,
      meta: {
        title: 'Modern Adventure // Cruzat.Media/projects',
        metaTags: [
          {
            name: 'description',
            content: 'We built two subsites into an existing WordPress site for Portland OR\'s Modern Adventure. We helped them develop an online magazine and a branded Partner microsite template.',
          },
          {
            name: 'og:description',
            content: 'We built two subsites into an existing WordPress site for Portland OR\'s Modern Adventure. We helped them develop an online magazine and a branded Partner microsite template.',
          },
          {
            name: 'keywords',
            content: 'interactive, front end development, template, template development, wordpress, wordpress customization, Modern Adventure, team support, css',
          },
          {
            name: 'og:keywords',
            content: 'interactive, front end development, template, template development, wordpress, wordpress customization, Modern Adventure, team support, css',
          },
        ],
      },
      props: {
        core: cc.projects.ma,
        set: cc.projects,
        flavor: 'projects',
      },
    },
    {
      path: '/projects/ice',
      name: 'Industrial Commercial Electric',
      component: Project,
      meta: {
        title: 'Industrial Commercial Electric // Cruzat.Media/projects',
        metaTags: [
          {
            name: 'description',
            content: 'We upgraded an ancient static site from an archaic CMS to a modern, responsive WordPress site. We added a custom walled garden section of the site for internal employee use.',
          },
          {
            name: 'og:description',
            content: 'We upgraded an ancient static site from an archaic CMS to a modern, responsive WordPress site. We added a custom walled garden section of the site for internal employee use.',
          },
          {
            name: 'keywords',
            content: 'interactive, front end development, template, template development, wordpress, wordpress customization, Industrial Commercial Electric, team support, css',
          },
          {
            name: 'og:keywords',
            content: 'interactive, front end development, template, template development, wordpress, wordpress customization, Industrial Commercial Electric, team support, css',
          },
        ],
      },
      props: {
        core: cc.projects.ice,
        set: cc.projects,
        flavor: 'projects',
      },
    },
    {
      path: '/projects/music-for-podcasts',
      name: 'Music for Podcasts',
      component: Project,
      meta: {
        title: 'Music For Podcasts [MFP1] // Cruzat.Media/projects',
        metaTags: [
          {
            name: 'description',
            content: '',
          },
          {
            name: 'og:description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'og:keywords',
            content: '',
          },
        ],
      },
      props: {
        core: cc.projects.mfp,
        set: cc.projects,
        flavor: 'projects',
      },
    },
    {
      path: '/projects/camp-bell',
      name: 'Camp Bell',
      component: Project,
      meta: {
        title: 'Camp Bell // Cruzat.Media/projects',
        metaTags: [
          {
            name: 'description',
            content: 'We built a site in Vue.JS for an album release by an alt hip hop group with members in Portland, Chicago and Tenebris. It required thinking outside of the norms of user flow.',
          },
          {
            name: 'og:description',
            content: 'We built a site in Vue.JS for an album release by an alt hip hop group with members in Portland, Chicago and Tenebris. It required thinking outside of the norms of user flow.',
          },
          {
            name: 'keywords',
            content: 'interactive, front end development, css, vue, component, component development, Camp Bell, Sexual Campbell',
          },
          {
            name: 'og:keywords',
            content: 'interactive, front end development, css, vue, component, component development, Camp Bell, Sexual Campbell',
          },
        ],
      },
      props: {
        core: cc.projects.giac,
        set: cc.projects,
        flavor: 'projects',
      },
    },
    {
      path: '/services',
      name: 'Services',
      component: Section,
      meta: {
        title: 'Services // Cruzat.Media',
        metaTags: [
          {
            name: 'description',
            content: 'You have tasks, we have bandwidth. Whether web dev, audio or team support, Cruzat.Media can help you meet your goals and launch your endeavors in digital creative.',
          },
          {
            name: 'og:description',
            content: 'You have tasks, we have bandwidth. Whether web dev, audio or team support, Cruzat.Media can help you meet your goals and launch your endeavors in digital creative.',
          },
          {
            name: 'keywords',
            content: 'digital creative services, front end development, developer, wordpress, theme, component, customization, vue, react, css, team support',
          },
          {
            name: 'og:keywords',
            content: 'digital creative services, front end development, developer, wordpress, theme, component, customization, vue, react, css, team support',
          },
        ],
      },
      props: {
        core: cc.pages.services,
        flavor: 'services',
      },
    },
    {
      path: '/services/wordpress',
      name: 'WordPress',
      component: Service,
      meta: {
        title: 'WordPress Customization // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: 'Do you need your WordPress site updated, upgraded or optimized? Or built from scratch? Cruzat.Media has the expertise to customize your WordPress site to meet your needs.',
          },
          {
            name: 'og:description',
            content: 'Do you need your WordPress site updated, upgraded or optimized? Or built from scratch? Cruzat.Media has the expertise to customize your WordPress site to meet your needs.',
          },
          {
            name: 'keywords',
            content: 'wordpress, theme, customization, dashboard, template, development, update, upgrade, optimization, css, javascript, jquery',
          },
          {
            name: 'og:keywords',
            content: 'wordpress, theme, customization, dashboard, template, development, update, upgrade, optimization, css, javascript, jquery',
          },
        ],
      },
      props: {
        core: cc.services.wordpress,
        flavor: 'services',
      },
    },
    {
      path: '/services/front-end',
      name: 'Front End Development',
      component: Service,
      meta: {
        title: 'Front End Development // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: 'From the speed of JS to the stability of PHP, all roads lead to rendered HTML styled with CSS and energized with JavaScript. Cruzat.Media can help you translate comps to code.',
          },
          {
            name: 'og:description',
            content: 'From the speed of JS to the stability of PHP, all roads lead to rendered HTML styled with CSS and energized with JavaScript. Cruzat.Media can help you translate comps to code.',
          },
          {
            name: 'keywords',
            content: 'front end development, fed, developer, development, wordpress, angular, react, vue, theme, view, component, customization, javascript, jquery',
          },
          {
            name: 'og:keywords',
            content: 'front end development, fed, developer, development, wordpress, angular, react, vue, theme, view, component, customization, javascript, jquery',
          },
        ],
      },
      props: {
        core: cc.services.frontend,
        flavor: 'services',
      },
    },
    {
      path: '/services/ux-strategy',
      name: 'UX & Strategy',
      component: Service,
      meta: {
        title: 'UX & Strategy // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: 'There is an art to guiding a user through an experience, how to arrange its spaces, content and options. Cruzat.Media can help you get it right.',
          },
          {
            name: 'og:description',
            content: 'There is an art to guiding a user through an experience, how to arrange its spaces, content and options. Cruzat.Media can help you get it right.',
          },
          {
            name: 'keywords',
            content: 'ux, user experience, strategy, user flow, information architecture, content, content strategy, navigation, accessibility',
          },
          {
            name: 'og:keywords',
            content: 'ux, user experience, strategy, user flow, information architecture, content, content strategy, navigation, accessibility',
          },
        ],
      },
      props: {
        core: cc.services.ux,
        flavor: 'services',
      },
    },
    {
      path: '/services/css',
      name: 'CSS with Style',
      component: Service,
      meta: {
        title: 'CSS & Polish // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: 'The digital spaces we enjoy would look meh without CSS, the precision language of visual definition. Cruzat.Media will work to insure your presentation looks correct.',
          },
          {
            name: 'og:description',
            content: 'The digital spaces we enjoy would look meh without CSS, the precision language of visual definition. Cruzat.Media will work to insure your presentation looks correct.',
          },
          {
            name: 'keywords',
            content: 'css, cascading style sheets, responsive, mobile first, cross platform, device, smartphone, tablet, scss, sass',
          },
          {
            name: 'og:keywords',
            content: 'css, cascading style sheets, responsive, mobile first, cross platform, device, smartphone, tablet, scss, sass',
          },
        ],
      },
      props: {
        core: cc.services.css,
        flavor: 'services',
      },
    },
    {
      path: '/services/sound-design',
      name: 'Sound Design',
      component: Service,
      meta: {
        title: 'Sound Design // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: '',
          },
          {
            name: 'og:description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'og:keywords',
            content: '',
          },
        ],
      },
      props: {
        core: cc.services.sound,
        flavor: 'services',
      },
    },
    {
      path: '/services/team-support',
      name: 'Team Support',
      component: Service,
      meta: {
        title: 'Team Support // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: 'Large projects call for large kitchens, many cooks can cause confusion. Cruzat.Media can assist in organization, review, team management and quality assurance.',
          },
          {
            name: 'og:description',
            content: 'Large projects call for large kitchens, many cooks can cause confusion. Cruzat.Media can assist in organization, review, team management and quality assurance.',
          },
          {
            name: 'keywords',
            content: 'team, support, review, management, manager, project manager, quality assurance, QA, assistance, lead, developer',
          },
          {
            name: 'og:keywords',
            content: 'team, support, review, management, manager, project manager, quality assurance, QA, assistance, lead, developer',
          },
        ],
      },
      props: {
        core: cc.services.team,
        flavor: 'services',
      },
    },
    {
      path: '/services/audio-recording',
      name: 'Audio Recording',
      component: Service,
      meta: {
        title: 'Audio Recording // Cruzat.Media/services',
        metaTags: [
          {
            name: 'description',
            content: '',
          },
          {
            name: 'og:description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'og:keywords',
            content: '',
          },
        ],
      },
      props: {
        core: cc.services.recording,
        flavor: 'services',
      },
    },
    {
      path: '/about',
      name: 'About',
      component: Page,
      meta: {
        title: 'About // Cruzat.Media',
        metaTags: [
          {
            name: 'description',
            content: 'Founded in 2018 to pursue passions for interactive development with audio engineering, we seek challenging projects that allow us to explore their overlaps.',
          },
          {
            name: 'og:description',
            content: 'Founded in 2018 to pursue passions for interactive development with audio engineering, we seek challenging projects that allow us to explore their overlaps.',
          },
          {
            name: 'keywords',
            content: 'Cruzat.Media, cruzat, dan cruzat, interactive, developer, development, website, audio, portland',
          },
          {
            name: 'og:keywords',
            content: 'Cruzat.Media, cruzat, dan cruzat, interactive, developer, development, website, audio, portland',
          },
        ],
      },
      props: {
        core: cc.pages.about,
        flavor: 'about',
      },
    },
    {
      path: '/about/dan-cruzat',
      name: 'About Dan',
      component: Page,
      meta: {
        title: 'Dan Cruzat // Cruzat.Media/about',
        metaTags: [
          {
            name: 'description',
            content: 'Front end development, audio engineer, visual digital, music production, business owner, Dan wears a lot of hats. He is also great for a chat over coffee.',
          },
          {
            name: 'og:description',
            content: 'Front end development, audio engineer, visual digital, music production, business owner, Dan wears a lot of hats. He is also great for a chat over coffee.',
          },
          {
            name: 'keywords',
            content: 'cruzat, dan cruzat, p1rk5, E+C, thecruzat, Cruzat.Media, coffee, developer, engineer, portland, chicago',
          },
          {
            name: 'og:keywords',
            content: 'cruzat, dan cruzat, p1rk5, E+C, thecruzat, Cruzat.Media, coffee, developer, engineer, portland, chicago',
          },
        ],
      },
      props: {
        core: cc.pages.aboutDan,
        flavor: 'about\dan',
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Page,
      meta: {
        title: 'Contact // Cruzat.Media',
        metaTags: [
          {
            name: 'description',
            content: '',
          },
          {
            name: 'og:description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'og:keywords',
            content: '',
          },
        ],
      },
      props: {
        core: cc.pages.contact,
        flavor: 'contact',
      },
    },
    {
      path: '/ostara',
      name: 'Ostara',
      component: Page,
      meta: {
        title: 'Ostara // Cruzat.Media',
        metaTags: [
          {
            name: 'description',
            content: '',
          },
          {
            name: 'og:description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'og:keywords',
            content: '',
          },
        ],
      },
      props: {
        core: cc.pages.ostara,
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
