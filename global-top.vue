<script setup>
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentSlideRoute } = useNav()
const base = import.meta.env.BASE_URL
const hideQR = computed(
  () => currentSlideRoute.value?.meta?.slide?.frontmatter?.hideQR === true,
)
</script>

<template>
  <div v-if="!hideQR" class="qr-fixed">
    <div class="qr-box">
      <img :src="`${base}images/qr.webp`" alt="QR" />
    </div>
    <div class="qr-label">スライドQR</div>
  </div>
</template>

<style scoped>
.qr-fixed {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 100;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.qr-box {
  width: 72px;
  height: 72px;
  background: #fff;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}
.qr-box img {
  width: 100%;
  height: 100%;
  display: block;
}
.qr-label {
  margin-top: 4px;
  font-size: 10px;
  line-height: 1;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.05em;
}
</style>
