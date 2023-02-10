<script lang="ts">
    import Days from "./Days.svelte";
    import type { Conference } from '$lib/types';
    export let conference: Conference;
  </script>
  
  <main>
    <div class="container mx-auto">
        <h2>{conference.title}</h2>
        <div>{conference.description} - bugg #talks = {conference.talkCount}</div>
        <Days days={conference.days} />
        <hr>
    </div>
  </main>
  