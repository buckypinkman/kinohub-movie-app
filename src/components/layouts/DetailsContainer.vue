<template>
  <div class="details-container">
    <slot></slot>
  </div>
</template>

<style scoped>
body {
  color: white;
}

.detail-poster {
  width: 11rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}

.backdrop {
  width: 100%;
  height: auto;
}

.content {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.content-body {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.year {
  color: #ececec;
  font-weight: 400;
  font-size: 2rem;
}

h1 {
  font-weight: bolder;
}

h4,
h5 {
  color: #ececec;
}

h6 {
  font-size: 1.1rem;
}

.summary {
  margin-top: 6.5rem;
}

@media only screen and (max-width: 768px) {
  .content-body {
    margin-top: 2rem;
    text-align: center;
    position: unset;
    transform: translateY(-25%);
    margin: auto;
  }

  .summary {
    margin-top: 0;
  }

  .content-data {
    margin-top: 2rem;
  }

  .backdrop {
    opacity: 0.6;
  }

  .overlay {
    position: unset;
    background: transparent;
  }

  .data {
    text-align: center;
  }
}
</style>