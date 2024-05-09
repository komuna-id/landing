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
			<a href="/" class="">Blog</a>
			<a href="/" class="">Forum</a>
			<a href="/" class="">Komuna UI</a>
			<a href="/" class="">Tentang Kami</a>
		</div>
		<div class="ml-auto flex items-center gap-2">
			<Button size="sm">Login</Button>
			<Button size="sm" variant="primary">Daftar</Button>
		</div>
	</div>
</div>

<div class="h-screen px-6 text-center flex flex-col items-center justify-center">
	<h1 class="font-display font-semibold tracking-wide text-3xl">Komuna</h1>
	<p class="dimmed mt-2.5">Something great is about to come soon.</p>
</div>
