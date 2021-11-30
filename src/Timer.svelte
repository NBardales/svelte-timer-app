<script>
    import ProgressBar from './ProgressBar.svelte';
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