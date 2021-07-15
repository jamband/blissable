<script lang="ts">
  import { page } from "$app/stores";

  export let title: string;

  const items = () => {
    const text = title.substring(0, title.indexOf("･")).trim();
    const links = [{ path: "/", text: "Home" }];

    if (text === "") {
      return links;
    }
    links.push({ path: $page.path, text });
    return links;
  };

  const isCurrent = (path: string) => {
    return $page.path === path;
  };
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    {#each items() as item (item.path)}
      <li
        class="breadcrumb-item"
        class:active={isCurrent(item.path)}
        aria-current={isCurrent(item.path) ? "page" : undefined}
      >
        {#if isCurrent(item.path)}
          {item.text}
        {:else}
          <a href={item.path}>{item.text}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
