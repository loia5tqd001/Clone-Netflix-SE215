<template>
  <div class="abc">
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
    <div class="content">
      <div class="content-container">content here...</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.abc {
  width: 100%;
}
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 4px;
  padding: 0 55px;

  &:hover .item {
    transform: translateX(-25%);
  }
}

.item {
  background: green;
  text-align: center;
  transition: transform 300ms ease 100ms;

  &:hover {
    transform: scale(1.5) !important;
  }

  &:hover ~ .item {
    transform: translateX(25%);
  }
}

.content {
  margin-top: 40px;
  height: 300px;
  position: relative;

  background: linear-gradient(to right,black 0%,black 30%,transparent 60%,transparent 100%), green;
}

.content-container {
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
}
</style>
