<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import '../assets/styles/app.css';

  const { children } = $props();
</script>

<ModeWatcher />
{@render children()}
