<script lang="ts">
    import type { Conference } from '$lib/types';
    export let conference: Conference;
  </script>
  
  <main>
    <div class="container mx-auto">
        <h2>{conference.title}</h2>
        <div>{conference.description}</div>
        <div>{conference.talkCount}</div>
    </div>
  </main>
  