import { useState } from 'react';
import axios from '../api/api'

function DonorForm() {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    eventAddress: '',
    eventTime: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/donations', formData);
    alert('Donation submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Food Type" onChange={(e) => setFormData({...formData, foodType: e.target.value})} />
      <input type="text" placeholder="Quantity" onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
      <input type="text" placeholder="Event Address" onChange={(e) => setFormData({...formData, eventAddress: e.target.value})} />
      <input type="datetime-local" onChange={(e) => setFormData({...formData, eventTime: e.target.value})} />
      <button type="submit">Donate</button>
    </form>
  );
}

export default DonorForm;
