<script>
    import {each} from "svelte/internal";
    import "../app.css"
    import {actif} from "$lib/store.js";
    import {boards} from "$lib/store.js";

    let navBar;
    let logo;
    let line;
    let show
    const hideNavBar = () => {
        navBar.style.position = "static"
        navBar.style.width = "0px"
        line.style.display = "none"
        logo.style.borderBottom = "2px solid #E4EBFA"
        logo.style.borderRight = "2px solid #E4EBFA"
        show.style.width = "56px"
    }

    const showNavBar = () => {
        navBar.style.position = "sticky"
        navBar.style.width = "21%"
        line.style.display = "block"
        logo.style.borderBottom = "0 solid"
        logo.style.borderRight = "0 solid"
        show.style.width = "0"
    }
</script>


<div class="flex flex-col">

    <div class="flex justify-between items-center sticky top-0 bg-white h-[10vh] dark:bg-darkGrey dark:text-white">
        <div class="w-[21%] flex h-full items-center" id="logo" bind:this={logo}>
            <img src="assets/logo-dark.svg" alt="" class="pl-5 ">
            <div class="lines" bind:this={line}></div>
        </div>
        <div class="flex justify-between px-4 w-max items-center sticky taskbar h-full flex-grow">
            <h2 class="text-2xl dark:text-white">{$actif.name}</h2>
            <div class="flex items-center gap-3 ">
                <button class="primary border-0">+ Add New Task</button>
                <img src="assets/icon-vertical-ellipsis.svg" alt="">
            </div>
        </div>

    </div>
    <div class="flex">
        <nav class=" w-[21%] flex flex-col justify-between h-[90vh] sticky top-[10vh] left-0 dark:bg-darkGrey"
             bind:this={navBar}>
            <div class="pt-5">
                <p class="pl-5 pb-3 font-bold text-mediumGray uppercase tracking-widest">all boards</p>
                {#each $boards as {name}}
                    <div class="flex items-center gap-4 px-4 py-2.5 mb-1 cursor-pointer {name ===$actif.name? 'bg-purple w-[80%] rounded-r-3xl':''}">
                        <img src="assets/{name ===$actif.name?'icon-board-white.svg':'icon-board.svg'}"
                             alt="board image"
                             class="w-[20px] h-[20px] ">
                        <h3 class="{name === $actif.name?'text-white':'text-mediumGray'} font-bold">{name}</h3>
                    </div>
                {/each}
                <div class="flex items-center gap-4 px-4 py-2.5 mb-0.5 cursor-pointer">
                    <img src="assets/icon-board-purple.svg" alt="board image"
                         class="w-[20px] h-[20px] ">
                    <h3 class="text-purple font-bold">+ Create New Board</h3>
                </div>
            </div>

            <div class="mx-5 pb-6 ">
                <div class=" bg-lightGrey flex justify-around py-4 rounded-lg">
                    <img src="assets/icon-dark-theme.svg" alt="">
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                    <img src="assets/icon-light-theme.svg" alt="">
                </div>
                <div class="flex gap-4 cursor-pointer mt-4" on:click={hideNavBar}>
                    <img src="assets/icon-hide-sidebar.svg" alt="">
                    <h3 class="text-mediumGray">Hide Sidebar</h3>
                </div>
            </div>

        </nav>
        <slot/>
    </div>


</div>
<div class="w-[0px] h-[48px] bg-purple flex items-center justify-center fixed bottom-5" bind:this={show}
     id="showSidebar" on:click={showNavBar}>
    <img src="assets/icon-show-sidebar.svg" alt="">
</div>
<style>
    .taskbar {
        border-bottom: 2px solid #E4EBFA;
    }

    #logo {
        position: relative;

    }

    .lines {
        position: absolute;
        border-right: 2px solid #E4EBFA;
        height: 100vh;
        top: 0;
        right: 0;

    }

    nav {
        transition: all 250ms linear;
    }

    #showSidebar {
        border-radius: 0 100px 100px 0;
        transition: 250ms all linear;
        cursor: pointer;
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