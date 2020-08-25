// project art
import cvrMFP from '@/assets/cvr-mfp.jpg';
import cvrGIAC from '@/assets/cvr-giac-plain.jpg';
import cvrGH from '@/assets/cvr-gearho.png';
import mE from '@/assets/avatar2.jpg';

import wp from '@/assets/srv-wordpress.jpg';
import fed from '@/assets/srv-fed.jpg';
import map from '@/assets/srv-ux.jpg';
import css from '@/assets/srv-css.jpg';
import audio from '@/assets/srv-audio.jpg';

// project heroes
import heroATTF from '@/assets/hero-att01.jpg';
import heroICE from '@/assets/hero-ice.jpg';
import heroMA from '@/assets/hero-moad.jpg';
import heroGIAC from '@/assets/hero-test.jpg';

// client logos
import logoATTF from '@/assets/logo-attf.jpg';
import logoICE from '@/assets/logo-ice.jpg';
import logoMA from '@/assets/logo-ma.jpg';
import eencee from '@/assets/eencee.png';
import bbc15 from '@/assets/bbc15-logo-1.png';

// size examples
import sizesMAm from '@/assets/sizes-moad-m.jpg';
import sizesMAp from '@/assets/sizes-moad-p.jpg';
import sizesICE from '@/assets/sizes-ice.jpg';
import sizesATTF from '@/assets/sizes-attf.jpg';
import sizesGIAC from '@/assets/sizes-giac.jpg';


import testsound from '@/assets/audio/this-is-cruzat-media.mp3';

// main umbrella
const cc = {
	main: {
		cells: [
			{
				classes: 'alert',
			},
			{
				title: 'remote front end development<br>and audio services',
				content: '<div class="center-text"><p>remote front end development and audio services</p><p>located in Portland OR</p><p>est 2018</p></div>',
				classes: 'tall',
			},
			{
				classes: 'alert',
			},
			// {
			// 	title: 'Music for Podcasts',
			// 	content: '<iframe data-v-66386f52="" src="//bandcamp.com/EmbeddedPlayer/album=1796920231/size=large/bgcol=ffffff/linkcol=13c7a3/tracklist=false/artwork=none/transparent=true/"></iframe>',
			// 	classes: 'flow',
			// 	art: cvrMFP,
			// 	navlinks: [
			// 	  {
			// 	    url: '/projects/music-for-podcasts',
			// 	    label: 'Learn More',
			// 	  },
			// 	],
			// },
			/*{
				title: 'AT&T Foundry',
				content: '<p>A custom WordPress theme for AT&T\'s innovation division</p>',
				// classes: 'tall',
				img: logoATTF,
				imgBG: '#fff',
				navlinks: [
				  {
				    url: '/projects/att-foundry',
				    label: 'Learn More',
				  },
				],
			},
			{
				title: 'Modern Adventure',
				content: '<p>Two dynamic WordPress template groups to sprout two microsites</p>',
				classes: 'half',
				img: logoMA,
				imgBG: '#e7e3e0',
				navlinks: [
				  {
				    url: '/projects/modern-adventure',
				    label: 'Learn More',
				  },
				],
			},
			{
				title: 'Industrial Commercial Electric',
				content: '<p>Responsive WordPress site for OR central services company</p>',
				classes: 'half',
				img: logoICE,
				imgBG: '#fff',
				navlinks: [
				  {
				    url: '/projects/ice',
				    label: 'Learn More',
				  },
				],
			},
			// {
			// 	title: 'The Collection',
			// 	content: '<p>A headless WP app for the hoarder in all of us</p>',
			// 	classes: 'half',
			// 	img: cvrGH,
			// 	navlinks: [
			// 	  {
			// 	    url: '/projects/the-collection',
			// 	    label: 'Learn More',
			// 	  },
			// 	],
			// },
			{
				classes: 'alert',
			},*/
			{
				classes: 'taller services',
				title: 'how can we help?',
				icons: [
				  {
				    title: 'Front End Development',
				    icon: 'fa-cubes',
				    route: '/services/front-end',
				  },
				  {
				    title: 'UX & Strategy',
				    icon: 'fa-compass',
				    route: '/services/ux-strategy',
				  },
				  {
				    title: 'CSS with Style',
				    icon: 'fa-paint-brush',
				    route: '/services/css',
				  },
				  // {
				  //   title: 'Sound Design',
				  //   icon: 'fa-volume-up',
				  //   route: '/services/sound-design',
				  // },
					{
						title: 'WordPress Customization',
						icon: 'fa-scissors',
						route: '/services/wordpress',
					},
				  // {
				  //   title: 'Audio Recording',
				  //   icon: 'fa-microphone',
				  //   route: '/services/audio-recording',
				  // },
				  // {
				  //   title: 'Team Support',
				  //   icon: 'fa-coffee',
				  //   route: '/services/team-support',
				  // },
				],
			},
			// {
			// 	classes: 'alert',
			// },
			// {
			// 	title: 'Camp Bell',
			// 	content: '<p>Responsive Vue build for odd rap group</p>',
			// 	classes: 'half',
			// 	img: cvrGIAC,
			// 	navlinks: [
			// 	  {
			// 	    url: '/projects/camp-bell',
			// 	    label: 'Learn More',
			// 	  },
			// 	],
			// },
			{
				classes: 'alert',
			},
			// {
			// 	title: 'How Can We Help You?',
			// 	content: '<p>All projects begin with a conversation, all conversations begin with hello.</p><p>Before you start down the long road of developing your project, drop us a quick hello and let\'s make sure that you have the right solution to meet your goals.</p><p><a href="#" class="button">Hello</a></p>',
			// 	classes: 'tall outreach',
			// },
			{
				title: 'About C.M',
				content: '<div class="center-text"><p>A company specializing in interactive & sound, and the 20 year veteran producer in both who still enjoys noodling ideas on paper over coffee.</p></div>',
				classes: 'tall about',
				navlinks: [
				  {
				    url: '/about',
				    label: 'C.M LLC',
				  },
				  {
				    url: '/about/dan-cruzat',
				    label: 'Dan Cruzat',
				  },
				],
			}
		],
	},
	projects: {
		attf: {
			title: 'AT&T Foundry',
			img: logoATTF,
			// audio: testsound,
			stripColor: '#08a0da',
			route: '/projects/att-foundry',
			loc: 'proj\\attf',
			titleNav: [
				'/services',
				'/about',
			],
			heroes: [
				heroATTF
			],
			meta: 'Mobile First, Responsive, WordPress Custom, Gulp',
			brief: 'A custom WordPress theme for AT&T\'s innovation division',
			content: '<h2 class="topper">// Bird\'s Eye</h2><p>A custom built theme for a <strong>WordPress</strong> powered site. Fully <strong>responsive</strong>, a <strong>mobile-first</strong> approach wherever possible. The overall aim is a full-screen, visually immersive experience.</p><div class="bumper"></div><img class="bigshot edge f-right" src="'+logoATTF+'" alt="AT&T Foundry"><h2 class="topper">// The Brief</h2><p>C.M was approached by <a href="https://www.connectivedx.com/" target="_blank" title="Connective DX">Connective DX</a> to take on a custom WordPress build for their client, the <strong>AT&amp;T Foundry</strong>. We joined the CDX team, together we paired with AT&amp;T\'s team. C.M was responsible for all <strong>front end development</strong>, <strong>template development</strong>, required hooks for <strong>content control</strong> and <strong>dashboard customization</strong>, all on top of a bespoke WordPress installation.</p><h2 class="topper">// The Plan of Attack</h2><p>Since the emphasis was to be on using these very large, lush photos as <strong>full browser backgrounds</strong>, the first step was setting up our base rules for how those containers would behave at different sizes. How content flows through them, required styling, making sure it behaves as needed at each <strong>breakpoint</strong>.</p><p>Beyond that initial challenge, it was a straightforward project. CDX was to provide the <strong>visual creative</strong>, we were to work with their resources to insure correct translation to <strong>interactive</strong>.</p>',
			contentB: '<div class="centro"><h2 class="topper">// The Build</h2><p>This wound up being one of those projects where refinement came in the reviews, we worked with their team on an extended <strong>timeline</strong> to finesse the final site. There was a lot of iteration towards a gripping experience on smaller devices, we landed at a solution that fit the visually rich theme of the site while keeping the content front and center for <strong>mobile users</strong>.</p><p>The site came together quickly and cleanly. The CDX crew were awesome, the <strong>layouts</strong> were intuitive and consistent. Small details were accounted for between sizes and, most important from a dev perspective, layout elements were scaled and re-used wherever possible.</p><div class="bumper"></div><h2 class="topper">// Toolbox</h2><p>The theme was built from scratch starting with the basics in <strong>WordPress</strong>. The recipe called for five layout templates, functional at all sizes. We used <strong>Gulp</strong> for the taskrunner, <strong>SCSS</strong> for our <strong>CSS</strong> needs, and what (light) interactive JS duties there are were handled with <strong>JQuery</strong>.</p></div>',
			lastCalls: [
				{
					url: 'http://foundry.att.com',
					label: 'see live site',
					img: sizesATTF,
				}
			],
			buttons: {
				routes: [
					{
						url: '/projects',
						label: 'All Projects',
					},
					{
						url: '/projects/modern-adventure',
						label: 'Next Project',
					},
				]
			},
			endNav: {
				routes: [{
					url: '/services/front-end',
					label: 'front end development',
				},
				{
					url: '/services/wordpress',
					label: 'wordpress customization',
				},
				{
					url: '/services/css',
					label: 'css with style',
				}],
			},
		},
		ma: {
			title: 'Modern Adventure',
			img: logoMA,
			stripColor: '#3a3a3a',
			route: '/projects/modern-adventure',
			loc: 'proj\\moad',
			titleNav: [
				'/services',
				'/about',
			],
			heroes: [
				heroMA
			],
			meta: 'Mobile First, Responsive, WordPress Custom, Trellis/Vagrant',
			brief: 'Two dynamic WordPress template groups to sprout two microsites',
			content: '<h2 class="topper">// Bird\'s Eye</h2><p>Two new sections are to be added to an existing <strong>WordPress</strong> website, each functioning as a separate site and requiring distinct templates. The first a template set for Partner microsite, the second a template set for a monthly magazine.</p><div class="bumper"></div><img class="bigshot edge f-right" src="'+logoMA+'" alt="Modern Adventure"><h2 class="topper">// The Brief</h2><p>C.M was approached by <a href="https://www.linkedin.com/in/scottmcneely/" class="silent" target="_blank" title="Scott McNeely : COO / Co-Founder Modern Adventure">Scott McNeely</a> at <a href="http://modernadventure.com" title="Modern Adventure">Modern Adventure</a> (MO/AD) to partner with their <strong>lead developer</strong> to develop the new site sections. It was important that the new sections were developed without interrupting the day to day work on the main site.</p><p>We worked with the MO/AD team for several months, meeting with their creatives to finesse and fine tune the evolving layouts. It was crucial in getting clean translations from their finished comps to <strong>interactive experiences</strong> that blend seamlessly with their existing presence.</p><div class="centro"><h2 class="topper">// The Plan of Attack</h2><p>The new sections were intended to function autonomously of the <strong>main theme</strong>, each was planned as its own private island with all required assets and dependencies \"inhouse\".<p><p>The Partner microsite needed to be <strong>fully customizable</strong>, including dashboard driven options for partner logo, partner brand colors, and areas for <strong>custom CSS</strong>.</p><p>The Magazine landing page involved creating a large size interlocking mural using graphics, each piece being a link taking the user to an article in the issue. This also needs to resolve cleanly for mobile.</p></div>',
			contentB: '<div class="centro"><h2 class="topper">// The Build</h2><p>The Trellis / Bedrock / Vagrant tech the site is built on is truly impressive, using a VM to run the necessary Apache server to run the PHP+MySQL combo that allows WordPress to function is verrry clever.</p><p>The private island approach to section development worked perfectly, allowing each complete fileset to live in a single folder in main theme folder, efficient and clean.</p><div class="bumper"></div><h2 class="topper">// Toolbox</h2><p>As per the recipe, the templates were integrated into the existing build, it was important that our work flowed into the house kitchen seamlessly. This particular Trellis installation had some custom work involved, not exactly vanilla, there was a learning curve. The site uses several 3rd party integrations for handling customer information in various use cases, some pieces of the UI required access to that tech.</p><p>Once the Big Pieces were sorted, the actual nuts and bolts of theme working were very straightforward. We used SCSS to pre-cook our styles and we already had JQuery under the hood as a WordPress core dependency. The 3rd party tech integrated cleanly, we saw uniform behavior as elswhere on the site.</p></div>',
			lastCalls: [
				{
					url: 'https://modernadventure.com/1/batterytravel/',
					label: 'MO/AD Partner',
					img: sizesMAp,
				},
				{
					url: 'https://modernadventure.com/magazine/',
					label: 'MO/AD Magazine',
					img: sizesMAm,
				}
			],
			buttons: {
				routes: [
					{
						url: '/projects',
						label: 'All Projects',
					},
					{
						url: '/projects/ice',
						label: 'Next Project',
					},
				]
			},
			endNav: {
				routes: [{
					url: '/services/front-end',
					label: 'front end development',
				},
				{
					url: '/services/wordpress',
					label: 'wordpress customization',
				},
				{
					url: '/services/css',
					label: 'css with style',
				}],
			}
		},
		ice: {
			title: 'Industrial Commercial Electric',
			img: logoICE,
			stripColor: '#094fa4',
			route: '/projects/ice',
			loc: 'proj\\ice',
			titleNav: [
				'/services',
				'/about',
			],
			heroes: [
				heroICE
			],
			meta: 'Mobile First, Responsive, WordPress Custom, Gulp',
			brief: 'Responsive WordPress site for OR central services company',
			content: '<h2 class="topper">// Bird\'s Eye</h2><p>A website reaching <strong>10 years</strong> online was showing its age, due for a refit not only in look and feel but also functionality. It needs to be <strong>fully responsive</strong> for tablets and phones, it needs a <strong>password-protected</strong> employee section, client wants <strong>content control</strong>. </p><div class="bumper"></div><img class="bigshot edge f-right" src="'+logoICE+'" alt="Industrial Commercial Electric"><h2 class="topper">// The Brief</h2><p>E+C was approached by a <strong>project manager</strong> for <a href="http://icecoelectric.com" title="Industrial Commercial Electric" target="_blank">Industrial Commercial Electric</a>, an Oregon utilities company in need of a new website. The PM had already sold the client on WordPress as a content management solution.</p><p>Beyond the basics of a WordPress theme build, we are faced with a challenge in two parts: A) creating a custom password protection system for content independent of the WP system;  B) Implement existing 3rd party integrations cleanly inside this walled garden. </p><div class="centro"><h2 class="topper">// The Plan of Attack</h2><p>In any full app / full site project, it is generally a good idea to begin with locking down all of the known elements before moving into the unknown questions. So first and foremost was taking care of the core site build, translating over the existing content, then moving into the gated content and integration questions.</p></div>',
			contentB: '<div class="centro"><h2 class="topper">// The Build</h2><p>The core build went as expected, the beauty of WordPress as a focus is "the standards" always come together quickly on a project. This allowed for a good chunk of time for device testing and layout smoothing over different scale devices. It also allowed time in the project for the required research to meet client needs.</p><p>This wound up being a case of discovery-in-development; while not ideal from a pure process perspective, it was to the ultimate benefit of the project as we were able to find optimal solutions to meet the client requests. In the end, it was a great refresher course on the malleability and integrity of PHP, we were still able to find solutions to client needs.</p><div class="bumper"></div><h2 class="topper">// Toolbox</h2><p>The theme was built from scratch starting with the basics in <strong>WordPress</strong>. The recipe called for eleven <strong>layout templates</strong>, functional at all sizes. We used <strong>Gulp</strong> for the taskrunner, <strong>SCSS</strong> for our <strong>CSS</strong> needs, and what (light) interactive JS duties there are were handled with <strong>JQuery</strong>.</p><p>For the walled content, a custom login mechanism was built using server-side PHP, functionality that lives alongside the WordPress system without interfering with it.</p></div>',
			lastCalls: [
				{
					url: 'http://icecoelectric.com',
					label: 'see live site',
					img: sizesICE,
				}
			],
			buttons: {
				routes: [
					{
						url: '/projects',
						label: 'All Projects',
					},
					{
						url: '/projects/camp-bell',
						label: 'Next Project',
					},
				]
			},
			endNav: {
				routes: [{
					url: '/services/front-end',
					label: 'front end development',
				},
				{
					url: '/services/wordpress',
					label: 'wordpress customization',
				},
				{
					url: '/services/ux-strategy',
					label: 'ux / strategy',
				},
				{
					url: '/services/css',
					label: 'css with style',
				}],
			},
		},
		/*giac: {
			title: 'Camp Bell',
			img: cvrGIAC,
			stripColor: '#b70400',
			route: '/projects/camp-bell',
			loc: 'proj\\cb',
			titleNav: [
				'/services',
				'/about',
			],
			heroes: [
				heroGIAC
			],
			brief: 'Responsive Vue build for odd rap group',
			content: '<h2 class="topper">// Bird\'s Eye</h2><p>A website is required to both accompany an album\'s release and serve as an evergreen footprint for the group rolling forward.</p><div class="bumper"></div><img class="bigshot edge f-right" src="'+cvrGIAC+'" alt="Sexual Campbell - G0D IS A CEN0BYT3"><h2 class="topper">// The Brief</h2><p>C.M was approached by a member of experimental hip-hop collective <strong>Sexual Campbell</strong> (SFW: Camp Bell) inquiring about a website to compliment an upcoming release, as well as provide background and context with the group\'s prior work.</p><p>We know them from The Old Days and were pleased to assist them in getting their project online.</p><h2 class="topper">// The Plan of Attack</h2><p>In discovery, we determined that the website does not need expansive content areas, there is a fixed set of content we will be pushing out with, so a CMS like WordPress would be overkill. We opted for a build in <strong>Vue.js</strong> to maximize a smooth experience, assets can be localized to the root of a section to trade a slight initial load for section performance.</p><p>There were assets the group had originally collected for a website concept in <strong>Flash</strong> a dozen years ago, and while that iteration never panned out, the images are now in play on the main landing page. This was an easy home run that sparked much joy for the group.</p><div class="centro"><h2 class="topper">// The Build</h2><p>This site proved to be a real eye-opener, the development of components and views proved to be a inter-related process. 9 times out of 10, the expected scope for a component had to be expanded repeatedly to reach final implementation.</p><p>In execution, the site is built using a very similar method to this one, having a super smart \"layout chunk\" that functions like a swiss army knife, different hooks call in smaller components, all content is driven from a master content matrix dialed in through the router.</p><div class="bumper"></div><h2 class="topper">// Toolbox </h2><p>We used a standardized <strong>JSON</strong> object and an extensible template set, so even if the site is not officially connected to a content management system, it will be not be difficult to implement site additions for any future releases or activity.</p><p>This was an early project for us in <a href="https://vuejs.org/v2/guide/installation.html#NPM" target="_blank">Vue.js V2</a>. Always interesting how certain core concepts translate into new systems, slightly or majorly different than what one is used to.</p><h2 class="hili"><i class="fa fa-shower"></i> site nears completion <i class="fa fa-shower"></i></h2></div>',
			contentB: '',
			// lastCalls: [
			// 	{
			// 		url: 'http://sexualcampbell.com',
			// 		label: 'see live site',
			// 		img: sizesGIAC,
			// 	}
			// ],
			buttons: {
				routes: [
					{
						url: '/projects',
						label: 'All Projects',
					},
					{
						url: '/projects/att-foundry',
						label: 'Next Project',
					},
				]
			},
			endNav: {
				routes: [{
					url: '/services/front-end',
					label: 'front end development',
				},
				{
					url: '/services/ux-strategy',
					label: 'ux / strategy',
				},
				{
					url: '/services/css',
					label: 'css with style',
				}],
			}
		},*/
		// coll: {
		// 	title: 'The Collection',
		// 	img: cvrGH,
		// 	route: '/projects/the-collection',
		// 	content: 'I am the 4',
		// 	lastCalls: [
		// 		{
		// 			url: '',
		// 			label: '',
		// 			img: '',
		// 		}
		// 	],
		// },
		// mfp: {
		// 	title: 'Music For Podcasts',
		// 	img: cvrMFP,
		// 	route: '/projects/music-for-podcasts',
		// 	content: 'I am the 5',
		// 	lastCalls: [
		// 		{
		// 			url: '',
		// 			label: '',
		// 			img: '',
		// 		}
		// 	],
		// },
	},
	services: {
		frontend: {
			title: 'Front End Development',
			content: '<img class="bigshot edge f-right" src="'+fed+'" alt="Front End Development"><h2 class="topper">// Structure</h2><p>From the very beginning, a rare constant in web design & development is the idea that the user-facing portions of the application should be as structurally solid and visually consistent as possible. It should work everywhere, it should never feel incorrect or "broken".</p><p>The implementation of that idea has changed drastically over the years, from table-based layouts (pre-historic times), the advent of HTML5/CSS3 (the responsive Renaissance), and the rise of component based systems, from PHP to the more modern JavaScript frameworks.</p><h2 class="topper">// Different roads to the same result</h2><p>PHP and JavaScript are, in a certain literal sense, polar opposites. PHP compiles on server side, in the back end, serving up complete HTML documents to the browser. JavaScript does all of its work in the browser, grabbing chunks as needed to speed up performance and allow for two-way flow of data. They are entirely different approaches, languages with marked syntax distinctions but certain conceptual similarities.</p><p>Imagine you\'re going out to dinner. PHP is like a table service restaurant, the food is prepared and dished in a kitchen, then presented complete. JavaScript is like an Asian style grill house, the chef cooks everything to order, right in front of you, smaller dishes are served with more frequency. Different approaches with distinct advantages.</p><div class="bumper"></div><p>Despite this difference, we see a similarity between both approaches in that they both land at the same result, code is delivered to browser, an experience is rendered. The final structure is HTML, the final styling is CSS, the interactive elements are usually written in some form of JavaScript.</p><p>Either way, you went out to eat, a dish was prepared and served. And hopefully, you enjoyed your meal.</p><div class="centro"><h2 class="topper">// Common Tongues & Parlance</h2><p>Jumping into a new system or a new method is exciting, but each wave of libraries or versions always brings its own variation on this same theme. No matter what the system, there is always a place where our layouts live, always a place where styles can be placed, always a place to drop in some interactive code to let a widget do its widgeting.</p><p>We hope that they have been prepared by a thoughtful dev, in an easy to locate / migrate template file, and not buried in the bowels of some arcane function -- the halcyon frustration of the early days of WordPress. What is beautiful about this era, with so many different roads to the same result, is the best ones are travelled by brilliant open source communities that want to help stumped coders find solutions.</p><div class="bumper"></div><h2 class="topper">// Let\'s Get Busy</h2><p>Whether you need existing layouts edited, optimized or replaced entirely, Cruzat.Media can help. Tell us the specifics and status of your project, we will help you build what you need.</p></div>',
			icon: 'fa-cubes',
			route: '/services/front-end',
			loc: 'serv\\fed',
			titleNav: [
				'/about',
				'/projects',
			],
		},
		wordpress: {
			title: 'WordPress Customization',
			content: '<img class="bigshot edge f-right" src="'+wp+'" alt="WordPress"><h2 class="topper">// Why We Love a Good CMS</h2><p>When this internet nonsense began, editing content was a big deal. All pages were static html files, making changes required tech time and bulky backup procedures. Adding a new page usually meant cutting new graphics for the hard-coded navigation, then cloning that across all physical pages of the site. Your best friend was copy\'n\'paste. Dreadful.</p><p>By the end of the 90s, the need for flexible content management was being met by a number of competing services and apps, never a clear front runner. A culture had started for self publishing online, and soon \"blogs\" became a commonly used word and concept, available on dozens of platforms. Out of this culture grew additional technologies and apps.</p><p>On May 27, 2003, Matt Mullenweg and Mike Little, building on the work of Michel Valdrighi, released WordPress into the wild. Today, at over 15 years of age, WordPress is used by a whopping 60% of all sites with known CMS\'s.</p><div class="bumper"></div><p class="quote"><i class="fa fa-quote-left"></i>I am so personally grateful to WordPress for not only allowing my clients and stakeholders the ability to edit and expand their content at will, but providing me with a versatile platform that lends itself to customization and imaginative engineering. That means the core developers, everyone in the community who has reached out to help a dev get their wagon unstuck. Thank you all.<i class="fa fa-quote-right"></i> <span class="attr"> ~ Dan Cruzat</span></p><div class="centro"><h2 class="topper">// Anything you can think of, and more</h2><p>One of the great strengths of WordPress is its malleability and extensability, apparently a natural part of a wp-developer\'s journey is making the jump from finding plugins to writing them. The most common requirements revolve around using Custom Post Types for specialized content and fine-tuning dashboards for intuitive use.</p><p>Most WordPress projects have 80-85% standardized parts, generally the client needs it to do A, B and C. But every once in a while, we get a fun ask, and we\'ve been able to figure out some great add-ons and extensions for the more unique requests. Custom password protected subsections, employee timecards, company bulletin boards, we have delivered on some very interesting ideas that came across the table.</p><h2 class="topper">// The Good, The Bad and the Lovely</h2><p>WordPress is based on PHP and MySQL, requiring a compatible server to operate. For many use cases, these are more than adequate. A number of popular platforms still use this technology, including Facebook, Wikipedia and Yahoo. With proper cacheing and optimizations, a WordPress build can be lighting fast.</p><p>There are concerns with WordPress and security, ie how hack-proof can we make this, we take steps to fortify a site. Standards involve cloaking obvious tells: asset paths, login urls, other clues in the source code that tell the curious what is powering the site. There is a level of fortification that is not a question of WordPress but the server itself, and while that is not a specialization we provide directly, we know several experts on the subject if one is required on a project.</p><p>A future road for WordPress is being shared by much of the app / site development industry, JavaScript based systems like Vue (this website was built in Vue), React and Angular. It really is a "best of both worlds" situation, we have all of the power of WordPress content control under the hood, the JS-driven front end can access all of that content using the WP Rest API.</p><p class="hili">Cruzat.Media is currently developing a number of demo\'s to showcase the possibilities of a custom WordPress system feeding a monster built in Vue or React.</p><div class="bumper"></div><h2 class="topper">// Let\'s Get Busy</h2><p>Whether you need an existing WordPress theme edited, optimized or replaced lock stock and barrel, Cruzat.Media can help. Let\'s talk about what the build needs to do, we\'ll help you find the site you\'re looking for.</p></div>',
			icon: 'fa-scissors',
			route: '/services/wordpress',
			loc: 'serv\\wp',
			titleNav: [
				'/about',
				'/projects',
			],
		},
		ux: {
			title: 'UX / Strategy',
			content: '<img class="bigshot edge f-right" src="'+map+'" alt="UX / Strategy"><h2 class="topper">// Never Get Lost</h2><p>One of the main goals of interactive development, regardless of platform, is that your user should never feel lost in the experience. They should always know where they are, how they got there, and how to get to other sections or content.</p><p>If you have ever felt lost or confused on a website or in an application, you know how frustrating it can be to the user when this skill and its execution are not properly valued in the creation of that experience.</p><h2 class="topper">// Always Plan Your Trips</h2><p>Before any design or development can begin on a project, work must be done to map out what content will live in which sections, the Information Architecture. Then we build our connections, planning routes between sections, allowing for relevant options along the way. This flow from one section to the next, the way in which different options are presented, this is the fine art of the User Experience.</p><div class="bumper"></div><p>Completed properly, this should provide a complete roadmap of the site/app and the user\'s movements through it at different stages and states. When executed to perfection, everything always feels simple and easy for the user. They may feel frustration at having to provide an email address for a whitepaper, but they should never be frustrated along the road to that decision.</p><p>In fact, if executed properly, good UX work shouldn\'t even be noticed. Clean and intuitive, a finished layout may appear simple and easy, but reflecting an extensive process of revision, review and refinement.</p><div class="centro"><h2 class="topper">// Getting Crafty</h2><p>A notable moment in Dan\'s UX planning career was a paper prototyping process in the marketing dept of a Portland SAAS. A colleague ran the endeavor like a manic mad scientist, inviting everyone to come to The Board with scissors and paper and pens to define a new detail or present a new idea. Different configurations were photographed and collated, ultimately certain combinations defined the wireframes.</p><p>The end result of a UX plan is a clean comp, branded if needed, but there is always digital and literal scrap paper along to road to the final map. Things can shape up quickly in Sketch, but there is still something magical about working out some basics with a pen and pad.</p><h2 class="topper">// No Matter Where You Go, There You Are</h2><p>The core concept remains, your user should never feel lost or confused. They can move through an experience with purpose, relevant signage along the road to help them find their way around.</p><p>The finesse is in the strategy of knowing the sequence to walk a user through to reach certain goals. Anticipating the needs of different scenarios or stages, knowing which calls to action belong at which points along the road. A clean strategy makes all the difference.</p><div class="bumper"></div><h2 class="topper">// Let\'s Get Busy</h2><p>Whether you need an existing user flow reviewed or strategies from scratch, Cruzat.Media can help. We can take a look at where you are on the map today and discuss the terrain.</p></div>',
			icon: 'fa-compass',
			route: '/services/ux-strategy',
			loc: 'serv\\ux',
			titleNav: [
				'/about',
				'/projects',
			],
		},
		css: {
			title: 'CSS with Style',
			content: '<img class="bigshot edge f-right" src="'+css+'" alt="CSS"><h2 class="topper">// Make It Beautiful</h2><p>Before we had Cascading Style Sheets as a web standard, the internet was a very drab, ugly place. Any "styling" was done via now-extinct &lt;font&gt; tags, options were severely limited, all layouts were based on &lt;table&gt; tags, it was a messy blah.</p><p>CSS gave us freedom and options, we could better define container sizes and properties, we could associate rules with specific tags, id\'s or classes. Site-wide changes became possible, and the internet started to look a lot better. But the intial version of the language suffered from the same limitation as early HTML, it was based on the model of print design and was expected to follow similar rules.</p><h2 class="topper">// Give It Character</h2><p>Many of these limitations only became apparent once the rules were used commonly. The first one that comes to mind is the "clear fix" solution for content collisions on floated objects, why every modern HTML structural framework (such as Bootstrap or Foundation) has a clearfix() built in. It became clear these new and often dynamic documents had to be looked at as their own beast, not neu-print.</p><div class="bumper"></div><p>This encouraged the development of CSS2 and, in time, CSS3, styling languages that not only resolved issues that arose in the course of real world development, but also lent themselves to true refinement and polish. It is ironic that once the language began to push beyond layout solutions born of the printing press, a primary focus was now to give a page true character.</p><div class="centro"><h2 class="topper">// Tenemos Estilo</h2><p>The goal in styling work on any project should always be to best translate the visual creative from a flat comp to functional code. Beyond that, if dealing with an identiy with a deep presence, we require a step back to confirm alignment with the official style guide. A top tier client knows how their work should look, top tier talent can provide it.</p><p>These days we prefer to use SCSS or SASS as a CSS pre-processor, it makes it much easier to nest styles, include variables and mixins, and write complex rules quickly. We can and do still right out straight CSS when it is required, usually for an inline style block in an add-on component.</p><div class="bumper"></div><h2 class="topper">// Let\'s Get Busy</h2><p>Whether you need current rules updated or styles from scratch, Cruzat.Media can help. Give us your view of the big picture and we will get it looking right.</p></div>',
			icon: 'fa-paint-brush',
			route: '/services/css-with-style',
			loc: 'serv\\css',
			titleNav: [
				'/about',
				'/projects',
			],
		},
		sound: {
			title: 'Sound Design',
			content: 'I am a 5',
			icon: 'fa-volume-up',
			route: '/services/sound-design',
			loc: 'serv\\snd',
			titleNav: [
				'/about',
				'/projects',
			],
		},
		// team: {
		// 	title: 'Team Support',
		// 	content: '<img class="bigshot edge f-right" src="'+team+'" alt="Team Support"><h2 class="topper">// Organizing Principals</h2><p>A large project calls for a large team; the more moving parts, the more hands are needed to keep things under control. Discipline and coordination are essential to meet goals with healthy morale and velocity.</p><p>We have worked on teams as technical specialists (FED, WP, CSS), as group leaders / lead specialists, and as QA consultants. There are many hats to wear, one resource in their time may know many roles.</p><h2 class="topper">// Always Good to Have a Backup</h2><p>A true advantage of having several multi-skilled resources on a team: as some tasks conclude quickly, resources may find extra time. This surplus can be put to double-checking colleagues\' work, or several free resources can swarm to tackle a problem that had a single resource stumped. A hive thrives.</p><div class="bumper"></div><p>This is good not only for quality in product (and happy clients) but also for team morale, esprit d\'corps. Surprises happen, projects change course, gremlins will emerge. A thousand possible unexpected outcomes. If a resource knows that they are on a strong team, there is never the feeling of facing something alone.</p><div class="centro"><h2 class="topper">// Team Guarantees</h2><p>Having this level of internal oversight means an ability to offer certain guarantees. An additional QA process becomes a nice-to-have, not a requirement, it is already built into the process.</p><p>This can give your Account Manager confidence in knowing that, even though this thing we are building has about a billion moving pieces, each one is being crafted to order and gets the attention it deserves to assure quality.</p><h2 class="topper">// No Slackin On Slack</h2><p>The modern interactive workplace reflects its products; We are adaptible, we are flexible. Sometimes we are together in person, sometimes we are all in our own remote bubbles. But an increasingly common scenario is one where the team gathers only in the virtual.</p><p>Whatever the makeup or character of the team, the paramount value should always be quality in the final build. All of the team spirit and rah-rah in the world is meaningless if the focus slips from delivering quality in our final product.</p><div class="bumper"></div><h2 class="topper">// Let\'s Get Busy</h2><p>Whether you need line item QA or a team lead crossed with an accomplished dev, Cruzat.Media can help. Contact us today with your team status and requirements, we will discuss our options.</p></div>',
		// 	icon: 'fa-coffee',
		// 	route: '/services/team-support',
		// 	loc: 'serv\\ts',
		// 	titleNav: [
		// 		'/about',
		// 		'/projects',
		// 	],
		// },
		recording: {
			title: 'Audio Recording',
			content: '<img class="bigshot edge f-right" src="'+audio+'" alt="Audio Recording"><h2 class="topper">// The Sound of Things</h2><p>Sound is such an immediate and intimate sense. At a performance, it\'s all about the sound, the shared experience of it. In a room with speakers, the sound becomes a presence, it shares space. If listening to headphones, the sound is literally in one\'s head. An early augmented reality experience was just walking down the street listening to a Walkman.</p><p>Such a versatile and flexible medium, with such a simple foundation: plug something into an input, then play something or say something. And from there it can go in so many directions, from recording a podcast to restoring damaged audio to tracking in your next amazing song.</p><h2 class="topper">// Speak to Your Market</h2><p>What better way to address your potential customers or clients than to actually address them? Using modern web standards that make multimedia integrations MUCH simpler, we can record a greeting or statement of purpose, in your own voice, and include it along with that great headshot on your about page.</p><p>We will bring a studio quality recording experience to you. In addition to the convenience of recording in your own space, it will add a natural comfort to your voice. If you sound at ease, your prospect feels at ease.</p><h2 class="topper">// Nothing Like a Good Chat</h2><p>In the past five years, podcasts have exploded in popularity, speaking to a market that continues to gain definition. Interviews, documentary, commentary and original fiction; if you listen to podcasts, chances are you have an idea for a show that could fit into one of those categories.</p><p>We can help you with this. Cruzat.Media has mobile recording capabilities for up to four separate channels (microphones) of audio, perfect for a small round table discussion. We can catch it, clean it and cook it, your show will sound delicious.</p><div class="centro"><div class="bumper"></div><h2 class="topper">// Voices from the Past</h2><p>This is the digital age, it\'s as easy as picking up your phone to capture a golden moment. In previous eras, it was usually an enterprising youngster in the family, interviewing elders with a bulky tape recorder and a microphone.</p><p>If you were that youngster, maybe even still have the box of tapes tucked away somewhere, it is important to transfer those tapes if you have not already done so. Every decade that magnetic tape ages, it becomes more brittle. Cruzat.Media can assist with both the transfer and restoration of these irreplaceable conversations.</p><h2 class="topper">// Rawkin Out</h2><p>And then there are the good old fashioned labrats, studio dwellers who create environments and songs in their own little nests -- Dan is one of you. There are some killer demos you\'ve made but you know there is room for improvement.</p><p>If you love outboard gear, taking it all to a by-the-hour studio can be a daunting task. And costly -- time ticks away while you connect and break down stands and cables. Cruzat.Media can bring a mobile recording solution directly to you, capture the sound of your gear in its native environment.</p><div class="bumper"></div><h2 class="topper">// Let\'s Get Busy</h2><p>Whether you are recording a podcast or a song, if you need sound design or production, Cruzat.Media can help. Let us know how things sound for you today, we will help you dial it in.</p></div>',
			icon: 'fa-microphone',
			route: '/services/audio-recording',
			loc: 'serv\\rec',
			titleNav: [
				'/about',
				'/projects',
			],
		},
	},
	pages: {
		about: {
			title: 'About Cruzat.Media',
			content: '<h2 class="hili biggie">Interactive // Sound</h2><h3 class="topper">// Best Foot Forward</h3><p>Cruzat.Media was founded in 2018 to serve interactive and audio needs in Portland, OR and beyond.</p><h3 class="topper">// Devotion</h3><p>We work in experiences and we love what we do, with over 20 years\' experience in web and sound. A project may call for a service beyond our range, we prefer to network and collaborate with other devotees. Cruzat.Media is fortunate to be based in a city rich with practitioners; if we are not the direct solution we are always the pathway to the solution.</p><div class="bumper"></div><h3 class="topper">// Different Worlds, Modern Worlds</h3><p>Interactive is its own beast, and can mean many different things. There is no ready-built solution that will always work, our experience has shown is the ideal is fewer reusable templates, more fluency in different methods and remaining malleable in their application. No two projects are ever the same and should never be approached as such, we generally advocate for each build to start from scratch.</p><p>Sound is unique to the senses, you can occupy a space in your listener\'s mind where you are able to utilize their visual imagination without requiring a Hollywood budget or VFX crew. Despite the advent of visual innovations like 4KHD and 3D/VR, audio based content like podcasts, audiobooks and good ole fashioned music continue to surge in popularity. People still listen.</p><div class="centro"><h3 class="topper">// Worlds Within</h3><p>What Interactive and Sound share in our modern world is proximity and intimacy. There are massive public events that are shared experiences, a festival or a convention, but more often than not it\'s small and personal. Someone is on their phone or on their laptop, looking at your website, listening to your podcast. We want to help you in putting your best foot forward in either format.</p><p>If that experience is effective, the connection is made. You look good, you sound good. To have your brand associated with quality is worth its weight in Californium.</p><h3 class="topper">// Building Bridges Between Worlds</h3><p>The projects we are most intrigued by are those that seek to find connections between these two worlds. For example, this very website has an audio component for those who prefer to listen to their content, each copy-centric page has an accessibility compliant mechanism for playing a reading of that copy. So rather than letting a screen reader make your presentation sound robotic (bordering on ridiculous), you can present your own words, in your own voice.</p></div>',
			loc: 'abt',
			titleNav: [
				'/projects',
				'/services',
			],
			endNav: {
				routes: [{
					url: '/services',
					label: 'What We Do',
				},
				{
					url: '/projects',
					label: 'Our Work',
				},
				{
					url: '/about/dan-cruzat',
					label: 'The Cruzat',
				}],
			},
		},
		aboutDan: {
			title: 'More About The Cruzat',
			content: '<h2 class="hili biggie">Hi, my name is Dan Cruzat and I\'m a big ol nerd.</h2><img class="bigshot f-right edge" src="'+mE+'" alt="Dan Cruzat"><h3 class="topper">// From the top</h3><p>I arrived in Portland in October of 2006, having spent the previous six years grinding in the flourishing indie hip hop scene in Chicago of that era -- Kanye blew up and we felt invincible. Having worked as a recording engineer, music producer, web designer and Flash developer in the midwest, I streamlined my efforts on arriving in the Pacific Northwest, focusing professionally on interactive development.</p><p>[...I did continue to make music during this time, but just for fun. I compiled all the best bits <a href="http://listento.thecruzat.com/decade" title="Check out D/EC/AD/E" target="_blank">here...]</a></p><p>In the time since, I have been fortunate to work with some amazing talent in the City of Roses, finding my place in its vibrant digital creative community. My journey has taken me on many turns with tech (more below), but my current specializations include WordPress customization and front end development in Vue.js.</p><div class="centro"><h3 class="topper">// Ellsworth + Cruzat</h3><p>In 2010, I was lucky enough to cross paths with Christine Ellsworth, a skilled designer and world class snarkburglar. We became fast friends and started talking about collaboration, one project lead to two lead to more. Suddenly we had a handful of indie clients in Portland.</p><img src="'+eencee+'" alt="E+C / Ellsworth + Cruzat" class="f-left bigshot enc"><p>In 2012, while working on UX for a rework of the Rose City Rollers website, we decided to create a shared banner for our projects, and <a href="http://eencee.me" target="_blank">E+C (Ellsworth + Cruzat)</a> popped into the world. Not a legal partnership or company, but a continuing collaborative relationship where we play to each others\' strong suits while retaining our own autonomy as contractors.</p><p>Christine Ellsworth has been my go-to for visual creative ever since. It is always a thrill to see one of her designs for the first time, she has a very clean visual language that adapts well for various brand requirements.</p><p>Thank you Tini.</p><div class="bumper"></div><h3 class="topper">// Rough Starts</h3><p>In my time in code I have worked with many languages, but the mainstays over the years have been HTML, CSS and JavaScript. In the very beginning, complicated OOP and DOM manipulation were well above my amateur stage, JavaScript beyond simple layout effects felt like magic.</p><p>By 2005, Flash had been a central focus for many years, I had worked on projects ranging from the small, mp3 players and smart video banners, to the very not small, product catalogs and massive guided clickthroughs walkthroughs, but all of that had been primarily timeline based. The deeper secrets of ActionScript still eluded me.</p><h3 class="topper">// Honing Edges</h3><p>That changed when I started working on teams in Portland. Team based development exposed me to more advanced ideas and methods, as well as teaching me the value of seeking assistance for a given problem or bug. I had never been able to crack JavaScript beyond basic effects, ActionScript, AS2 and AS3 gave me my proper education in OOP.</p><p>After smartphones killed Flash, I went back to basics with HTML and CSS. At the time JQuery was becoming the new rage and I was able to parlay what I had learned about OOP over from AS2/AS3. JQuery, in turn, made JavaScript more accessible to my brain, so it\'s hard to say that any of the skills I gained in Flash dev have been lost. And sometimes, you need to take the long way around to gain understanding in a discipline or a language.</p><h3 class="topper">// Finding Answers</h3><p>Not long after that, a platform that had been known primarily for blogging started to make great strides towards full site development, suddenly WordPress was becoming a real contender for an out-of-the-box CMS. I eased into WordPress theme development around 2010, two years later I was helping a number of local agencies figure out how their content requirements could translate into clean intuitive dashboards.</p><p>In 2015, I joined a team of brilliant developers in working on a longer term project building an application for a leading ISP, this was my crash course in Angular and a great refresher in working on a large team. No need to sweat the entire application, we all had one little piece to chew on at a time. And around halfway through 2016, I transitioned into a QA / Team Support role, it was becoming obvious that there were other directions in FED that needed exploration.</p><img src="'+bbc15+'" alt="Built By The Cruzat" class="w100 trim"><p>More of my work prior to the formation of Cruzat.Media can still be seen at <a href="http://builtby.thecruzat.com" target="_blank" title="more work from Dan Cruzat">BuiltBy.TheCruzat</a>.</p><div class="bumper"></div><h3 class="topper">// Next Steps</h3><p>After the team wrapped production on our super-app (Giggy Forever), I continued my education in JavaScript-based systems. The <a href="http://listento.thecruzat.com/decade" target="_blank">D/EC/AD/E</a> website was built in Angular2, and even at the time it was clear that React.js and Vue.js were both worthy of serious consideration.</p><p>It was around this time that I decided to start Cruzat.Media, a way of bringing web development tasks under the same umbrella as my first love, audio recording, but also continuing to offer support services for those in need of bug fixes, QA, or a general wrangler on a team.</p><h3 class="topper">// There\'s more to life</h3><p>Familia es todo. I work best with people who understand this.</p><p>Besides all things work related, the House of Cruzat sits on a happy street in SE Portland. Periodically there\'s some sloppy acoustic guitar twanging in the back yard. Our roses are coming in lovely this year.</p><p>I am lucky and grateful that I can provide for my family working in fields where I have been able to define my own path.</p></div>',
			loc: 'abt\\dan',
			titleNav: [
				'/projects',
				'/services',
			],
			endNav: {
				routes: [{
					url: '/services',
					label: 'What We Do',
				},
				{
					url: '/projects',
					label: 'Our Work',
				},
				{
					url: '/about',
					label: 'Cruzat.Media',
				}],
			},
			iconLinkRow: [
				{
					icon: 'fa-plus-circle',
					link: 'http://eencee.me',
					title: 'E+C',
				},
				{
					icon: 'fa-briefcase',
					link: 'http://builtby.thecruzat.com',
					title: 'Portfolio',
				},
				// {
				// 	icon: 'fa-home',
				// 	link: 'http://thecruzat.com',
				// 	title: 'Homebase',
				// },
				// {
				// 	icon: 'fa-coffee',
				// 	link: 'http://coffeewith.thecruzat.com',
				// 	title: 'Blog',
				// },
				// {
				// 	icon: 'fa-twitter',
				// 	link: 'http://twitter.com/_cruzat',
				// 	title: 'Follow me on Twitter',
				// },
				{
					icon: 'fa-linkedin',
					link: 'https://www.linkedin.com/in/dancruzat/',
					title: 'Follow me on LinkedIn',
				},

			],
		},
		projects: {
			title: 'What We Have Done',
			content: '<p class="full-w center-text no-foot">In the past year we have been busy with <strong>website development</strong> and researching new libraries and methods.</p>',
			loc: 'proj',
			titleNav: [
				'/services',
				'/about',
			],
			endNav: {
				routes: [{
					url: '/services/front-end',
					label: 'front end development',
				},
				{
					url: '/services/wordpress',
					label: 'wordpress customization',
				},
				{
					url: '/services/ux-strategy',
					label: 'ux / strategy',
				},
				{
					url: '/services/css',
					label: 'css with style',
				},
				{
					url: '/services/audio-recording',
					label: 'css with style',
				},
				{
					url: '/services/team-support',
					label: 'team support',
				}],
			},
		},
		services: {
			title: 'What We Do',
			content: '<p class="center-text full-w no-foot">Cruzat.Media can assist with:</p>',
			loc: 'serv',
			titleNav: [
				'/about',
				'/projects',
			],
			endNav: {
				routes: [{
					url: '/about',
					label: 'Cruzat.Media',
				}]/*,
				{
					url: '/projects',
					label: 'Our Work',
				}],*/
			},
		},
		contact: {
			title: 'Say Hello. (Hello)',
			content: "I am the contact page",
		},
		ostara: {
			title: 'Ostara, You\'ve Been Hiding...',
			content: "",
			loc: 'found_me',
			titleNav: [
				'/projects',
				'/services',
			],
		},
	},
};

// send dat shit
export default cc;