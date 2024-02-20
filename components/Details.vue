<script>

</script>

<template>
    <div class="sample-details">
        <h2>Details Component</h2>
        <div class="sample-grid">
            <p>Super Details</p>
            <slot />
        </div>
    </div>
</template>

<style>
.sample-details{
    background-color: #82cee6;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sample-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
}

.sample-grid p {
  margin: 0; /* pタグのデフォルトマージンをリセット */
}
</style>