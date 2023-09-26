<script>
	// @ts-nocheck

	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { userData } from '$lib/firebase';
</script>

<AuthCheck>
	<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center">Analytics</h1>
	{#if $userData}
		<div class="text-center my-4">
			<a class="btn btn-secondary btn-xs" href={`/${$userData.username}/edit`}>Back to my page</a>
		</div>
	{/if}
	<div class="overflow-x-auto">
		<table class="table w-full table-compact">
			<thead>
				<tr>
					<th>Name</th>
					<th>URL</th>
					<th>Clicks</th>
				</tr>
			</thead>
			<tbody>
				{#if $userData}
					{#each $userData.links as link}
						<tr>
							<td>{link.title}</td>
							<td>{link.url}</td>
							<td>{link.clicks}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</AuthCheck>
