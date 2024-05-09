<script>
	import { Button } from '$lib';
</script>

<svelte:head>
	<title>Komuna</title>
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
		Bangun Komunitas Digital di Sini
	</h1>
	<p class="max-w-xl leading-7 dimmed mt-1.5">
		Kembangkan jaringan, cari wawasan baru, dan jadilah bagian dari revolusi digital untuk
		Indonesia.
	</p>

	<div
		class="w-56 sm:w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 mt-5"
	>
		<Button variant="primary">Daftar sekarang</Button>
		<Button>Kunjungi forum</Button>
	</div>
</div>
