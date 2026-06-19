export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validatePassword = (password) => {
  return password && password.length >= 8
}

export const validateFile = (file, allowedTypes = ['application/pdf']) => {
  if (!file) return { valid: false, error: 'No file selected' }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file type. Please upload a PDF.' }
  }

  const maxSize = 5 * 1024 * 1024 // 5MB
  if (file.size > maxSize) {
    return { valid: false, error: 'File size exceeds 5MB limit.' }
  }

  return { valid: true }
}

export const validateName = (name) => {
  return name && name.trim().length >= 2
}

export const validatePhoneNumber = (phone) => {
  const regex = /^\+?[\d\s\-()]+$/
  return regex.test(phone)
}

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0
}

export const validateAnswer = (answer) => {
  return answer && answer.trim().length >= 10
}

export const validateInterviewSetup = (role, difficulty, questionCount) => {
  const errors = {}

  if (!role) errors.role = 'Please select a role'
  if (!difficulty) errors.difficulty = 'Please select a difficulty level'
  if (!questionCount) errors.questionCount = 'Please select number of questions'

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
