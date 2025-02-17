<script setup>
defineProps(["image", "altDescription", "name", "location", "size"]);
</script>

<template>
  <div class="image-card" :style="{ height: size + 'px' }" @click="$emit('click')">
    <div class="image-wrapper">
      <img :src="image" :alt="altDescription || 'African photo'" />
      <div class="overlay"></div>
    </div>
    <div class="info">
      <p class="name">{{ name }}</p>
      <p class="location">{{ location }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-card {
  position: relative;
  width: 12rem;
  max-width: 13rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 550px) {
    width: 100%;
    max-width: 100%;
  }
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%; // Let the parent div control height dynamically
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.75rem;
  color: white;
}

.name {
  font-size: 14px;
  font-weight: 600;
}

.location {
  font-size: 12px;
}
</style>
