<script lang="ts">
  import { Dropdown } from "../components/dropdown";
  import { DropdownItem } from "../components/dropdown-item";
  import { Page } from "../layouts/page";
  import { generateContents } from "../utils/string";

  const characters = ["A", "B", "C"];

  let contents = generateContents(characters);
  let isMatched = false;
  let searchValue = "";

  $: search = (character: string) => {
    isMatched = true;
    searchValue = character;
  };

  const reset = () => {
    isMatched = false;
    contents = generateContents(characters);
  };

  $: isMatchedCharacter = (content: string) => {
    return isMatched && content === searchValue;
  };
</script>

<Page title="Dropdown" />
<h1 class="mb-5">Dropdown</h1>
<div class="mb-5 text-center">
  <Dropdown id="dropdownMenu" label="Search">
    {#each characters as character}
      <DropdownItem on:click={() => search(character)} button
        >{character}</DropdownItem
      >
    {/each}
  </Dropdown>
  <button
    type="button"
    class="btn btn-link text-decoration-none text-body"
    on:click={reset}>Reset</button
  >
</div>
<div class="text-center">
  {#each contents as content}
    {#if isMatchedCharacter(content)}
      <span class="p-2 fw-bold font-monospace text-dark mark">{content}</span>
    {:else}
      <span class="p-2 fw-bold font-monospace">{content}</span>
    {/if}
  {/each}
</div>
