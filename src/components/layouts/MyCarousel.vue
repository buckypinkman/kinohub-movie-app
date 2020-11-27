<template>
  <carousel
    :perPage="6"
    :paginationEnabled="false"
    :spacePadding="5"
    :navigationEnabled="true"
    :navigationNextLabel="$store.getters.chevRight"
    :navigationPrevLabel="$store.getters.chevLeft"
  >
    <slot></slot>
  </carousel>
</template>

<style>
.fa-chevron-right {
  color: rgb(35, 123, 255);
}

.fa-chevron-left {
  color: rgb(35, 123, 255);
}

@media only screen and (max-width: 576px) {
  .VueCarousel-navigation-prev {
    transform: translate(-17%, -50%) !important;
  }
  .VueCarousel-navigation-next {
    transform: translate(17%, -50%) !important;
  }
}
</style>