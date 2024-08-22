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
				{
					label: 'Guides',
					items: [
						{ label: 'Basic Next.js AI chat', slug: 'guides/basic-nextjs-ai-chat' },
					],
				},
				{
					label: 'SDK',
					items: [
						{ label: 'Client', slug: 'invsy-client' },
						{ label: 'Create', slug: 'chats/create' },
						{ label: 'Get', slug: 'chats/get' },
						{ label: 'List', slug: 'chats/list' },
						{ label: 'Save', slug: 'chats/save' },
						{ label: 'Delete', slug: 'chats/delete' },
						{ label: 'Delete all', slug: 'chats/delete-all' },
					],
				},
				{
					label: 'Snippets',
					items: [
						{ label: 'Next.js with Clerk', slug: 'snippets/nextjs-with-clerk' },
						{ label: 'Cloudflare Worker', slug: 'snippets/cloudflare-worker' },
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
