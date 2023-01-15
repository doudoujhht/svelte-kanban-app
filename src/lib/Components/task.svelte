<script>

    export let task
    let isModal = false;
</script>

<div class="flex flex-col p-5 flex-grow gap-1 bg-white dark:bg-darkGrey cursor-pointer" on:click={()=>isModal = true}>
    <h3 class="text-[#000] dark:text-white">{task.title}</h3>
    <h3 class="text-mediumGray">0 of {task.subtasks.length} subtasks</h3>
</div>


<div class="{isModal?'flex':'hidden'}  items-center justify-center w-screen h-screen absolute top-0 left-0"
     on:click|self={()=>isModal = false}>
    <div class="bg-white w-[480px]">
        <h2>{task.title}</h2>
        <h5>{task.description}</h5>
        <h5>Subtasks ({task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length})</h5>
        {#each task.subtasks as {title, isCompleted}}
            <div>
                <input type="checkbox"/>
                <h3>{title}</h3>
            </div>

        {/each}
    </div>
</div>

<style>
    div {
        box-shadow: 0 4px 6px rgba(54, 78, 126, 0.101545);
        border-radius: 8px;
    }
</style>