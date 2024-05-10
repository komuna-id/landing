<script>
	import { Button } from '$lib';
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

<div class="fixed top-0 inset-x-0 bg-neutral-50">
	<div class="w-full max-w-screen-lg mx-auto px-5 h-16 flex items-center">
		<p class="font-display font-semibold tracking-wide text-lg mr-auto">
			<a href="/">Komuna</a>
		</p>
		<div class="hidden md:flex items-center gap-7 text-sm font-semibold">
			<a href="https://blog.komuna.id" class="">Blog</a>
			<a href="https://forum.komuna.id" class="">Forum</a>
			<a href="https://ui.komuna.id" class="">Komuna UI</a>
			<a href="/" class="">Tentang Kami</a>
		</div>
		<div class="ml-auto flex items-center gap-2">
			<Button size="sm">Login</Button>
			<Button size="sm" variant="primary">Daftar</Button>
		</div>
	</div>
</div>
<div class="pb-24" />

<div class="min-h-[430px] px-6 py-20 text-center flex flex-col items-center justify-center">
	<h1 class="max-w-xl leading-10 font-display font-semibold tracking-wide text-3xl">
		Gabung ke Komunitas IT Indonesia
	</h1>
	<p class="max-w-xl leading-7 dimmed mt-1.5">
		Kembangkan jaringan, cari wawasan baru, dan jadilah bagian dari revolusi digital untuk bangsa.
	</p>

	<div
		class="w-56 sm:w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-4"
	>
		<Button variant="primary">Masuk ke forum</Button>
		<Button>Kunjungi blog</Button>
	</div>
</div>

<div class="w-full max-w-screen-lg mx-auto px-5 py-8">
	<p class="text-center font-medium dimmed text-base mb-7">
		Kumpul bareng orang-orang yang sefrekuensi denganmu
	</p>

	<Marquee speed={50} class="">
		{#each categories as { icon, text }}
			<div class="min-w-36 mr-7 bg-white border border-neutral-200 px-5 py-4 rounded-md">
				<svelte:component this={icon} class="w-7 h-7 mx-auto mb-3 stroke-[1.675] text-blue-600" />
				<p class="text-center">{text}</p>
			</div>
		{/each}
	</Marquee>
</div>
