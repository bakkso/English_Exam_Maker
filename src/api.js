export async function generateQuestion(problemType, text) {
    const response = await fetch('/.netlify/functions/generate-question', {
      method: 'POST',
      body: JSON.stringify({ problemType, text }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.completion;
  }
  
