<template>
  <div class="container">
    <div class="title-row">
      <h1>ML model sandbox</h1>
    </div>
    <div class="main-content">
      <div class="empty-container">
        <!-- Empty container with same styling -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sandbox'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Arial', sans-serif;
  padding: 1rem 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  text-align: center;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.main-content {
  display: flex;
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
  max-height: calc(100vh - 200px);
  padding: 0;
  justify-content: center;
}

.empty-container {
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  min-height: 400px;
}

@media (max-width: 768px) {
  .container {
    padding: 0.5rem;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .main-content {
    flex-direction: column;
    gap: 1rem;
    max-height: none;
  }
  
  .empty-container {
    min-height: 300px;
  }
}
</style>
