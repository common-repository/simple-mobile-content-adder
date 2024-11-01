=== Simple mobile content adder ===
Contributors: mobile-friendly 
Tags: android,android app,android plugin, mobile, mobile plugin, mobile theme, mobile-friendly, responsive, smartphone, wptouch,build mobile app plugins,create blog app,free mobile app plugin builder,ios app,mobile,mobile app plugin builder,mobile site,native app,native app plugin,Native mobile app plugin,Plugins To Turn WordPress Into A mobile app plugin,push notifications,web app,webapp,web apps,webapps,webapp native WordPress,website to mobile app plugin,windows mobile,WordPress app,WordPress app builder,WordPress app maker,WordPress apps,WordPress blog app,wordpress full integrated mobile app plugin codecanyon,WordPress ios app,WordPress iphone app,wordpress mobile,WordPress mobile app plugin,wordpress to android,WordPress to android app,WordPress to android plugin app,WordPress to app,WordPress to Ios plugin,WordPress to mobile app plugin,WordPress to winphone plugin,wp mobile app plugin,wp mobile, website mobile app plugin,mobile plugin friendly,mobile converter,mobile plugins wp, mobile app plugin converter, mobile app pluginlication builder, mobile blog app creator,mobile friendly blog app, creator,android mobile plugins,mobile plugins theme, mobile plugins wptouch, mobile plugins apps
Requires at least: 4.0
Tested up to: 4.6.1
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Best for mobile content ads insert, Add custom content to your posts, pages and/or footer

== Description ==	

This plugin allows you to easily add custom content to your posts, Best for mobile content ads insert, Add custom content to your posts, pages and/or footer

1. Show disclaimers
2. Show banners
3. Show author info 
4. Show ads (as long as they do not contain JavaScript)
5. Display other cool things by your wishes
Note: The plugin doesn’t come with templates for author boxes, banners etc. 
Enable and use at least one display option (Automatic Display, Widget, Shortcode, PHP function call)
Enable display on at least one WordPress page type (Posts, Static pages, Homepage, Category pages, Search Pages, Archive pages)
For Posts and static pages select default value On all Posts / On all Static pages unless you really know what are you doing
If you don't see inserted code block turn on debuging functions: Label inserted blocks, Show available positions for automatic display (Ad Inserter menu item in the WordPress toolbar on the top of every post/page)
Few typical settings are described on the FAQ page. Please make sure you have also read WARNINGS on the bottom of this page and instructions for Debugging.

Content ads get the best click through rate. If you want to increase your CTR and Google AdSense revenue, then you need to start adding ads within your post content.

Insert Post ads allow you to automatically insert ads after paragraphs of your post content. This saves you the hassle of manually entering ads in each of your post. This plugin is based on our article about how to insert ads within your post content in WordPress.

If you like this plugin and want to learn more about WordPress, then I suggest that you visit WPBeginner. It is one of the largest free WordPress resource site with tons of WordPress Tutorials, and I'm proud to say that I created it. You can also subscribe to my YouTube channel where I share video tutorials.

Settings

Each code block has 4 display options:

Automatic Display
Widget
Shortcode
PHP function call
Normally for each code block you use only one display option. Of course, you can use all 4 options simultaneously taking into account that all display options use the same block settings (with some exceptions mentioned below).

To rename code block click on the block name. To display code block (ad) at some position you need to enable and use at least one display option.

Automatic Display Options:

Display Before Post (before post or posts on blog pages, previously named Before Title)
Display Before Content (before post or static page text)
Display Before Paragraph (on posts, static pages and blog pages)
Display After Paragraph (on posts, static pages and blog pages)
Display After Content (after post or static page text)
Display After Post (after post or posts on blog pages)
Display Before Excerpt (on blog pages)
Display After Excerpt (on blog pages)
For single posts or static pages display position Before Post usually means position above the post/page title, for blog pages Before Post position means position above all the posts on the blog page.

For single posts or static pages display position After Post means position below the post/page after all the content, for blog pages After Post position means position below all the posts on the blog page.

Order of display positions in a typical post is the following:

[Before Post]
Post Title
[Before Content]
Paragraph 1
Paragraph 2
Paragraph ...
Paragraph n - 1
Paragraph n
[After Content]
Comments
Output of some other plugins
[After Post]
Of course, the final order of items depends also on other plugins. Ad Inserter is by default called as one of the last plugins. You can change Plugin priority on the settings page (tab *).

Please use Show positions function to see available positions for automatic display (Ad Inserter menu item in the WordPress toolbar on the top of every post/page).

Block Alignment and Style:

No Wrapping (leaves ad code as it is, otherwise it is wrapped by a div)
Custom CSS (You can enter custom CSS code for wrapping div)
None (simple div with thin margin)
Align Left
Align Right
Center
Float Left (ad on left with wrapped text on right)
Float Right (ad on right with wrapped text on left)
[ Preview ]

Ad Inserter has a very useful function that can help you to check if the ad code is working and to see how it will look like when it will be inserted. Click on the Preview button to open Preview window. WARNING: Some adblockers may block code on the Ad Inserter preview window. If you see warning PAGE BLOCKED or you don't see your code and the widow elements are distorted, make sure you have disabled ad blockers. On the top of the window there is visual CSS editor and four buttons and below there is CSS code of the wrapping div (which can be edited manually) and 'Block Alignment and Style' selection.

Below the settings there is a preview of the saved code between two dummy paragraphs. Here you can test various block alignments, visually edit margin and padding values of the wrapping div or write CSS code directly and watch live preview. Highlight button highlights background, wrapping div margin and code area, while Reset button restores all the values to those of the current block. You can resize the window (and refresh the page to reload ads) to check display with different screen widths. Once you are satisfied with alignment click on the Use button and the settings will be copied to the active block.

Please note that the code displayed here is the code that is saved for this block, 
<a target="_blank" href="https://wordpress.org/plugins/zen-mobile-app-native/">mobile app plugin</a>  while block name, alignment and style are taken from the current block settings (may not be saved). No Wrapping style inserts the code as it is so margin and padding can't be set. However, you can use own HTML code for the block.

Please note that Preview window uses also Header and Footer code.

Check screenshots for explanation on alignment.

PLEASE NOTE: If you are using No Wrapping style and need to hide code on some devices using client-side detection (CSS Media Queries) then you need to add appropriate class to your CSS code (ai-viewport-1, ai-viewport-2, ai-viewport-3). This doesn't apply to widgets as they always contain a wrapping div.

For all display positions you can also define WordPress page types where the ads can be displayed. PLEASE NOTE: Regardles of other settings you need to enable display on AT LEAST ONE PAGE TYPE:

Single pages:

Posts
Static pages
Blog pages:

Homepage
Category pages
Search Pages
Tag / Archive pages
Insertion (located in the Misc section) is possible also for:

404 page (Error 404: Page not found)
Feed
Please Note For shortcodes and PHP function calls it is possible to ignore enabled page types and use them on any page. See down for details.

You can also disable ads on certain posts or static pages. For each code block on posts or static pages you first define default display settings for posts/pages page type. Then you can define post/page exceptions on the post/page editor page (check Ad Inserter Exceptions meta box below). Exceptions work only on page/post content (positions Before Content, Before Paragraph, After Paragraph, After Content). For one or few exceptions it is easier to first enable ads on All Posts/Static pages page types and then either white or black-list single url or few space-separated urls (click on the Lists button).

PARAGRAPHS

Paragraph number for Automatic Display options Before and After Paragraph:

0 means random paragraph position
value between 0 and 1 means relative position in post or page (e.g. 0.3 means paragraph 30% from top or bottom)
1 or more means paragraph number
[ Counting ]
You are searching for an easy way to create an app out of your WordPress blog? Then mobile app plugin  is a great tool to convert your WordPress site into a native mobile app plugin for iOS and Android in only a few minutes - including iPhone, iPad, Android phones and tablets! mobile app plugin does not require any skills and no coding and even though you can individualize your app to your own needs. We even upload the App for you, so your readers can download your Android app and Apple app right from the App Stores.
Regardless of the platform, native and hybrid apps are published to an app store. Apple has the strictest rules for accepting apps into its store. It requires the app to run fast and follow some basic UI principles. It could take anywhere from one to two weeks for Apple to either accept or reject an app.
<a target="_blank" href="https://wordpress.org/plugins/webapp-builder/">mobile app plugin</a>

mobile friendly helps you create native mobile app plugins for your WordPress website in three simple steps. <a target="_blank" href="https://wordpress.org/plugins/wp2android-turn-wp-site-into-android-app/">mobile app plugin</a> You can create apps for iOS, Android, Windows and Blackberry. All of your content will be readily available in the apps. This plugin also lets you control the contents delivered to mobile.


== Installation ==

1. Unzip the plugin file
2. Upload the folder `simple-content-adder` and it's contents to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Click Add New under the Simple mobile content adder in the left sidebar.
5. Start creating! 

MobilePress is a plugin for WordPress that renders a mobile friendly version of your WordPress website or blog. It allows for custom themes and a few other mobile friendly settings.

The latest 1.2 release of MobilePress is a rewrite and restructuring of the plugin as it moves towards a MobilePress 2.0 release in the near future. The idea behind the 1.2 release is to push these changes to the existing base and then constantly push new updates with exciting features over the next few weeks.

Please do leave feedback and file bugs at the dedicated support forums on the
If you have a desktop site which is not responsive or mobile compatible this plugin would do the job for you and your mobile visitors. It'll show a beautiful and well-designed mobile theme to only mobile visitors without modifying the code of your regular theme.

Features
Custom Menus/Navigation - Fully compatible with WordPress custom menus. Use an existing menu or assign newly created menu for your mobile theme.
Set a custom homepage for mobile visitors or by default use WordPress reading options
Change mobile theme Logo
Change mobile theme homepage Subtitle text
Can change themes or create new mobile theme easily.
Can Enable/Disable mobile mode.
Can change theme footer text
Can change Switch To Desktop Text
Can change Switch To Mobile Text

== Frequently Asked Questions ==

= What is the mobile app plugin? =

What do you get with mobile friendly?
Automatic content updates -- Your mobile app plugin updates without any work required. No delay between the content on your WordPress site and the content appearing in your mobile app plugin.
Full customization of your mobile app plugin’s style -- Make it yours. Add colors, your logo, customize the mobile app plugin menu and more
A mobile app plugin that works on all major platforms -- Guaranteed to work on iPhone, iPad, Android phones and tablets.
No-hassle publishing -- No building or messing with code. mobile friendly gets your mobile app plugin published for you, on your account or ours if you don't have one
Effortless push notifications -- Send push notifications for new content automatically or manually, as often as you want.
Mobile advertising and monetisation -- Make more money from your mobile traffic. Use banner ads, interstitials and native ads (MoPub, Google DFP, Admob, Adsense and more supported).
One-tap commenting -- Make commenting on mobile easy. Your mobile app plugin will store your user’s details so they can comment on content in just one tap.
Easy social sharing -- Encourage sharing from mobile devices. With just a single tap, your users can tell their friends about you on social media sites, Whatsapp, email, or SMS.
Full Support for Google Analytics -- Keep track of traffic. Use Google Analytics to track how many people use your mobile app plugin, how they use it, and what content works best.
Unmatched WordPress support -- Your mobile app plugin supports all the commonly used WordPress elements including custom post types, custom fields, tags, categories, posts, pages and more.
Out of the box support for most WordPress plugins -- mobile friendly is the only mobile app plugin solution providing simple access to functionality offered by most third party plugins (some customization might be required for the most complex ones)
Advanced HTML/CSS/PHP editor -- Know your html from your css? Use the editor to customize page screens, fields, support for subscriptions/membership sites, and much more.
All the features
Your own design for icon, launch images, logo and UI colors
Unlimited automatic and manual push notifications (compatible with posts and custom post types)
Customisable app menu with pages, categories, tags, custom taxonomies and links
User preferences for push notifications (by category)
Support for posts, pages, categories, custom post types and custom fields
Support for videos, images, galleries and almost every HTML5 widget you can embed in your content
Advertising with AdMob, Adsense, MoPub, Google DFP or your own custom HTML ads
Banner, interstitial and native ads supported
Offline access to your content
Support for Google Analytics with complete app usage statistics
Custom HTML/PHP/CSS in the article contents (add all the functionality you need)
WordPress, Facebook and Disqus comments supported
Social Sharing features (one tap to share to Facebook, Twitter, Whatsapp, email and more)
Support for Youtube, Vimeo and other video players, Soundcloud and any HTML5 widget or player
Support for image galleries
User favourite posts
Multilanguage interface, including Arabic, Azerbaijani, Chinese (Si.), Chinese (Tr.), Danish, Dutch, Farsi, Finnish, French, German, Greek, Hebrew, Hindi, Italian, Japanese, Korean, Malay, Norwegian (Bo.), Portuguese (Br.), Russian, Spanish, Swedish and Turkish.
RTL support for Arabic and Israeli and RTL content
Create a members only, login protected mobile app plugin with access to your WordPress user database
App Submission service to Apple App Store and Google Play (we do all for you)
Ability to publish with your own Developer accounts on Google Play and App Store
Complete integrations with WP Groups and the WordPress user database for login protected mobile app plugins


- mobile app plugin is a plugin which enables you to get a real mobile theme for your WordPress site with the most advanced mobile user experience.
- You can create your own Native Android & iPhone App, publish it to the Google Play Store & the Apple Appstore and notify your Android App's users about new content by sending push notifications directly to their mobile devices.


== Other Notes ==
Few very important things you need to know in order to insert code and display some ad:

Enable and use at least one display option (Automatic Display, Widget, Shortcode, PHP function call)
Enable display on at least one WordPress page type (Posts, Static pages, Homepage, Category pages, Search Pages, Archive pages)
For Posts and static pages select default value On all Posts / On all Static pages unless you really know what are you doing
If you don't see inserted code block turn on debuging functions: Label inserted blocks, Show available positions for automatic display (Ad Inserter menu item in the WordPress toolbar on the top of every post/page)
Few typical settings are described on the FAQ page. Please make sure you have also read WARNINGS on the bottom of this page and instructions for Debugging.

Content ads get the best click through rate. If you want to increase your CTR and Google AdSense revenue, then you need to start adding ads within your post content.

Insert Post ads allow you to automatically insert ads after paragraphs of your post content. This saves you the hassle of manually entering ads in each of your post. This plugin is based on our article about how to insert ads within your post content in WordPress.

If you like this plugin and want to learn more about WordPress, then I suggest that you visit WPBeginner. It is one of the largest free WordPress resource site with tons of WordPress Tutorials, and I'm proud to say that I created it. You can also subscribe to my YouTube channel where I share video tutorials.

Settings

Each code block has 4 display options:

Automatic Display
Widget
Shortcode
PHP function call
Normally for each code block you use only one display option. Of course, you can use all 4 options simultaneously taking into account that all display options use the same block settings (with some exceptions mentioned below).

To rename code block click on the block name. To display code block (ad) at some position you need to enable and use at least one display option.

Automatic Display Options:

Display Before Post (before post or posts on blog pages, previously named Before Title)
Display Before Content (before post or static page text)
Display Before Paragraph (on posts, static pages and blog pages)
Display After Paragraph (on posts, static pages and blog pages)
Display After Content (after post or static page text)
Display After Post (after post or posts on blog pages)
Display Before Excerpt (on blog pages)
Display After Excerpt (on blog pages)
For single posts or static pages display position Before Post usually means position above the post/page title, for blog pages Before Post position means position above all the posts on the blog page.

For single posts or static pages display position After Post means position below the post/page after all the content, for blog pages After Post position means position below all the posts on the blog page.

Order of display positions in a typical post is the following:

[Before Post]
Post Title
[Before Content]
Paragraph 1
Paragraph 2
Paragraph ...
Paragraph n - 1
Paragraph n
[After Content]
Comments
Output of some other plugins
[After Post]
Of course, the final order of items depends also on other plugins. Ad Inserter is by default called as one of the last plugins. You can change Plugin priority on the settings page (tab *).

Please use Show positions function to see available positions for automatic display (Ad Inserter menu item in the WordPress toolbar on the top of every post/page).

Block Alignment and Style:

No Wrapping (leaves ad code as it is, otherwise it is wrapped by a div)
Custom CSS (You can enter custom CSS code for wrapping div)
None (simple div with thin margin)
Align Left
Align Right
Center
Float Left (ad on left with wrapped text on right)
Float Right (ad on right with wrapped text on left)
[ Preview ]

Ad Inserter has a very useful function that can help you to check if the ad code is working and to see how it will look like when it will be inserted. Click on the Preview button to open Preview window. WARNING: Some adblockers may block code on the Ad Inserter preview window. If you see warning PAGE BLOCKED or you don't see your code and the widow elements are distorted, make sure you have disabled ad blockers. On the top of the window there is visual CSS editor and four buttons and below there is CSS code of the wrapping div (which can be edited manually) and 'Block Alignment and Style' selection.

Below the settings there is a preview of the saved code between two dummy paragraphs. Here you can test various block alignments, visually edit margin and padding values of the wrapping div or write CSS code directly and watch live preview. Highlight button highlights background, wrapping div margin and code area, while Reset button restores all the values to those of the current block. You can resize the window (and refresh the page to reload ads) to check display with different screen widths. Once you are satisfied with alignment click on the Use button and the settings will be copied to the active block.

Please note that the code displayed here is the code that is saved for this block, while block name, alignment and style are taken from the current block settings (may not be saved). No Wrapping style inserts the code as it is so margin and padding can't be set. However, you can use own HTML code for the block.

Please note that Preview window uses also Header and Footer code.

Check screenshots for explanation on alignment.

PLEASE NOTE: If you are using No Wrapping style and need to hide code on some devices using client-side detection (CSS Media Queries) then you need to add appropriate class to your CSS code (ai-viewport-1, ai-viewport-2, ai-viewport-3). This doesn't apply to widgets as they always contain a wrapping div.

For all display positions you can also define WordPress page types where the ads can be displayed. PLEASE NOTE: Regardles of other settings you need to enable display on AT LEAST ONE PAGE TYPE:

Single pages:

Posts
Static pages
Blog pages:

Homepage
Category pages
Search Pages
Tag / Archive pages
Insertion (located in the Misc section) is possible also for:

404 page (Error 404: Page not found)
Feed
Please Note For shortcodes and PHP function calls it is possible to ignore enabled page types and use them on any page. See down for details.

You can also disable ads on certain posts or static pages. For each code block on posts or static pages you first define default display settings for posts/pages page type. Then you can define post/page exceptions on the post/page editor page (check Ad Inserter Exceptions meta box below). Exceptions work only on page/post content (positions Before Content, Before Paragraph, After Paragraph, After Content). For one or few exceptions it is easier to first enable ads on All Posts/Static pages page types and then either white or black-list single url or few space-separated urls (click on the Lists button).

PARAGRAPHS

Paragraph number for Automatic Display options Before and After Paragraph:

0 means random paragraph position
value between 0 and 1 means relative position in post or page (e.g. 0.3 means paragraph 30% from top or bottom)
1 or more means paragraph number
[ Counting ]

Paragraphs can be counted from top or from bottom. It is also possible to count only paragraphs that contain/do not contain certain text or count only paragraphs that have some minimum or maximum number of words. If more than one text is defined (comma separated) and "contain" is selected then the paragraph must contain ALL texts.

Paragraphs are not counted inside <blockquote> elements. Of course, there is an option to enable counting also inside <blockquote>.

Please Note Paragraph processing works on every post or page according to settings. Therefore, if you enable display also on blog pages (home, category, archive, search pages) and your theme does not display post excerpts but complete posts, Ad Inserter will by default insert code blocks into ALL posts on the blog page (according to settings). To enable insertion only into specific post(s) on blog pages define Filter. You can also leave Filter (click Misc button) empty (means all posts on the blog page) and define maximum number of insertions.

You can also define paragraph HTML tags. Normally only <p> tags are used. If your post contains also <div> or header tags, you can define comma separated list of tags used to count paragraphs (e.g. p, div, h2, h3).

WARNING: Each code block you insert in post adds one <div> block unelss you use No wrapping style. Before Paragraph will insert code before <tag>, After Paragraph will insert code after closing </tag>. After Paragraph will not work if you specify tag names that have no closing tags! Use # as tag if paragraphs have no tags and are separated with the \r\n\r\n characters.

Minimum number of paragraphs / Minimum/Maximum page/post words: do not display ad if the number of paragraphs or the number of words is below or above limit (used only for position Before or After selected paragraph).

[ Clearance ]

You can define parameters to avoid insertion at paragraph positions where above or below is some unwanted element (heading, image, title). This is useful to avoid inserting ads where they may not look good or where it is not allowed.

You can define in how many paragraphs above and below should specified text be avoided. And if the text is found you can choose to either skip insertion or try to shift insertion position up or down up to the specified number of paragraphs.

On every post/page there is a toolbar on the top. Ad Inserter menu item has few functions to visualize tags and positions for automatic insertion:

Show HTML tags: visualizes HTML tags
Show positions: shows available positions for automatic insertion. It uses paragraph tags for blocks configured for After or Before paragraph.
Additional Post/Static Page Options

You can define post/page minimum and maximum word length. Display after N days checks the date when the post was published and delays publishing.

Additional Options for code blocks:

PHP processing: Enabled or Disabled - Enable processing of PHP code. If there is a non-fatal error in the PHP code, it will not break the website.

Use {category}, {short_category}, {title}, {short_title}, {tag}, {smart_tag} or {search_query} tags to insert actual post data into code blocks
Use {author} for post author username or {author_name} for post author name to insert post author data into code blocks (works only inside posts)
To rotate different ad versions separate them with |rotate| - Ad Inserter will randomly select one of the ads
WARNING: If you are using caching ad rotation may not work as expected. It works only when the page is generated and Ad Inserter is called. In such cases please make sure you have disabled caching when you are using |rotate|.

Ad Inserter is perfect for displaying any kind of ads. It can also be used to display various versions of ad, for example AdSense ads using channels to test which format or color combination performs best.

BUTTONS

[ Misc ]

For each code block you can also limit how many times on the page the code (or ad) will be inserted. There are two settings for this:

Max N insertions: simple limit for the first N calls for the block
Filter: define which cals are wanted - single number or comma separated numbers
This is useful in many cases where you can't remove unwanted insertions of the code with other settings:

If you need to insert ad before the first, third and fith excerpt on the homepage you simply specify 1, 3, 5 for the filter.
In some WP themes hooks (that call Ad Inserter insertion functions) are called more than once. In such case you might get unwanted insertions. Simply set the filter to the number of the wanted call(s). Use debugging function Show positions on every post/page to show available positions for automatic insertion with counters.
If you use adinserter PHP function and you don't want that for each time the functon is called on the page the code is inserted, you can simply filter calls.
If you oly need the first N calls (insertions) then leave filter to 0 and use Max N insertions instead.
Please Note Paragraph processing works on every post or page according to settings. Therefore, if you enable display also on blog pages (home, category, archive, search pages) and your theme does not display post excerpts but complete posts, Ad Inserter will by default insert code blocks into ALL posts on the blog page (according to settings). To enable insertion only into specific post(s) on blog pages define Filter. You can also leave Filter to 0 (means all posts on the blog page) and define maximum number of insertions.

General tag: text used for {tag} and {smart_tag} if the post has no tags - useful for contextual ads - works only inside posts/static pages!

Display Block to:

All users (default)
Logged in users
Not logged in users
Administrators (usefull for testing/debugging)
WARNING: If you are using caching this may not work as expected. The check works only when the page is generated and Ad Inserter is called. Make sure you have disabled caching when you are using such settings.

[ Lists ]

Do not display ads in certain caregories e.g sport, news, science,... (black list) or display ads only in certain categories (white list): leave category list empty and set it to Black list to show ads in all categories.

WARNING: If category name contains commas or spaces, use category slug instead. Also make sure you have enabled display on Category pages.

Do not display ads in posts with certain tags (black list) or display ads only in posts with certain tags (white list). Leave tag list empty and set it to Black list to show ads for all tags. Also make sure you have enabled display on Tag / Archive pages.

Do not display ads in posts/pages with certain post IDs (black list) or display ads only in posts with certain IDs (white list). Leave Post ID list empty and set it to Black list to show ads for all IDs.

Do not display ads on pages with certain urls (black list) or display ads only on pages with certain urls (white list): leave url list empty and set it to Black list to show ads for all urls. Url used here is everything starting form the / after the domain name. For example: if web address is url tou can also use partial urls with *. To filter all urls starting with /url-start use /url-start*, to filter all urls that contain url-pattern use *url-pattern*, to filter all urls ending with url-end use *url-end. WARNING: Separate urls with SPACES.

Do not display ads on pages with certain url query parameters (black list) or display ads only on pages with certain url parameters (white list): leave url parameter list empty and set it to Black list to show ads for all url. You can specifiy either parameters or parameters with values. For example for url  you can define url parameters 'data, customer-id=22' to display ad only for urls where there is data paramteter and customer-id parameter with value 22. Separate parameters with comma.

Do not display ads to users from certain referers (domains) e.g technorati.com, facebook.com,... (black list) or display ads only for certain referrers (white list): use # for no referer (direct visit), leave referrers list empty and set it to Black list to show ads for all referrers.

WARNING: If you are using caching, referer check may not work as expected. It works only when the page is generated and Ad Inserter is called. Make sure you have disabled caching when you are using such settings.

[ Devices ]

IMPORTANT: There are two types of device detection: server side and client-side.

Client-side detection

Desktop devices
Tablet devices
Phone devices
Client-side detection of mobile/desktop devices works always as it is done in visitor's browser. CSS media queries and viewport (browser's screen) width are used to show or hide Ad Inserter code blocks:

PLEASE NOTE: In most cases you should use ONLY client-side detection type. Works perfectly with responsive designs as they use CSS media queries.

BUT BE CAREFUL: Some ad networks (like AdSense) limit ads per page. The ads are still inserted (loaded and counted) for all devices, but for unwanted devices they are hidden by the browser using CSS media queries based on viewport widths.

Up to 3 viewport names and widths can be defined on the Ad Inserter Settings tab * (Ad Inserter Pro supports up to 6 viewports). Default values are:

Desktop: 980 pixels or more
Tablet: from 768 pixels to 979 pixels
Phone: less than 768 pixels
Server-side detection

Desktop devices
Mobile devices (tablets and phones)
Tablet devices
Phone devices
Desktop and tablet devices
Desktop and phone devices
Server-side detection of mobile/desktop devices works only when Ad Inserter plugin is called. It is called by WordPress when it needs to generate a page. However, when you are using caching, it saves created page for quicker serving. In such cases the user might get (saved) page for wrong device (used by some previous visitor who triggered page caching). To solve this issue use themes that generate separate pages for desktop and mobile devices or use Mobile Theme Switcher plugin. Server-side detection uses User-Agent string combined with specific HTTP headers to detect the environment.

PLEASE NOTE: Use server-side device type detection only when you need to generate (display and count) ONLY code blocks for specific device type. In all other cases switch it off.
= **A Few Highlights:**
= * In just a few clicks, you’ll be able to use ’s mobile website builder to create a mobile-friendly version of your WordPress site * Customize your new mobile site to your liking with ’s drag-and-drop editor * Loads of features designed to make your site user-friendly and engaging * Works on all smartphones * Maintains the overall look and feel of your regular WordPress site * Mobile SEO-friendly to help your site appear higher in search rankings (Google, Bing, etc.) * Automatically syncs with your WordPress website * Full access to free site analytics * No coding required * Integrated with Google Analytics and AdSense

= **Features:**
= ’s mobile website builder plugin provides you with access to tons of mobile-friendly features designed to make your mobile site look great, drive customer conversion and make customizing your site simple. All these features can be added or removed using ’s drag-and-drop editor.

Here’s just a sample of ’s features:

Premium

Click-to-Call- Maybe the most important feature for small businesses, Click-to-Call enables customers to call your business with just one click
Coupons- Put coupons directly into the hands of customers by dragging and dropping them onto a site
Mobile Maps- Ensures your customers will always be able to find their way to your door
Business Hours- Customers need to know when your open! Make your business hours readily available everyone to see
Yelp Reviews- Inspire confidence in customers by providing your best reviews from Yelp
Free

Image Slider- Give your site some life by including this eye-catching way to display photos
Photo Gallery- Build out a photo gallery to show off your favorites pictures
Video- Embed a video on your mobile site
Facebook Like- Allow customers to like you on Facebook right from your mobile site
Social Icons- Easily add all links to all your social media pages
= **Awards**
= There’s a reason over five million websites have been made mobile-friendly with , and we’ve been honored with some of the most prestigious awards in the industry.

TopTenREVIEW Gold Award - #1 Mobile Website Builder 2013
Website Magazine - #1 Mobile Design Tool 2013 (Top 50 Movers and Shakers)
AlwaysOn: Top 100 Private Companies to Watch
OnMobile: Top 50 Mobile Companies to Watch
W3 Awards: Silver Award for Mobile (Business)
Mobile Merit Award: Social Responsibility Runner-Up
Mobile Excellence Awards: Finalist for Industry Star, Most Innovative Company and Technology Breakthrough
= **I want to create a mobile website**
= 1. Go to your WordPress Control Panel 2. Click "Plugins", then add new 3. Enter " Mobile" as search term and click "Search Plugins" 4. Download and install the Mobile WordPress plugin 5. Click the "Activate Plugin" link 6. Click "Create your mobile site now"; see "How it Works" section below 7. You will be redirected to Mobile site builder 8. Create your mobile site and publish it 9. Click link to go back to your WordPress Control Panel 10. Confirm your mobile site URL by clicking YES

= **I already have a mobile site**
= 1. Go to your WordPress Control Panel 2. Click "Plugins", then add new 3. Enter " Mobile" as search term and click "Search Plugins" 4. Click "Install" 5. Click the "Activate Plugin" link 6. Confirm your mobile site URL by clicking YES

Note: Go to your smartphone and make sure you can see your mobile-friendly site.

= **How it works:**
= Step 1

Download and install the Mobile mobile website builder WordPress plugin then click the “Get Started” button. Mobile will then look at your desktop site and make a new mobile-friendly version.

Step 2

Customize your new mobile website in the  Site Builder. Choose from dozens of drag-and-drop features such as Click-to-Call, Mobile Maps and Contact Forms. You can use the editor to customize all aspects of your site: navigation styles, colors, images, pages and more.

Step 3

Publish the site and set up the mobile redirect by heading back to the Mobile mobile website builder plugin in your WordPress dashboard.
WP Smart Mobile automatically gets your WordPress blog mobile-ready with a beautiful theme that automatically adjusts depending on the device it's accessed on, whether it's an iPhone, Android, BlackBerry, or Windows.

Customize the design, enable ads, add analytics code quickly and easily from the admin panel. Your current theme will still be shown when users access your site from a desktop, but on mobile devices they'll be shown a beautiful mobile-optimized theme instead, without you having to touch any code whatsoever. The plugin comes with three unique themes built-in that are deeply customizable through your WordPress admin panel.
What some of our customers say about mobile friendly
“I had previously worked with four different mobile app plugin developers and none of them were able to get the job done for me the way I wanted it. It took just two days for mobile friendly to get my WordPress website into an iPhone and Android mobile app plugin." Nick Coffey, The Cardinal Connect

"Exceptional product for a great price. Very responsive customer services and truly a one-of-a-kind service." Chris Burhans, Sports Mockery

"First and foremost, the support I have received from the mobile friendly team has been phenomenal. They have gone above and beyond basic support to even doing extra development to add features to accommodate the various minor problems I had run into. Additionally, the mobile friendly platform is very easy to use and is an incredible tool to create native mobile app plugins from a WordPress site." Kevin Trehan, North American Retail Hardware Association

"Working with mobile friendly was the best decision we took at launching our WordPress News app. Everything worked like a charm and i would recommend the service to anyone." Fola Akinmolayan, Neo-2 Limited

"The guys at mobile friendly are amazing. Not only have they created this crazily easy-to-use product that lets you build native iOS apps (iPhone and iPad supported) and Android mobile app plugins for your website at an affordable price, but they work tirelessly with you to ensure you are happy with your mobile app plugins. We can't recommend mobile friendly enough!" Stephan Whelan, Founder at DeeperBlue.com

"They left no stone unturned in making our mobile app plugin perfect! It has been a pleasure working with them." Paul Andrew, Founder of Speckyboy Magazine

"The team at mobile friendly built astonishing mobile app plugins for the main blogs in our network. Fast development, great support, and of course beautiful mobile app plugins. What more could we ask for?" Fernando Serer, CEO and founder of Blogestudio

"Fantastic plugin and service. We now have a great looking native iPhone app and Android mobile app plugin that stays up-to-date with our site automatically. mobile friendly allowed us to focus on our content without writing a single line of code to get our apps built." Luke Wheeler, Editor of Compare The Cloud
You are searching for an easy way to create an app out of your WordPress blog? Then mobile friendly is a great tool to convert your WordPress site into a native mobile app plugin for iOS and Android in only a few minutes - including iPhone, iPad, Android phones and tablets! mobile friendly does not require any skills and no coding and even though you can individualize your app to your own needs. We even upload the App for you, so your readers can download your Android app and Apple app right from the App Stores.

Turn your WordPress blog into a native app for iOS and Android <a target="_blank" href="https://wordpress.org/plugins/zen-mobile-app-native/">mobile app plugin</a>
**You can build your individual Android and Apple app using your favorite colors and your own logo. First of all, please install our free mobile friendly WordPress app plugin and then you can change your native app just the way you want it to look. Instantly test it using our mobile friendly Preview app for iOS and Android from the Apple App Store or Google Play™ Store. You can test it as long as you want. If you like it, go to http://www.mobile friendly.com and we will take care of publishing your very own app to the Apple and Google Play Store. Your readers can download your app from there and read your articles on their iPhone, iPad or Android smartphone. If you want to learn more about mobile friendly, please check out our website.

Increase the number of loyal readers of your blog with Push Notification in your own native app for Apple and Android
Notify your blog readers with our free push notification service build into the plugin. This service will increase your number of readers largely, as they will receive notifications on their iPhone, iPad or Android smartphone whenever you have to share something with them. You can decide when and what you want to push. The notifications pops up on the Apple or Android devices and are also highlighted in the app itself. We really want to make sure that your readers will never miss a story of you again!

Have your native app for iPhone, iPad and Android devices indexed by Google
As Google takes care of mobile friendliness as a ranking factor we have added an awesome feature to our mobile friendly apps: You can get your app indexed by Google with deeplinks right into your native app! This will help to boost your ranking and to gain more app installs and find new readers. At the moment this works for Android apps, but in the future iOS apps will also be indexed.
Watch the video below to learn more and see an example app!
You are searching for an easy way to create an app out of your WordPress blog? Then mobile app plugin  is a great tool to convert your WordPress site into a native mobile app plugin for iOS and Android in only a few minutes - including iPhone, iPad, Android phones and tablets! mobile app plugin does not require any skills and no coding and even though you can individualize your app to your own needs. We even upload the App for you, so your readers can download your Android app and Apple app right from the App Stores.
Regardless of the platform, native and hybrid apps are published to an app store. Apple has the strictest rules for accepting apps into its store. It requires the app to run fast and follow some basic UI principles. It could take anywhere from one to two weeks for Apple to either accept or reject an app.
<a target="_blank" href="https://wordpress.org/plugins/zen-mobile-app-native/">mobile plugin</a>

mobile friendly helps you create native mobile app plugins for your WordPress website in three simple steps. You can create apps for iOS, Android, Windows and Blackberry. All of your content will be readily available in the apps. This plugin also lets you control the contents delivered to mobile.

Native mobile app plugins helps you getting more returning users and that brings more revenue from mobile. mobile friendly also lets you integrate admob to the apps that you build. Which opens up a new revenue stream.

Main features
Instant native mobile app plugins
Apps for iOS, Android, Windows and Blackberry platforms.
Fast and intuitive app interface
Offline access for the content
Control over the content delivered to mobile.
How to create apps using mobile friendly
Install and Activate the plugin Signup in mobile friendly website and provide your website details Download or Publish your app to App store or Play store
Create a completely native mobile phone app by simply installing a plugin, absolutely no coding necessary!<a target="_blank" href="https://wordpress.org/plugins/webapp-builder/">mobile app plugin</a>

Setting up
Install the plugin, set up your app by visiting CMS website. Select WordPress as a feature, choose your theme colors and fonts, add in your website URL in the WordPress tab and you're done.

Features
This plugin creates a full featured native app for your iPhone and Android! With a fantastic interface and a whole lot of features built right in including Search, viewing and posting comments, viewing image galleries. You can be confident your website readership will shoot through the roof.

Push notification
Want to inform your readers about your latest article? You can do just that be sending them Push notifications. Reach both iPhone and Android users in a jiffy. You'll never find a more powerful way to reach your readers.

Powerful and Simple
Add and arrange features on your app by simply dragging and dropping them, change the theme, icons and your your app is instantly updated in real time on both iPhone and Android!

App Analytics
The app also seamlessly integrates with Google analytics, simply add a publisher ID into the CMS and your app usage is completely tracked by industrial strength Google analytics!

 Connector enables you to easily sync your posts with map2app. <a target="_blank" href="https://wordpress.org/plugins/wp2android-turn-wp-site-into-android-app/">mobile app plugin</a>  Map2app is a powerful web based platform that allows you to create beautiful native mobile travel guides for iPhone and Android devices. It also allows you to add to your website a cool map with all of your posts geo-located and grouped in categories. Our maps (and apps) support text, images, audios and videos. Apps are distributed through iTunes Store and Google Play, while the maps can be added to your website as an iframe. Before downloading this plugin be sure to create a map2app account. Don't worry, it is free and it takes less than 20 seconds. You can start from here:


Once you have your map2app account created install this plugin into your wordpress account and sync your posts with our powerful app creator. Once you are done, go to the map2app App Creator, customise the look and feel of your app, test it on your device(s) and voilat! Your app is ready to be published! No coding experience is required! If you have a travel blog, a travel portal or a destination promotion website you should seriously give it a try. Map2app powered hundreds of travel apps that have been downloaded millions of times and that have an outstanding 4.6 stars average rating on both the Stores. Remember that when travellers are on the go they will not visit your website for info but rather they will look for a mobile app plugin that can be their travel companion.

OUR APPS' MAIN FEATURES:

Each app is a mainly a list of custom categories (bars, monuments, beaches... anything you can think of)
Each category can contain places, events and stories (called items)
Each item can have a photo gallery, an audio, a video, a description and a bunch of other fields (telephone, email, etc)
All the items are offline, i.e. the app can be used without any data connection
All the places and categories can be shown on a map with a custom icon ad pin
The map also supports pre-built custom itineraries
Our apps offer extra modules such as "weather", "favourites", "map", "update", etc

android,android app,android mobile plugins,android plugin,build mobile apps,app builder,codecanyon,<a target="_blank" href="https://wordpress.org/plugins/simple-mobile-content-adder/">content-adder</a>free mobile app builder,ios app,mobile,mobile app,<a target="_blank" href="https://wordpress.org/plugins/post-redirect-by-mobiletouch/">post-redirect</a>mobile app builder,mobile app converter,<a target="_blank" href="https://wordpress.org/plugins/mobile-app-builder-by-wappress/">mobile app plugin</a>Mobile App Plugin,mobile application builder,<a target="_blank" href="https://wordpress.org/plugins/map-and-contact-form-widget/">map-and-contact</a>mobile blog app creator,mobile converter,mobile friendly blog app,mobile plugin,<a target="_blank" href="https://wordpress.org/plugins/html-sitemap-lister-by-mobilizeapp/">html-sitemap</a> mobile plugin friendly,mobile plugins apps,mobile plugins theme,mobile plugins wp,mobile plugins wptouch,mobile site,mobile theme,mobile-friendly,native app,native app plugin,Native Mobile App,Plugins To Turn WordPress Into A Mobile App,push notifications,responsive,smartphone,web app,web apps,webapp,webapp native WordPress,webapps,website mobile app,website to mobile app,windows mobile,WordPress app,WordPress app builder,WordPress app maker,WordPress apps,WordPress blog app,wordpress full integrated mobile app codecanyon,WordPress ios app,WordPress iphone app,wordpress mobile,wordpress mobile app,wordpress to android,WordPress to android app,WordPress to android plugin app,WordPress to app,WordPress to Ios plugin,WordPress to mobile app,WordPress to winphone plugin,wp mobile,wp mobile app,wptouch,app for mobile,app for WordPress,app generator,best mobile app builder,build an app,build an app for your website,build an mobile app,build WordPress app,free mobile app,iOs,iPad,iPhone,mobile app generator,mobile application,mobile apps,mobile apps plugins,mobile wordpress aps,native mobile app creator,Native Mobile Apps,wordpress mobile app plugin codecanyon, codecanyon wordpress plugin <a target="_blank" href="https://wordpress.org/plugins/mobile-friendly-app-builder-by-easytouch/">mobile app plugin</a>
<a target="_blank" href="https://wordpress.org/plugins/webapp-builder/">Mobile app plugin</a>

== Changelog ==

= 1.10 - September 30, 2016 =
* Initial release



