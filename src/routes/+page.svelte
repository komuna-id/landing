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

<Container class="py-14 flex flex-col md:flex-row items-center gap-16 md:gap-28">
	<div class="flex-1 text-center md:text-left">
		<h2
			class="max-w-md mx-auto leading-9 md:leading-snug font-display font-semibold tracking-wide text-2xl md:text-3xl"
		>
			Ngoprek Jadi Makin Seru Karena Rame-rame
		</h2>
		<p class="max-w-lg mx-auto leading-7 dimmed mt-2.5">
			Kamu bisa tanya-tanya, sharing knowledge dan berbagi tips ke semua orang. Yuk kembangin skill
			bareng-bareng. Together we are strong!
		</p>
		<div class="w-56 md:w-full flex flex-col md:flex-row mx-auto md:mx-0 gap-3 mt-5">
			<Button href="https://forum.komuna.id" variant="primary">Masuk ke forum</Button>
			<Button href="https://blog.komuna.id">Kunjungi blog</Button>
		</div>
	</div>
	<div class="flex-1">
		<StorysetHandCoding class="w-72 h-72 lg:w-80 lg:h-80" />
	</div>
</Container>

<div class="w-full max-w-screen-lg mx-auto px-0 md:px-5 pt-6 pb-8 md:py-12">
	<Marquee speed={50} class="">
		{#each categories as { icon, text }}
			<div class="min-w-36 mr-7 bg-white border border-neutral-200 px-5 py-4 rounded-md">
				<svelte:component this={icon} class="w-7 h-7 mx-auto mb-3 stroke-[1.675] text-blue-600" />
				<p class="text-center">{text}</p>
			</div>
		{/each}
	</Marquee>
</div>

<div class="pb-28" />
<Container class="absolute bottom-0 inset-x-0 py-6 text-center">
	<p class="dimmed text-sm mb-3.5">
		Special thanks to
		<a href="https://storyset.com/" target="_blank" class="text-blue-600"> Storyset </a> for cool illustrations.
	</p>
	<p class="dimmed text-sm">Proudly made in Bandung</p>
</Container>
