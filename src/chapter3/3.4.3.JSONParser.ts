 import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from '@langchain/core/prompts';

import { JsonOutputParser } from '@langchain/core/output_parsers';

import 'dotenv/config';

// 미리 정의된 JSON 스키마
type Answer = {
    continent: string;
    population: string;
};

const formatInstructions = `
Respond only in valid JSON. The JSON object you return should match the following schema:
{ continent: string, population: string }

continent는 사용자 물어본 나라가 속한 대륙이야.
population은 사용자가 물어본 나라의 인구인데 숫자형태로 부탁해. 3자리별로 ,도 부탁해
`;

const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const outputParser = new JsonOutputParser<Answer>();


const prompt = await PromptTemplate.fromTemplate('Answer the user query.\n{formatInstructions}\n{query}')
    .partial({formatInstructions: formatInstructions});

const chain2 = prompt.pipe(model).pipe(outputParser);

const result = await chain2.invoke({query: "대한민국은 어떤나라야?"})

console.log(result);



