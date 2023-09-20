<script lang="ts">
	import { auth, userData } from '$lib/firebase';
	import { userStore } from 'sveltefire';

	const user = userStore(auth);

	$: href = `/${$userData?.username}/edit`;
</script>

<main>
	<section class="p-8 min-h-screen">
		<div class="container mx-auto text-center">
			<h1 class="text-4xl font-extrabold mb-4">Welcome to Linktree Clone</h1>
			<p class="text-lg mb-8">Organize your links and share them with ease!</p>
			{#if !$user}
				<a href="/login" class="btn btn-primary rounded-full text-lg">Create your account!</a>
			{:else}
				<a {href} class="btn btn-primary rounded-full text-lg">Take me to my account!</a>
			{/if}
		</div>
	</section>
</main>
