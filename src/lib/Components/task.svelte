<script>
    export let task
</script>

<div class="flex flex-col p-5 flex-grow gap-1 bg-white dark:bg-darkGrey">
    <h2 class="text-[#000] dark:text-white">{task.title}</h2>
    <h3 class="text-mediumGray">0 of {task.subtasks.length} subtasks</h3>
</div>

<style>
    div {
        box-shadow: 0 4px 6px rgba(54, 78, 126, 0.101545);
        border-radius: 8px;
    }
</style>