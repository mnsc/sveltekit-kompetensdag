<script>
    import Conference from "./Conference.svelte";
    import Days from "./Days.svelte";
  
    export let data;
    let { conferences } = data;
  </script>
  
  <main>
    <div class="container mx-auto">
    {#each conferences as conference}
      <Conference {conference} />
      <Days days={conference.days} />
    {/each}
    </div>
  </main>
  