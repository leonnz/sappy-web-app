<template>
  <div class="container">
    <div class="title-row">
      <svg width="60" height="60" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.4879 34.7823C43.4979 36.1536 43.0723 37.1992 43.362 39.2246C42.0631 36.0996 45.8565 25.4533 41.7769 22.7441" stroke="url(#paint0_linear_62_2137)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.1051 10.8464C29.4951 22.1213 34.2412 23.7406 43.3833 23.5967C36.5946 6.83694 31.655 4.41753 21.1051 10.8464Z" fill="url(#paint1_linear_62_2137)"/>
        <path d="M46.8497 35.0158C57.0155 37.0754 60.6765 35.0169 66.2952 28.8418C54.7156 22.0024 50.5831 23.6474 46.8497 35.0158Z" fill="url(#paint2_linear_62_2137)"/>
        <path d="M58.574 43.2617H22.3483C19.702 43.2617 17.785 45.7853 18.4948 48.3346L23.9095 67.7819C24.2769 69.1015 25.2982 70.1483 26.6163 70.5209C39.0899 74.0461 45.8632 73.5764 55.4703 70.5955C56.8134 70.1788 57.8164 69.0608 58.1222 67.6882L62.4783 48.1314C63.0349 45.6328 61.1338 43.2617 58.574 43.2617Z" fill="url(#paint3_linear_62_2137)"/>
        <path d="M62.3041 36.6802C46.0075 38.3868 34.0637 38.2871 17.9849 36.7301C14.3859 36.3816 12.1153 40.5802 14.4325 43.356L17.0607 46.5044C17.7033 47.2743 18.612 47.7758 19.6068 47.9028C35.1874 49.8915 44.8345 49.8993 61.1795 47.9253C62.3315 47.7862 63.3649 47.1471 64.0093 46.1821L66.1561 42.9676C68.0632 40.1118 65.7195 36.3225 62.3041 36.6802Z" fill="url(#paint4_linear_62_2137)"/>
        <circle cx="30.5179" cy="55.5419" r="2.11077" fill="black" stroke="black"/>
        <circle cx="52.0567" cy="55.5419" r="2.11077" fill="black" stroke="black"/>
        <path d="M37.6975 58.1523C37.6975 61.9323 44.2244 62.2023 44.2244 58.1523" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <circle cx="0.815865" cy="0.815865" r="0.815865" transform="matrix(-1 0 0 1 30.5178 56.1943)" fill="#D9D9D9"/>
        <circle cx="0.815865" cy="0.815865" r="0.815865" transform="matrix(-1 0 0 1 52.0566 56.1943)" fill="#D9D9D9"/>
        <defs>
          <linearGradient id="paint0_linear_62_2137" x1="42.1032" y1="31.7186" x2="42.1032" y2="39.2246" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A2593F"/>
            <stop offset="1" stop-color="#3C2117"/>
          </linearGradient>
          <linearGradient id="paint1_linear_62_2137" x1="35.1397" y1="9.37515" x2="29.1229" y2="19.8881" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7ADD98"/>
            <stop offset="1" stop-color="#427752"/>
          </linearGradient>
          <linearGradient id="paint2_linear_62_2137" x1="54.9261" y1="24.6889" x2="58.2141" y2="35.0447" gradientUnits="userSpaceOnUse">
            <stop stop-color="#92FFB3"/>
            <stop offset="1" stop-color="#58996B"/>
          </linearGradient>
          <linearGradient id="paint3_linear_62_2137" x1="17.1346" y1="43.2617" x2="52.5306" y2="79.6431" gradientUnits="userSpaceOnUse">
            <stop offset="0.0509383" stop-color="#B37400"/>
            <stop offset="1" stop-color="#422920"/>
          </linearGradient>
          <linearGradient id="paint4_linear_62_2137" x1="8.07074" y1="35.6504" x2="17.4764" y2="64.6353" gradientUnits="userSpaceOnUse">
            <stop offset="0.0509383" stop-color="#B37400"/>
            <stop offset="1" stop-color="#422920"/>
          </linearGradient>
        </defs>
      </svg>
      <h1>Sappy ML model</h1>
      <span class="robot-emoji" :class="{ 'spinning': isLoading }">🤖</span>
    </div>
    <div class="main-content">
      <div class="form-section">
        <div class="input-group">
          <label>Smart Meter ID:</label>
          <input 
            v-model="formData.smartMeterId" 
            type="text" 
            :class="['text-input', { 'error': smartMeterIdError }]"
            @input="smartMeterIdError = false"
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

      <div class="button-row">
        <button @click="resetForm" class="reset-button">
          Reset
        </button>
        <button @click="runModel" :disabled="isLoading" class="run-button">
          {{ isLoading ? 'Thinking...' : 'Run' }}
        </button>
      </div>
    </div>

    <div class="result-section">
      <div class="result-content">
        <div class="emojis">
          <span class="water-emoji">💧💧💧</span>
        </div>
        <!-- <h2>Water Usage Prediction</h2> -->
        <div class="prediction-score">
          <span class="score-value">
            <span v-if="predictionScore !== null">{{ predictionScore }}</span>
            <span v-else class="cursor-loading">
              <span class="cursor-dot cursor-1"></span>
              <span class="cursor-dot cursor-2"></span>
              <span class="cursor-dot cursor-3"></span>
            </span>
          </span>
        </div>
        <div>
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
    const predictionScore = ref(null)
    const predictionStatus = ref('Normal Usage')
    const isLoading = ref(false)
    const smartMeterIdError = ref(false)
    
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
      // Validate smart meter ID is provided
      if (!formData.value.smartMeterId || formData.value.smartMeterId.trim() === '') {
        smartMeterIdError.value = true
        return
      }
      
      // Clear error state if validation passes
      smartMeterIdError.value = false
      
      // Reset prediction score to show cursor animation
      predictionScore.value = null
      
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

    const resetForm = () => {
      // Reset all form data to initial values
      formData.value = {
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
      }
      
      // Clear any error states
      smartMeterIdError.value = false
      
      // Reset prediction score to show cursor animation
      predictionScore.value = null
    }

    return {
      formData,
      predictionScore,
      predictionStatus,
      isLoading,
      smartMeterIdError,
      runModel,
      resetForm
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Arial', sans-serif;
  padding: 1rem 2rem;
  /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
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

.robot-emoji {
  font-size: 2.5rem;
  transition: transform 3s ease;
}

.robot-emoji.spinning {
  animation: robotSpin 0.4s linear infinite;
}

@keyframes robotSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #efefef; */
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
  font-size: 3rem;
  font-weight: bold;
  color: #667eea;
  display: block;
  line-height: 1;
}

.emojis {
  margin-bottom: 1rem;
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

.cursor-loading {
  display: inline-flex;
  gap: 0.2em;
  align-items: baseline;
  vertical-align: baseline;
}

.cursor-dot {
  animation: cursorSequence 1.5s infinite;
  opacity: 0.3;
  width: 0.5em;
  height: 0.1em;
  background-color: #667eea;
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: 0.1em;
}

.cursor-1 {
  animation-delay: 0s;
}

.cursor-2 {
  animation-delay: 0.5s;
}

.cursor-3 {
  animation-delay: 1s;
}

@keyframes cursorSequence {
  0%, 66.67%, 100% { opacity: 0.3; }
  33.33% { opacity: 1; }
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

.text-input.error, .select-input.error {
  border-color: #e53e3e;
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
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

.button-row {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.reset-button {
  flex: 1;
  padding: 14px 24px;
  font-size: 1rem;
  background: #f8f9fa;
  color: #2c3e50;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

.reset-button:hover {
  background: #e9ecef;
  border-color: #adb5bd;
  transform: translateY(-1px);
}

.run-button {
  flex: 1;
  padding: 14px 24px;
  font-size: 1rem;
  background: #319BFE;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 600;
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