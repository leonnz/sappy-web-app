<template>
  <div class="container">
    <h1>🪴Sappy ML model 🤖</h1>
    <div class="main-content">
      <div class="form-section">
        <div class="input-group">
          <label>Smart Meter ID:</label>
          <input 
            v-model="formData.smartMeterId" 
            type="text" 
            class="text-input"
          />
        </div>

        <div class="input-group">
          <label>Household Size (m²):</label>
          <input 
            v-model="formData.household_size" 
            type="number" 
            class="text-input"
          />
        </div>

      <div class="input-group">
        <label>Garden Area (m²):</label>
        <input 
          v-model="formData.household_garden_area" 
          type="number" 
          class="text-input"
        />
      </div>

      <div class="input-group">
        <label>Number of Bathrooms:</label>
        <input 
          v-model="formData.number_bathrooms" 
          type="number" 
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

      <button @click="runModel" :disabled="isLoading" class="run-button">
        {{ isLoading ? 'Thinking...' : 'Run' }}
      </button>
    </div>

    <div class="result-section">
      <div class="result-content">
        <span class="water-emoji">💧💧💧</span>
        <!-- <h2>Water Usage Prediction</h2> -->
        <div class="prediction-score">
          <span class="score-value">{{ predictionScore }}</span>
          <span class="score-unit">L/day</span>
        </div>
        <!-- <div class="prediction-status">
          <span class="status-label">Status:</span>
          <span class="status-value">{{ predictionStatus }}</span>
        </div> -->
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
    const isLoading = ref(false)
    
    const formData = ref({
      smartMeterId: '',
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

    const runModel = async () => {
      isLoading.value = true
      console.log('Running model with data:', formData.value)
      
      // Transform form data to API format
      const apiPayload = {
        customer_data: {
          household_size: parseInt(formData.value.household_size) || 0,
          household_garden_area: parseInt(formData.value.household_garden_area) || 0,
          household_pool: formData.value.household_pool ? 1 : 0,
          household_garden: formData.value.household_garden ? 1 : 0,
          number_bathrooms: parseInt(formData.value.number_bathrooms) || 0,
          irrigation_system: formData.value.irrigation_system ? 1 : 0,
          house_plants: formData.value.house_plants ? 1 : 0,
          balcony_plants: formData.value.balcony_plants ? 1 : 0,
          Bathtub: formData.value.Bathtub ? 1 : 0,
          Dishwasher: formData.value.Dishwasher ? 1 : 0,
          Shower: formData.value.Shower ? 1 : 0,
          Sink: formData.value.Sink ? 1 : 0,
          Toilet: formData.value.Toilet ? 1 : 0,
          Tub_Shower: formData.value.TubShower ? 1 : 0,
          Washing_Machine: formData.value.WashingMachine ? 1 : 0,
          // Residency type - convert to separate boolean fields
          residency_Flat: formData.value.residency === 'Flat' ? 1 : 0,
          residency_Other: formData.value.residency === 'other' ? 1 : 0,
          residency_Single_Family: formData.value.residency === 'Single family' ? 1 : 0,
          // Environmental attitude - convert to separate boolean fields
          env_attitude_High_sensitivity: formData.value.env_attitude_sensitivity === 'High' ? 1 : 0,
          env_attitude_Low_sensitivity: formData.value.env_attitude_sensitivity === 'Low' ? 1 : 0,
          env_attitude_Medium_sensitivity: formData.value.env_attitude_sensitivity === 'Medium' ? 1 : 0
        }
      }

      try {
        const smartMeterId = formData.value.smartMeterId
        const apiUrl = `/api/inference/?smart_meter_id=${smartMeterId}`
        
        console.log('API URL:', apiUrl)
        console.log('API Payload:', apiPayload)
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(apiPayload)
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        console.log('API Response:', result)
        
        // Update predictionScore with the API response
        if (result.status === 'ok' && result.prediction !== undefined) {
          predictionScore.value = result.prediction
        }
        
      } catch (error) {
        console.error('Error calling API:', error)
      } finally {
        isLoading.value = false
      }
    }

    return {
      formData,
      predictionScore,
      predictionStatus,
      isLoading,
      runModel
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  font-family: 'Arial', sans-serif;
  padding: 1rem 2rem;
  /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
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
  max-width: 70%;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); */
  overflow-y: auto;
}

.result-section {
  flex: 1;
  max-width: 30%;
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

.water-emoji {
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
  display: flex;
  align-items: center;
  gap: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0;
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
  min-width: 260px;
  flex-shrink: 0;
}

.text-input, .select-input {
  flex: 1;
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