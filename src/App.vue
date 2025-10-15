<template>
  <div class="container">
    <h1>🪴Sappy ML model 🤖</h1>
    <div class="main-content">
      <div class="form-section">
        <div class="input-group">
          <label>Household Size (m²):</label>
          <input 
            v-model="formData.household_size" 
            type="number" 
            placeholder="Enter household size in square meters"
            class="text-input"
          />
        </div>

      <div class="input-group">
        <label>Garden Area (m²):</label>
        <input 
          v-model="formData.household_garden_area" 
          type="number" 
          placeholder="Enter garden area in square meters"
          class="text-input"
        />
      </div>

      <div class="input-group">
        <label>Number of Bathrooms:</label>
        <input 
          v-model="formData.number_bathrooms" 
          type="number" 
          placeholder="Enter number of bathrooms"
          class="text-input"
        />
      </div>

      <div class="input-group">
        <label>Residency Type:</label>
        <select v-model="formData.residency" class="select-input">
          <option value="">Select residency type</option>
          <option value="Flat">Flat</option>
          <option value="Single family">Single family</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="input-group">
        <label>Environmental Attitude Sensitivity:</label>
        <select v-model="formData.env_attitude_sensitivity" class="select-input">
          <option value="">Select sensitivity level</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div class="checkbox-grid">
        <div class="checkbox-group">
          <input 
            v-model="formData.household_pool" 
            type="checkbox" 
            id="pool"
            class="checkbox-input"
          />
          <label for="pool">Has Pool</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.household_garden" 
            type="checkbox" 
            id="garden"
            class="checkbox-input"
          />
          <label for="garden">Has Garden</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.irrigation_system" 
            type="checkbox" 
            id="irrigation"
            class="checkbox-input"
          />
          <label for="irrigation">Irrigation System</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.house_plants" 
            type="checkbox" 
            id="housePlants"
            class="checkbox-input"
          />
          <label for="housePlants">House Plants</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.balcony_plants" 
            type="checkbox" 
            id="balconyPlants"
            class="checkbox-input"
          />
          <label for="balconyPlants">Balcony Plants</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.Bathtub" 
            type="checkbox" 
            id="bathtub"
            class="checkbox-input"
          />
          <label for="bathtub">Bathtub</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.Dishwasher" 
            type="checkbox" 
            id="dishwasher"
            class="checkbox-input"
          />
          <label for="dishwasher">Dishwasher</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.Shower" 
            type="checkbox" 
            id="shower"
            class="checkbox-input"
          />
          <label for="shower">Shower</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.Sink" 
            type="checkbox" 
            id="sink"
            class="checkbox-input"
          />
          <label for="sink">Sink</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.Toilet" 
            type="checkbox" 
            id="toilet"
            class="checkbox-input"
          />
          <label for="toilet">Toilet</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.TubShower" 
            type="checkbox" 
            id="tubShower"
            class="checkbox-input"
          />
          <label for="tubShower">Tub Shower</label>
        </div>

        <div class="checkbox-group">
          <input 
            v-model="formData.WashingMachine" 
            type="checkbox" 
            id="washingMachine"
            class="checkbox-input"
          />
          <label for="washingMachine">Washing Machine</label>
        </div>
      </div>

      <button @click="runModel" class="run-button">Run</button>
    </div>

    <div class="result-section">
      <div class="result-content">
        <h2>Water Usage Prediction</h2>
        <div class="prediction-score">
          <span class="score-value">{{ predictionScore }}</span>
          <span class="score-unit">L/day</span>
        </div>
        <div class="prediction-status">
          <span class="status-label">Status:</span>
          <span class="status-value">{{ predictionStatus }}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const predictionScore = ref(342.5)
    const predictionStatus = ref('Normal Usage')
    
    const formData = ref({
      household_size: '',
      household_garden_area: '',
      household_pool: false,
      household_garden: false,
      number_bathrooms: '',
      irrigation_system: false,
      house_plants: false,
      balcony_plants: false,
      Bathtub: false,
      Dishwasher: false,
      Shower: false,
      Sink: false,
      Toilet: false,
      TubShower: false,
      WashingMachine: false,
      residency: '',
      env_attitude_sensitivity: ''
    })

    const runModel = () => {
      console.log('Running model with data:', formData.value)
      // Add your model logic here
    }

    return {
      formData,
      predictionScore,
      predictionStatus,
      runModel
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.main-content {
  display: flex;
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
  max-height: calc(100vh - 200px);
  padding: 0;
  justify-content: space-between;
}

.form-section {
  flex: 1;
  max-width: 60%;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); */
  overflow-y: auto;
}

.result-section {
  flex: 1;
  max-width: 40%;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-content {
  text-align: center;
  width: 100%;
}

.result-content h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.prediction-score {
  margin-bottom: 1.5rem;
}

.score-value {
  font-size: 3.5rem;
  font-weight: bold;
  color: #667eea;
  display: block;
  line-height: 1;
}

.score-unit {
  font-size: 1.2rem;
  color: #666;
  font-weight: 500;
}

.prediction-status {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.status-label {
  font-weight: 600;
  color: #2c3e50;
  margin-right: 0.5rem;
}

.status-value {
  color: #667eea;
  font-weight: 500;
}

.input-group {
  margin-bottom: 1.2rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
}

.text-input, .select-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 0.95rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.text-input:focus, .select-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-input {
  width: 16px;
  height: 16px;
  accent-color: #667eea;
  flex-shrink: 0;
}

.checkbox-group label {
  margin: 0;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  font-size: 0.9rem;
}

.run-button {
  width: 100%;
  padding: 14px 24px;
  font-size: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 600;
  margin-top: 1rem;
}

.run-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.run-button:active {
  transform: translateY(0);
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
  
  .form-section, .result-section {
    flex: none;
  }
  
  .form-section {
    padding: 1rem;
  }
  
  .checkbox-grid {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
  
  .score-value {
    font-size: 2.5rem;
  }
}
</style>