/**
 * 캐싱을 적용해서 더 빠른 응답을 받을 수 있다.
 */
import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config'

// 캐싱 옵션은 모델에서 적용
// 기본 캐싱은 인메모리 캐싱
const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0, cache: true });

console.time();

const result = await model.invoke("피타고라스의 정리에 대해서 설명해줘.");
console.log(result);

console.timeEnd();

console.time();

// 동일한 질문에 대해서 캐싱을 하기 때문에 속도가 빨라진다.
const result2 = await model.invoke("피타고라스의 정리에 대해서 설명해줘.");
console.log(result2);

console.timeEnd();


console.time();

// 동일한 질문에 대해서만 캐싱이 되는 듯, 같은 질문에 다른 형태인 경우 캐싱이 안된다.
const result3 = await model.invoke("피타고라스란?");
console.log(result3);

console.timeEnd();


export {};