const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const authService = {
  login: async (email, password) => {
    await delay(800)
    return {
      success: true,
      user: {
        id: '1',
        name: 'John Doe',
        email,
        avatar: 'JD',
      },
      token: 'mock-token-123',
    }
  },

  logout: async () => {
    await delay(500)
    return { success: true }
  },

  getProfile: async () => {
    await delay(500)
    return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'JD',
      createdAt: '2023-01-15',
    }
  },

  updateProfile: async (updates) => {
    await delay(600)
    return {
      success: true,
      user: { ...updates },
    }
  },
}
