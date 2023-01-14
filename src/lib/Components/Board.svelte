<script>
    import Column from "./column.svelte"
    import {actif} from "$lib/store.js";
</script>
<div class="flex px-6 gap-10 justify-between flex-nowrap">
    {#each $actif.columns as column}
        <Column {column}/>
    {/each}
</div>

