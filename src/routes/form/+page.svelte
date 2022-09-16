<script lang="ts">
  import { Page } from "~/layouts/page";
  import { focus } from "~/utils/focus";
  import { generateCode } from "~/utils/string";

  const codeLength = 6;

  let code = generateCode(codeLength);
  let form = { code: "" };
  let errors = { code: "" };
  let isSubmit = false;

  const refresh = () => {
    code = generateCode(codeLength);
    form = { code: "" };
    errors = { code: "" };
    isSubmit = false;
  };

  const submit = () => {
    if (form.code === "") {
      errors.code = "Please enter the code.";
    } else if (form.code !== code) {
      errors.code = "Incorrect code.";
    } else {
      errors.code = "";
    }
    isSubmit = true;
  };
</script>

<Page title="Form" />
<h1>Form</h1>
<div class="my-4 display-5 text-center">
  <span class="font-monospace text-light">{code}</span>
</div>
<fieldset class="row">
  <div class="col-md-6 offset-md-3">
    <div class="mb-4">
      <label for="code" class="form-label">Code</label>
      <input
        type="text"
        id="code"
        class="form-control"
        class:is-valid={!errors.code && isSubmit}
        class:is-invalid={errors.code}
        placeholder="Please enter the above code"
        bind:value={form.code}
        use:focus
        on:keypress={({ key }) => key === "Enter" && submit()}
      />
      <div class="valid-feedback">Looks Good!</div>
      <div class="invalid-feedback">{errors.code}</div>
    </div>
    <button type="button" class="btn btn-primary" on:click={submit}
      >Submit</button
    >
    <span class="px-2">or</span>
    <button type="button" class="btn btn-outline-primary" on:click={refresh}
      >Refresh the code</button
    >
  </div>
</fieldset>
