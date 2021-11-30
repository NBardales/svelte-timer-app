<script>
    import HowTo from './HowTo.svelte';
    import Timer from './Timer.svelte';
    
    // Attribution
    const website = 'https://nicolebardales.com';
    const myName = 'Nicole Bardales';
</script>

<style>
    footer {
        text-align: center;
        padding: 0.5rem;
    }
</style>

<div class="container">
    <h1>Hand Washing Timer</h1>

    <Timer />
    <HowTo />
</div>

<footer>Coded by <a href="{website}">{myName}</a>.</footer>