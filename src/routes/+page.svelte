<script>
	import { Button, Container, Navbar } from '$lib';
	import Marquee from 'svelte-fast-marquee';
	import {
		CodeIcon,
		CpuIcon,
		DollarSignIcon,
		GitPullRequestIcon,
		GlobeIcon,
		MonitorIcon,
		TabletIcon
	} from 'svelte-feather-icons';
	import StorysetHandCoding from './storyset-hand-coding.svelte';

	const categories = [
		{ icon: GlobeIcon, text: 'Web Dev' },
		{ icon: TabletIcon, text: 'Mobile Dev' },
		{ icon: GitPullRequestIcon, text: 'DevOps' },
		{ icon: CodeIcon, text: 'Full Stack' },
		{ icon: MonitorIcon, text: 'Hardware' },
		{ icon: DollarSignIcon, text: 'Startup' },
		{ icon: CpuIcon, text: 'ML/AI' }
	];
</script>

<svelte:head>
	<title>Gabung ke Komunitas IT Indonesia - Komuna</title>
	<meta
		name="description"
		content="Kembangkan jaringan, cari wawasan baru, dan jadilah bagian dari revolusi digital untuk bangsa."
	/>
</svelte:head>

<Navbar>
	<p class="font-display font-semibold tracking-wide text-xl mr-auto">
		<a href="/">Komuna</a>
	</p>
	<div class="hidden md:flex items-center gap-9 text-sm font-semibold">
		<a href="https://blog.komuna.id" class="">Blog</a>
		<a href="https://forum.komuna.id" class="">Forum</a>
		<a href="https://ui.komuna.id" class="">Komuna UI</a>
		<a href="/" class="">Tentang Kami</a>
		<a href="https://github.com/komuna-id" class="">GitHub</a>
	</div>
	<div class="ml-auto flex items-center gap-2.5">
		<Button href="https://account.komuna.id/auth/login" size="sm">Login</Button>
		<Button href="https://account.komuna.id/auth/signup" size="sm" variant="primary">Daftar</Button>
	</div>
</Navbar>

<div class="min-h-[450px] px-6 py-20 text-center flex flex-col items-center justify-center">
	<h1
		class="max-w-xl leading-9 md:leading-10 font-display font-semibold tracking-wide text-2xl md:text-3xl"
	>
		Gabung ke Komunitas IT Indonesia
	</h1>
	<p class="max-w-xl leading-7 dimmed mt-2">
		Kembangkan jaringan, cari wawasan baru, dan jadilah bagian dari revolusi digital untuk bangsa.
	</p>

	<div
		class="w-56 sm:w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-5"
	>
		<Button href="https://forum.komuna.id" variant="primary">Masuk ke forum</Button>
		<Button href="https://blog.komuna.id">Kunjungi blog</Button>
	</div>
</div>

<div class="w-full max-w-screen-lg mx-auto px-0 md:px-5 py-8 md:py-10">
	<Marquee speed={50} class="">
		{#each categories as { icon, text }}
			<div class="min-w-36 mr-7 bg-white border border-neutral-200 px-5 py-4 rounded-md">
				<svelte:component this={icon} class="w-7 h-7 mx-auto mb-3 stroke-[1.675] text-blue-600" />
				<p class="text-center">{text}</p>
			</div>
		{/each}
	</Marquee>
</div>

<Container class="py-20 flex flex-col md:flex-row items-center gap-16 md:gap-24">
	<div class="flex-1 text-center md:text-left">
		<h2
			class="max-w-md mx-auto leading-9 md:leading-10 font-display font-semibold tracking-wide text-2xl md:text-3xl"
		>
			Ngoprek Jadi Makin Seru Karena Rame-rame
		</h2>
		<p class="max-w-lg mx-auto leading-7 dimmed mt-2.5">
			Kamu bisa tanya-tanya, sharing knowledge dan berbagi tips ke semua orang. Yuk kita kembangin
			skill bareng-bareng. Together we are strong!
		</p>
	</div>
	<div class="flex-1">
		<StorysetHandCoding class="w-72 h-72 lg:w-80 lg:h-80" />
	</div>
</Container>

<Container class="pt-2 pb-8 text-center">
	<p class="dimmed text-sm mb-4">
		Special thanks to <a href="https://storyset.com/" class="text-blue-600">Storyset</a> for cool illustrations.
	</p>
	<p class="dimmed text-sm">Proudly made in Bandung</p>
</Container>
