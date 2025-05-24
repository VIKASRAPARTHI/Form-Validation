import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {
  const navigate = useNavigate()

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    countryCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: ''
  })

  // Error state
  const [errors, setErrors] = useState({})

  // Show/hide password state
  const [showPassword, setShowPassword] = useState(false)

  // Country and city data
  const countries = {
    'India': ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'],
    'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio'],
    'UK': ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield'],
    'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle']
  }

  const countryCodes = {
    'India': '+91',
    'USA': '+1',
    'UK': '+44',
    'Canada': '+1',
    'Australia': '+61'
  }

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    return panRegex.test(pan)
  }

  const validateAadhar = (aadhar) => {
    const aadharRegex = /^[0-9]{12}$/
    return aadharRegex.test(aadhar)
  }

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target

    // Special handling for country change
    if (name === 'country') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        city: '', // Reset city when country changes
        countryCode: countryCodes[value] || ''
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.username.trim()) newErrors.username = 'Username is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.password.trim()) newErrors.password = 'Password is required'
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.panNumber.trim()) newErrors.panNumber = 'PAN number is required'
    if (!formData.aadharNumber.trim()) newErrors.aadharNumber = 'Aadhar number is required'

    // Format validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number'
    }

    if (formData.panNumber && !validatePAN(formData.panNumber)) {
      newErrors.panNumber = 'Please enter a valid PAN number (e.g., ABCDE1234F)'
    }

    if (formData.aadharNumber && !validateAadhar(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Please enter a valid 12-digit Aadhar number'
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Check if form is valid for submit button
  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '') &&
           Object.keys(errors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Store form data in localStorage for the details page
      localStorage.setItem('userFormData', JSON.stringify(formData))
      navigate('/details')
    }
  }

  return (
    <div className="form-container">
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit} className="user-form">
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <div className="phone-input">
            <input
              type="text"
              className="country-code"
              value={formData.countryCode}
              readOnly
            />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter 10-digit number"
              className={errors.phoneNumber ? 'error' : ''}
            />
          </div>
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="country">Country *</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={errors.country ? 'error' : ''}
          >
            <option value="">Select Country</option>
            {Object.keys(countries).map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        {/* City */}
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={errors.city ? 'error' : ''}
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {formData.country && countries[formData.country]?.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        {/* PAN Number */}
        <div className="form-group">
          <label htmlFor="panNumber">PAN Number *</label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleInputChange}
            placeholder="ABCDE1234F"
            className={errors.panNumber ? 'error' : ''}
            style={{ textTransform: 'uppercase' }}
          />
          {errors.panNumber && <span className="error-message">{errors.panNumber}</span>}
        </div>

        {/* Aadhar Number */}
        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Number *</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            placeholder="123456789012"
            className={errors.aadharNumber ? 'error' : ''}
          />
          {errors.aadharNumber && <span className="error-message">{errors.aadharNumber}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserForm
