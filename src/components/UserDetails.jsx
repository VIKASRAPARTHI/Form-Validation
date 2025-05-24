import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserDetails = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem('userFormData')

    if (storedData) {
      setUserData(JSON.parse(storedData))
    } else {
      // If no data found, redirect to form
      navigate('/')
    }
  }, [navigate])

  const handleBackToForm = () => {
    navigate('/')
  }

  const handleClearData = () => {
    localStorage.removeItem('userFormData')
    navigate('/')
  }

  if (!userData) {
    return (
      <div className="details-container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>User Details</h1>
        <p>Form submitted successfully! Here are your details:</p>
      </div>

      <div className="details-card">
        <div className="details-section">
          <h2>Personal Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <label>First Name:</label>
              <span>{userData.firstName}</span>
            </div>
            <div className="detail-item">
              <label>Last Name:</label>
              <span>{userData.lastName}</span>
            </div>
            <div className="detail-item">
              <label>Username:</label>
              <span>{userData.username}</span>
            </div>
            <div className="detail-item">
              <label>Email:</label>
              <span>{userData.email}</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Contact Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <label>Phone Number:</label>
              <span>{userData.countryCode} {userData.phoneNumber}</span>
            </div>
            <div className="detail-item">
              <label>Country:</label>
              <span>{userData.country}</span>
            </div>
            <div className="detail-item">
              <label>City:</label>
              <span>{userData.city}</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Identity Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <label>PAN Number:</label>
              <span>{userData.panNumber}</span>
            </div>
            <div className="detail-item">
              <label>Aadhar Number:</label>
              <span>{userData.aadharNumber}</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Security Information</h2>
          <div className="details-grid">
            <div className="detail-item">
              <label>Password:</label>
              <span>{'*'.repeat(userData.password.length)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="details-actions">
        <button
          onClick={handleBackToForm}
          className="back-button"
        >
          Back to Form
        </button>
        <button
          onClick={handleClearData}
          className="clear-button"
        >
          Clear Data & Start Over
        </button>
      </div>
    </div>
  )
}

export default UserDetails
