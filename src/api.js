// const API_KEY = process.env.REACT_APP_CLAUDE_API_KEY;
// const API_URL = 'https://api.anthropic.com/v1/complete';

export async function generateQuestion(problemType, text) {
  console.log('Calling generateQuestion with:', { problemType, text });
  try {
    const response = await fetch('/.netlify/functions/generate-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ problemType, text }),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    console.log('API response:', data);
    return data.completion;
  } catch (error) {
    console.error('Error in generateQuestion:', error);
    throw error;
  }
}