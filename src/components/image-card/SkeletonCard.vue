<script setup>
defineProps(["size"]);
</script>

<template>
    <div class="skeleton-card" :style="{ height: size + 'px' }">
      <div class="image-placeholder"></div>
      <div class="info">
        <div class="title-placeholder"></div>
        <div class="location-placeholder"></div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .skeleton-card {
    width: 12rem;
    max-width: 13rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background: #e5e7eb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: pulse 1.5s infinite;
    
    @media (max-width: 550px) {
    width: 100%;
    max-width: 100%;
  }
  }
  
  .image-placeholder {
    width: 100%;
    height: 70%;
    background: #d1d5dc;
  }
  
  .info {
    padding: 0.75rem;
  }
  
  .title-placeholder {
    width: 6rem;
    height: 1rem;
    background: #d1d5dc;
    margin-bottom: 0.5rem;
  }
  
  .location-placeholder {
    width: 4rem;
    height: 0.75rem;
    background: #d1d5dc;
  }
  
  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
  </style>
  