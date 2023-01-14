<script>
    import "../app.css"

    export let data;
    let boards = data.boards
    let actif = boards[0]
    let classes = " text-xl flex font-bold gap-5 p-4 pl-6 "
</script>
<div class="flex">

    <div class="flex w-screen md:w-[40%] flex items-center md:flex-col justify-center text-black h-screen absolute md:static">
        <div class="w-screen h-screen absolute bg-[#000] opacity-70 md:hidden"></div>
        <img src="assets/logo-dark.svg" class="hidden" alt="">
        <div class="w-[80%] mx-auto bg-white dark:bg-darkGrey opacity-100 z-10 rounded-xl ">
            <h4 class="pl-6 uppercase text-lg py-4">all boards ({boards.length})</h4>
            {#each boards as {name}}
                {#if actif.name === name}
                    <div class="{classes} bg-purple w-[90%] rounded-r-3xl">
                        <img src="assets/icon-board-white.svg" class="w-[24px] h-[24px]" alt="">
                        <h3 class="text-white text-lg">{name}</h3>
                    </div>
                {:else}
                    <div class="{classes}">
                        <img src="assets/icon-board.svg" alt="" class="w-[24px] h-[24px]">
                        <h3 class="text-mediumGray text-lg">{name}</h3>
                    </div>
                {/if}
            {/each}
            <div class="{classes}">
                <img src="assets/icon-board-purple.svg" alt="" class="w-[24px] h-[24px]">
                <h3 class="text-purple text-lg">+ Create New Board</h3>
            </div>
            <div class="flex w-[80%] mx-auto justify-evenly bg-lightGrey rounded-lg my-4 py-4 bg-veryDarkGrey">
                <img src="assets/icon-light-theme.svg" alt="">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
                <img src="assets/icon-dark-theme.svg" alt="">
            </div>
        </div>
    </div>

    <div class="md:[60%]">
        <nav class="flex w-screen  px-4 py-4 h-[7.5vh] dark:bg-darkGrey">
            <div class="flex w-2/3 gap-3 items-end ">
                <img src="assets/logo-mobile.svg" alt="logo mobile">
                <h2 class="dark:text-white">Platform Launch</h2>
                <div class="flex items-center h-full">
                    <img src="assets/icon-chevron-down.svg" alt="arrow down" class="w-[12px] h-[6px]"/>
                </div>
            </div>
            <div class="flex justify-end w-1/3 gap-4 ">
                <button class="primary little px-4 py-4"><img src="assets/icon-add-task-mobile.svg" alt=""></button>
                <img src="assets/icon-vertical-ellipsis.svg" alt="">
            </div>
        </nav>
        <slot/>
    </div>
</div>


<style>
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
        justify-content: start;
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