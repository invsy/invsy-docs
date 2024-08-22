import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Invsy docs',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				'@fontsource-variable/inter'
			],
			social: {
				github: 'https://github.com/invsy/invsy'
			},
			sidebar: [
				{ label: 'Getting started', slug: '' },
				{ label: 'Client', slug: 'invsy-client' },
				{
					label: 'Chats',
					items: [
						{ label: 'Create', slug: 'chats/create' },
						{ label: 'Get', slug: 'chats/get' },
						{ label: 'List', slug: 'chats/list' },
						{ label: 'Save', slug: 'chats/save' },
						{ label: 'Delete', slug: 'chats/delete' },
						{ label: 'Delete all', slug: 'chats/delete-all' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Overview', slug: 'guides' },
						{ label: 'Basic Next.js AI chat', slug: 'guides/basic-nextjs-ai-chat' },
						{ label: 'Next.js with Clerk', slug: 'guides/nextjs-with-clerk' },
						{ label: 'Cloudflare Worker', slug: 'guides/cloudflare-worker' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
