import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config'

const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0, cache: true });

console.time();

const result = await model.invoke("피타고라스의 정리에 대해서 설명해줘.");
console.log(result);

console.timeEnd();

console.time();

const result2 = await model.invoke("피타고라스의 정리에 대해서 설명해줘.");
console.log(result2);

console.timeEnd();


export {};