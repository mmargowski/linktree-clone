<script lang="ts">
	import UserLink from '$lib/components/UserLink.svelte';
	import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

	import { userStore } from 'sveltefire';
	import type { PageData } from './$types';
	import { auth, db } from '$lib/firebase';
	const user = userStore(auth);
	export let data: PageData;

	const onUserLinkClicked = async (event: { detail: { url: any } }) => {
		// get the link from the event
		const linkURL = event.detail.url;
		const userId = user.uid;

		try {
			const usersRef = collection(db, 'users');
			const q = query(usersRef, where('username', '==', data.username));
			const userSnapshot = await getDocs(q);

			if (userSnapshot.empty) {
				console.log('no user found');
				return;
			}

			const userDoc = userSnapshot.docs[0];
			const userData = userDoc.data();

			const linkIndex = userData.links.findIndex((link: { url: any }) => link.url === linkURL);

			if (linkIndex !== -1) {
				userData.links[linkIndex].clicks++;

				const userDocRef = doc(db, 'users', userDoc.id);
				await updateDoc(userDocRef, { links: userData.links });
			} else {
				console.log('Link not found in user data');
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

<svelte:head>
	<title>@{data.username} Links</title>
	<meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">
	<h1 class="text-7xl text-purple-500">
		@{data.username}
	</h1>

	<img src={data.photoURL ?? '/user.png'} alt="photoURL" width="256" class="mx-auto" />

	<p class="text-xl my-8">{data.bio ?? 'no bio yet...'}</p>
	<ul class="list-none">
		{#each data.links as item}
			<li>
				<UserLink {...item} on:linkClicked={onUserLinkClicked} />
			</li>
		{/each}
	</ul>
</main>
