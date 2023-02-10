<script lang="ts">
    import type { Day } from '$lib/types';
    export let days: Day[];
  </script>
  
  <main>
    <div class="container mx-auto">
        <ul>
        {#each days as day}
            <li>{day.title} - {day.description}</li>
        {/each}
        </ul>
    </div>
  </main>
  