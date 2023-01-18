<script lang="ts">
    import Modal from "./modal.svelte"
    import {actif} from "../../lib/store.js";

    export let task: {
        "title": string,
        "description": string,
        "status": string,
        "subtasks": [
            {
                "title": string,
                "isCompleted": boolean
            },
            {
                "title": string,
                "isCompleted": boolean
            },
            {
                "title": string,
                "isCompleted": boolean
            }
        ]
    }
</script>

<Modal on:click>
    <div class="p-6 flex flex-col gap-4">
        <h2>Edit task</h2>
        <div class="w-full flex flex-col gap-1">
            <h5>Title</h5>
            <input type="text" name="" id="title" class="w-[92%] py-1.5 px-4" value="{task.title}">
        </div>

        <div class="flex flex-col gap-1">
            <h5>Description</h5>
            <textarea name="" id="description" cols="50" rows="8"
                      placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.">{task.description}</textarea>
        </div>

        <div class="flex flex-col gap-1">
            <h5>Subtasks</h5>
            <button class="secondary">+ Add new Subtask</button>
        </div>
        <div class="flex flex-col gap-1">
            <h5>Status</h5>
            <select name="status" id="status" class="px-4 py-2">
                {#each $actif.columns as column}
                    <option value="{column.name}">{column.name}</option>
                {/each}

            </select>
            <button class="primary mt-5">Save changes</button>
        </div>
    </div>
</Modal>

<style>
    h5 {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: #828FA3;

    }

    input {
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
        color: #000112;
    }

    textarea {
        outline: none;
        resize: none;
        padding-inline: 1rem;
        padding-top: 0.25rem;
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
        color: rgba(0, 1, 18, 0.5);
    }

    input, textarea {
        background: #FFFFFF;
        border: 1px solid rgba(130, 143, 163, 0.25);
        border-radius: 4px;
    }

    input:focus, input:active, input:focus-visible {
        outline: none;
        border: 1px solid #635FC7;
    }

    select {
        width: 100%;
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
        color: #000112;
        /*border is to push the arrow since the padding doesn't apply to it '*/
        border: 0 solid black;
        border-right: 1rem solid transparent;
        /*outline is to replace the border */
        outline: 1px solid rgba(130, 143, 163, 0.25);
        border-radius: 4px;
    }
</style>