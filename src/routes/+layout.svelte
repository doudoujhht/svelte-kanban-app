<script>
    import "../app.css"
</script>
<nav class="flex w-screen px-4 py-4">
    <div class="flex w-2/3 gap-3 items-end">
        <img src="assets/logo-mobile.svg" alt="logo mobile">
        <h2>Platform Launch</h2>
        <div class="flex items-center h-full">
            <img src="assets/icon-chevron-down.svg" alt="arrow down" class="w-[12px] h-[6px]"/>
        </div>
    </div>
    <div class="flex justify-end w-1/3 gap-4">
        <button class="primary little px-4 py-4"><img src="assets/icon-add-task-mobile.svg" alt=""></button>
        <img src="assets/icon-vertical-ellipsis.svg" alt="">
    </div>
</nav>
<slot/>