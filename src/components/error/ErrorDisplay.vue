<script setup>
import { AlertCircle, RefreshCw } from "lucide-vue-next";

defineProps({ message: String, onRetry: Function });
</script>

<template>
  <div class="error-display">
    <AlertCircle size="48" class="icon" />
    <p class="title">Oops! Something went wrong.</p>
    <p class="message">{{ message }}</p>
    <button @click="onRetry" class="retry-btn">
      <RefreshCw size="18" /> Try Again
    </button>
  </div>
</template>

<style lang="scss" scoped>
.error-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  color: #ef4444;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #b91c1c;
}

.message {
  color: #4a5565;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.retry-btn {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fb2c36;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  border: 0;

  &:hover {
    background: #dc2626;
  }
}
</style>