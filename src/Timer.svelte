<script>
    import { createEventDispatcher } from 'svelte';
    import ProgressBar from './ProgressBar.svelte';

    // Making the countdown timer work
    const totalSeconds = 20;
    let secondsLeft = totalSeconds;
    let isRunning = false;
    const dispatch = createEventDispatcher();

    function startTimer() {
        isRunning = true;
        const timer = setInterval(() => {
            secondsLeft -= 1;
            if (secondsLeft == 0) {
                clearInterval(timer);
                isRunning = false;
                secondsLeft = totalSeconds;
                dispatch('end', 'end timer');
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
</style>

<p>seconds left</p>
<ProgressBar />

<button class="start">Start</button>