<script>
    import Column from "./column.svelte"
    import {actif, isLightMode} from "$lib/store.js";
</script>
<div class="flex px-6 gap-10 justify-between flex-nowrap pb-14">
    {#each $actif.columns as column}
        <Column {column}/>
    {/each}
    <div class="add flex-1 min-h-[70vh] flex justify-center items-center mt-[3.1rem] cursor-pointer">
        <h2 class="text-purple">+ New Column</h2>
    </div>
</div>
{#if $isLightMode}
    <style>
        .add {
            background: linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%);
            border-radius: 6px;
        }
    </style>
{:else}
    <style>
        .add {
            background: linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%);
            border-radius: 6px;
        }
    </style>
{/if}


