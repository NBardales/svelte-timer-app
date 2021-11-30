<script>
    export let progress = 0;
</script>

<style>
    /* PROGRESS BAR STYLING SOURCE: (https://codepen.io/erikyo/pen/zdoOyj) */
    
    progress {
        position: relative;
		height: 1rem;
		display: block;
		width: 100%;
		color: mediumturquoise;
		background-color: #cecece;
		background-clip: padding-box;
		overflow: hidden;
        margin-bottom: 0.5rem;
    }
    
    progress[value] {
        background-color: mediumturquoise;
    }

    progress[value]::-webkit-progress-bar  {
			background-color: #cecece;
		}

    progress[value]::-webkit-progress-value {
        background-color: mediumturquoise;
        /*transition: width 0.5s cubic-bezier(0, 0, 1, -0.12);*/
    }

    
</style>

<progress max="100" value="{progress}">{progress}%</progress>