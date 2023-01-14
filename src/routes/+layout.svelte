<script>
    import {each} from "svelte/internal";
    import "../app.css"

    export let data;
    const boards = data.boards;
    console.log(boards)
    let actif = boards[0]
</script>


<div>
    <nav class="pt-5 w-[15%] flex flex-col justify-between">
        <div>
            <img src="assets/logo-dark.svg" alt="" class="pl-5">
            <p class="pl-5 pt-5 pb-3 font-bold text-mediumGray uppercase tracking-widest">all boards</p>
            {#each boards as {name}}
                <div class="flex items-center gap-4 px-4 py-2.5 mb-1 {name ===actif.name? 'bg-purple w-[80%] rounded-r-3xl':''}">
                    <img src="assets/{name ===actif.name?'icon-board-white.svg':'icon-board.svg'}" alt="board image"
                         class="w-[20px] h-[20px] ">
                    <h3 class="{name === actif.name?'text-white':'text-mediumGray'} font-bold">{name}</h3>
                </div>
            {/each}
            <div class="flex items-center gap-4 px-4 py-2.5 mb-0.5 ">
                <img src="assets/icon-board-purple.svg" alt="board image"
                     class="w-[20px] h-[20px] ">
                <h3 class="text-purple font-bold">+ Create New Board</h3>
            </div>
        </div>

        <div>
            <div class="mx-5 bg-lightGrey flex justify-around py-4 rounded-lg">
                <img src="assets/icon-dark-theme.svg" alt="">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
                <img src="assets/icon-light-theme.svg" alt="">
            </div>
        </div>

    </nav>
</div>

<style>
    nav {
        border-right: 1px solid #E4EBFA;
        height: calc(100vh - 20px);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 15px;
        left: 4px;
        width: 15px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #635FC7;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #635FC7;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(17px);
        -ms-transform: translateX(17px);
        transform: translateX(17px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>