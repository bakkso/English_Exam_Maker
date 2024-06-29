const axios = require('axios');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*', // 또는 특정 도메인
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  console.log('Function invoked with body:', event.body);
  const { problemType, text } = JSON.parse(event.body);
  const API_KEY = process.env.REACT_APP_CLAUDE_API_KEY;
  const API_URL = 'https://api.anthropic.com/v1/complete';

  const prompt = `I am currently an English teacher focusing on students at autonomous private high schools in Korea, and you serve as my assistant teacher with the role of creating questions. I will input a passage, and once I select a <Question Types> from the list below, you need to create a question matching that type in the style of SAT questions. You can refer to the <Question Example> section below for an example of a completed question.
  <Question Example>
  The spread of Western clothing to areas in which little or no clothing was worn in the past has sometimes produced disastrous results in terms of health and cleanliness. In many such cases, people took over only one part of the clothing complex, that is, the wearing of clothes. They knew nothing of the care of clothing and in many cases lacked the necessary equipment for such care. When they had worn no clothing, their bodies got a cleansing shower in the rain, and the bare skin dried quickly in the sun and air. When they obtained clothing, however, a shower meant wet clothes that did not dry so quickly as bare bodies, and pneumonia or other lung diseases sometimes resulted. Often they had little or no water for washing clothes, even if they had known how to do it. There were no fresh clothes to change into so people usually simply wore what they had until the clothes fell apart.
  
  
  [문제] 다음 글의 주제로 가장 적절한 것은?
  
  The spread of Western clothing to areas in which little or no clothing was worn in the past has sometimes produced disastrous results in terms of health and cleanliness. In many such cases, people took over only one part of the clothing complex, that is, the wearing of clothes. They knew nothing of the care of clothing and in many cases lacked the necessary equipment for such care. When they had worn no clothing, their bodies got a cleansing shower in the rain, and the bare skin dried quickly in the sun and air. When they obtained clothing, however, a shower meant wet clothes that did not dry so quickly as bare bodies, and pneumonia or other lung diseases sometimes resulted. Often they had little or no water for washing clothes, even if they had known how to do it. There were no fresh clothes to change into so people usually simply wore what they had until the clothes fell apart.
  
  ① The importance of proper clothing care in Western culture
  ② The health benefits of traditional clothing in non-Western cultures
  ③ The negative health effects of adopting Western clothing without proper knowledge
  ④ The cultural significance of clothing in different societies
  ⑤ The economic impact of the spread of Western clothing to new areas
  
  [정답] ③
  
  [해설] 이 글은 서양의 의복이 과거에 의복을 거의 또는 전혀 입지 않았던 지역으로 퍼지면서 발생한 건강과 위생 측면의 부정적인 결과에 대해 설명하고 있습니다. 의복 관리에 대한 지식이나 필요한 장비 없이 옷을 입게 된 사람들이 겪은 문제점들을 다루고 있습니다.
  
  ① 서양 문화에서의 적절한 의복 관리의 중요성 (글에서는 서양 문화의 의복 관리에 대해 다루지 않음)
  ② 비서양 문화의 전통 의복의 건강상 이점 (전통 의복의 이점이 아닌 서양 의복 도입의 문제점을 다룸)
  ③ 적절한 지식 없이 서양 의복을 채택함으로써 발생하는 부정적인 건강 영향 (글의 주요 내용과 일치)
  ④ 다양한 사회에서의 의복의 문화적 중요성 (의복의 문화적 중요성보다는 건강 문제에 초점을 맞춤)
  ⑤ 서양 의복이 새로운 지역으로 퍼짐에 따른 경제적 영향 (경제적 영향에 대해서는 언급하지 않음)
  
  
  
  [문제] 다음 글의 제목으로 가장 적절한 것은?
  
  
  The spread of Western clothing to areas in which little or no clothing was worn in the past has sometimes produced disastrous results in terms of health and cleanliness. In many such cases, people took over only one part of the clothing complex, that is, the wearing of clothes. They knew nothing of the care of clothing and in many cases lacked the necessary equipment for such care. When they had worn no clothing, their bodies got a cleansing shower in the rain, and the bare skin dried quickly in the sun and air. When they obtained clothing, however, a shower meant wet clothes that did not dry so quickly as bare bodies, and pneumonia or other lung diseases sometimes resulted. Often they had little or no water for washing clothes, even if they had known how to do it. There were no fresh clothes to change into so people usually simply wore what they had until the clothes fell apart.① Modernization of Traditional Clothing Practices② Evolution of Textile Industry Globally③ Health Risks of Improper Clothing Care④ Cultural Adaptation to Western Fashion⑤ Negative Effects of Western Clothing Adoption[정답] ⑤[해설] 정답은 ⑤번 "Negative Effects of Western Clothing Adoption(서양 의복 채택의 부정적 영향)"이다. 이 글은 과거에 의복을 거의 또는 전혀 입지 않던 지역에 서양식 의복이 도입되면서 발생한 건강과 위생 측면의 문제점들을 설명하고 있다. ① "전통적 의복 관행의 현대화": 글에서 의복 관행의 현대화에 대해 언급하지 않는다.② "세계적 섬유 산업의 진화": 글에서 섬유 산업에 대한 내용은 다루지 않는다.③ "부적절한 의복 관리의 건강 위험": 의복 관리 문제로 인한 건강 위험을 언급하지만, 이는 더 큰 주제의 일부일 뿐이다.④ "서양 패션에 대한 문화적 적응": 글에서는 문화적 적응보다는 부적응으로 인한 문제점을 다루고 있다.⑤ "서양 의복 채택의 부정적 영향": 글의 전반적인 내용을 가장 잘 요약하고 있다. 서양 의복의 도입이 건강과 위생 측면에서 재앙적인 결과를 초래했다는 점, 의복 관리 지식과 장비의 부족, 젖은 옷으로 인한 폐렴 등의 질병 발생, 세탁의 어려움 등 서양 의복 채택으로 인한 여러 부정적 영향을 설명하고 있다.
  
  
  [문제]
  다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?
  
  The spread of Western clothing to areas in which little or no clothing was worn in the past has sometimes produced disastrous results in terms of health and cleanliness. In many such cases, people took over only one part of the clothing complex, that is, the wearing of clothes. They knew nothing of the care of clothing and in many cases lacked the necessary equipment for such care. When they had worn no clothing, their bodies got a cleansing shower in the rain, and the bare skin dried quickly in the sun and air. When they obtained clothing, however, _______________________ and pneumonia or other lung diseases sometimes resulted. Often they had little or no water for washing clothes, even if they had known how to do it. There were no fresh clothes to change into so people usually simply wore what they had until the clothes fell apart.
  
  ① the fabric attracted more dirt and bacteria
  ② they struggled to adapt to the new fashion trends
  ③ a shower meant wet clothes that did not dry so quickly as bare bodies
  ④ they became more susceptible to skin infections
  ⑤ the cultural significance of clothing was misunderstood
  
  [정답] ③
  
  [해설]
  주어진 글에서는 서양식 의복 착용이 기존에 의복을 거의 또는 전혀 착용하지 않던 지역에 미친 부정적 영향을 설명하고 있습니다. 특히 비를 맞았을 때의 상황을 대조적으로 보여주고 있습니다. 의복을 입지 않았을 때는 비를 맞으면 몸이 깨끗해지고 빨리 말랐지만, 의복을 입게 된 후에는 비에 젖은 옷이 맨살처럼 빨리 마르지 않아 건강 문제를 일으켰다는 내용이 빈칸 앞뒤 문맥과 가장 잘 연결됩니다.
  
  [보기해석]
  ① 천이 더 많은 먼지와 박테리아를 끌어들였다
  ② 그들은 새로운 패션 트렌드에 적응하는 데 어려움을 겪었다
  ③ 샤워는 맨몸처럼 빨리 마르지 않는 젖은 옷을 의미했다
  ④ 그들은 피부 감염에 더 취약해졌다
  ⑤ 의복의 문화적 중요성이 오해되었다
  
  <Question Types>
  - Topic Question
  - Title Question
  - Inference Question
  - Detail Match Question
  - Detail Mismatch Question
  - Vocabulary Question
  - Fill-in-the-Blank Question
  - Sequence Question
  - Sentence Insertion Question
  - Summary Fill-in-the-Blank Question
  - Synonyms and Antonyms
  - Content Organization:
  
  Text: ${text}

  Problem Type: ${problemType}

  Generate a ${problemType} question based on the above text.`;

  try {
    const response = await axios.post(API_URL, {
      prompt: prompt,
      model: "claude-v1",
      max_tokens_to_sample: 300,
      temperature: 0.7,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });
    
    return {
      statusCode: 200,
      headers, // CORS 헤더 포함
      body: JSON.stringify({ completion: response.data.completion }),
    };
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      headers, // CORS 헤더 포함
      body: JSON.stringify({ error: 'An error occurred while generating the question.' }),
    };
  }
};

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ completion: response.data.completion }),
//     };
//   } catch (error) {
//     console.error('Error:', error.response ? error.response.data : error.message);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'An error occurred while generating the question.' }),
//     };
//   }
// };


