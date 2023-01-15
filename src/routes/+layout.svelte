<script>
    import "../app.css"
    import {actif, isLightMode} from "$lib/store.js";
    import {boards} from "$lib/store.js";

    let container
    let navBar;
    let logo;
    let line;
    let show
    let hidden = false
    let isDarkMode
    const hideNavBar = () => {
        navBar.style.position = "static"
        navBar.style.width = "0px"
        line.style.display = "none"
        show.style.width = "56px"
        hidden = true
    }

    const showNavBar = () => {
        navBar.style.position = "sticky"
        navBar.style.width = "calc(21% - 2px)"
        line.style.display = "block"
        show.style.width = "0"
        hidden = false
    }
    const changeActiveBoard = (board) => {
        $actif = board
    }
    $:if (container) {
        if (isDarkMode) {
            $isLightMode = false
            container.classList.add("dark")
        } else {
            $isLightMode = true;
            container.classList.remove("dark")
        }
    }

</script>


<div class="flex flex-col" bind:this={container}>

    <div class="flex justify-between items-center sticky top-0 bg-white h-[10vh] dark:bg-darkGrey dark:text-white">
        <div class="w-[21%] flex h-full items-center {hidden? 'border-0 border-b-2 border-r-2 border-solid border-b-lightLines dark:border-b-darkLines dark:border-r-darkLines':''} "
             id="logo"
             bind:this={logo}>
            <svg width="153" height="26" class="pl-5" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <path d="M44.56 25v-5.344l1.92-2.112L50.928 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8Zm19.36.384c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM81.968 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Zm24.16.384c1.707 0 3.232-.405 4.576-1.216a8.828 8.828 0 0 0 3.184-3.296c.779-1.387 1.168-2.923 1.168-4.608 0-1.707-.395-3.248-1.184-4.624a8.988 8.988 0 0 0-3.2-3.28c-1.344-.81-2.848-1.216-4.512-1.216-2.112 0-3.787.619-5.024 1.856V.776h-4.8V25h4.48v-1.664c.619.661 1.392 1.168 2.32 1.52a8.366 8.366 0 0 0 2.992.528Zm-.576-4.32c-1.301 0-2.363-.443-3.184-1.328-.821-.885-1.232-2.043-1.232-3.472 0-1.408.41-2.56 1.232-3.456.821-.896 1.883-1.344 3.184-1.344 1.323 0 2.41.453 3.264 1.36.853.907 1.28 2.053 1.28 3.44 0 1.408-.427 2.56-1.28 3.456-.853.896-1.941 1.344-3.264 1.344Zm17.728 4.32c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM141.328 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Z"
                          fill="currentColor" fill-rule="nonzero"/>
                    <g transform="translate(0 1)" fill="#635FC7">
                        <rect width="6" height="25" rx="2"/>
                        <rect opacity=".75" x="9" width="6" height="25" rx="2"/>
                        <rect opacity=".5" x="18" width="6" height="25" rx="2"/>
                    </g>
                </g>
            </svg>
            <div class="lines border-0 border-r-2 border-solid border-r-lightLines dark:border-r-darkLines z-20"
                 bind:this={line}></div>
        </div>
        <div class="flex justify-between px-4 w-max items-center sticky taskbar h-full border-0 border-b-2 border-solid border-b-lightLines dark:border-b-darkLines flex-grow">
            <h2 class="text-2xl dark:text-white">{$actif.name}</h2>
            <div class="flex items-center gap-3 ">
                <button class="primary border-0">+ Add New Task</button>
                <img src="assets/icon-vertical-ellipsis.svg" alt="">
            </div>
        </div>

    </div>
    <div class="flex">
        <nav class="flex flex-col justify-between h-[90vh] sticky top-[10vh] left-0 dark:bg-darkGrey"
             bind:this={navBar}>
            <div class="pt-5">
                <p class="pl-5 pb-3 font-bold text-mediumGray uppercase tracking-widest">all boards</p>
                {#each $boards as board}
                    <div class="flex items-center gap-3 px-4 py-2.5 mb-1 cursor-pointer w-[80%] rounded-r-3xl {board.name ===$actif.name? 'text-white bg-purple  ':'text-mediumGray hover:text-purple hover:bg-purple hover:bg-opacity-10 dark:hover:bg-white'}"
                         on:click={()=>changeActiveBoard(board)}>
                        <svg width="16" height="16" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                                  fill="currentColor"/>
                        </svg>
                        <h6 class="font-bold text-[0.9rem]">{board.name}</h6>
                    </div>
                {/each}
                <div class="flex items-center gap-3 px-4 py-2.5 mb-0.5 cursor-pointer text-purple">
                    <svg width="16" height="16" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                              fill="currentColor"/>
                    </svg>
                    <h3 class="text-purple font-bold">+ Create New Board</h3>
                </div>
            </div>

            <div class="pb-6 ">
                <div class="mx-4 bg-lightGrey flex justify-around py-4 mb-4 rounded-lg dark:bg-veryDarkGrey">
                    <img src="assets/icon-light-theme.svg" alt="">
                    <label class="switch">
                        <input type="checkbox" bind:checked={isDarkMode}>
                        <span class="slider round"></span>
                    </label>
                    <img src="assets/icon-dark-theme.svg" alt="">
                </div>
                <div class="flex items-center gap-3 px-4 py-3 mb-1 cursor-pointer w-[80%] rounded-r-3xl text-mediumGray hover:text-purple hover:bg-purple hover:bg-opacity-10 dark:hover:bg-white"
                     on:click={hideNavBar}>
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
                              fill="currentColor"/>
                    </svg>
                    <h6 class="font-bold text-[0.9rem]">Hide Sidebar</h6>
                </div>
            </div>

        </nav>
        <slot/>
    </div>
    <!--    it's just because if nothing use hidden nav from the start it will not be shipped beacause of purgeCss-->
    <div class="hiddenNav hidden"></div>

</div>
<div class="w-[0px] h-[48px] bg-purple flex items-center justify-center fixed bottom-5" bind:this={show}
     id="showSidebar" on:click={showNavBar}>
    <img src="assets/icon-show-sidebar.svg" alt="">
</div>
<style>
    .taskbar {
        /*border-bottom: 2px solid #E4EBFA;*/
    }

    #logo {
        position: relative;

    }

    .lines {
        position: absolute;
        /*border-right: 2px solid #E4EBFA;*/
        height: 100vh;
        top: 0;
        right: 0;

    }

    nav {
        transition: width 250ms linear;
        width: calc(21% - 2px);
    }


    .hiddenNav {
        border-bottom: 2px solid;
        border-right: 2px solid;
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