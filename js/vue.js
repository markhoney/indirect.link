import {createApp} from 'https://unpkg.com/petite-vue?module';
createApp({
	title: 'Indirect Link',
	site: window.location.pathname.slice(1),
}).mount();
