<script lang="ts">
    import type { Day } from '$lib/types';
    export let days: Day[];
  </script>
  
  <main>
    <div class="container mx-auto">
        {#each days as day}
            <div>{day.title} - {day.description}</div>
        {/each}
    </div>
  </main>
  