<script>
    import Conference from "./Conference.svelte";
  
    export let data;
    let { conferences } = data;
  </script>
  
  <main>
    <div class="container mx-auto">
    {#each conferences as conference}
      <Conference {conference} />
    {/each}
    </div>
  </main>
  