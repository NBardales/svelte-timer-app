<script>
    import ProgressBar from './ProgressBar.svelte';

    // Making the countdown timer work
    const totalSeconds = 20;
    let secondsLeft = totalSeconds;
    let isRunning = false;

    function startTimer() {
        isRunning = true;
        const timer = setInterval(() => {
            secondsLeft -= 1;
            if (secondsLeft == 0) {
                clearInterval(timer);
                isRunning = false;
                secondsLeft = 20;
            }
        }, 1000);
    }

    // Creating the Reactive variable for the increasing progress bar
    $: progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;
    

</script>

<style>
    p {
        font-size: 1.2rem;
        text-align: center;
    }

    button {
        background-color: mediumTurquoise;
        width: 100%;
        border: none;
        color: #fff;
        padding: 15px 32px;
        text-align: center;
        font-size: 1.375rem;
        text-decoration: none;
        display: inline-block;
        outline: none;
        cursor: pointer;
    }
    button[disabled] {
        background-color: #cecece;
        color: #888;
        cursor: not-allowed;
    }
</style>

<p>{secondsLeft} seconds left</p>
<ProgressBar {progress}/>

<button disabled="{isRunning}" on:click={startTimer} class="start">Start</button>