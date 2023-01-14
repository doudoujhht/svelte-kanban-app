<script>
    import Task from "./task.svelte"

    export let column;
    console.log("colum:")
    console.log(column)

</script>
<div class=" flex-1">
    <div class="flex items-center py-4 gap-3">
        <div class="w-[20px] h-[20px] rounded-full bg-red"></div>
        <h4 class="uppercase">todo</h4>
    </div>
    <div class="flex flex-col gap-4">
        {#each column.tasks as task}
            <Task {task}/>
        {/each}
    </div>

</div>

