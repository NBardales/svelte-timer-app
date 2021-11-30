<script>
    import HowTo from './HowTo.svelte';
    import Timer from './Timer.svelte';

    // Bind a variable to an html element
    let audio;

    // Trigger an action when the event occurs
    function timerEnds(e) {
        console.log(e);
        // audio.play();
    }
</script>

<div class="container">
    <h1>Hand Washing Timer</h1>

    <Timer on:end={timerEnds} />
    <HowTo />
</div>

<!-- <audio bind:this={audio} src="sound.wav"></audio> -->