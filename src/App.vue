<template>
  <div class="container">
    <h1>🪴Sappy ML model 🤖</h1>
    <div class="input-section">
      <input 
        v-model="inputText" 
        type="text" 
        placeholder="Smart meter ID..."
        class="text-input"
      />
      <button @click="runModel" class="run-button">Run</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const inputText = ref('')

    const runModel = () => {
      console.log('Running model with input:', inputText.value)
      // Add your model logic here
    }

    return {
      inputText,
      runModel
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  gap: 2rem;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin: 0;
  text-align: center;
}

.input-section {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.text-input {
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  min-width: 300px;
  transition: border-color 0.3s ease;
}

.text-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.run-button {
  padding: 12px 24px;
  font-size: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 600;
}

.run-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.run-button:active {
  transform: translateY(0);
}
</style>