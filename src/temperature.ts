import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config'

const model1 = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const model2 = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });

const model3 = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 1 });
const model4 = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 1 });

const modelList = [model1, model2, model3, model4];

for (const model of modelList) {
    const answer = await model.invoke("왜 자바스크립트가 가장 인기 있는 프로그래밍 언어인지 한 문장으로 설명해줘", {
        maxTokens: 128,
    });

    console.log("-".repeat(100));
    console.log(model.temperature, ">>>", answer.content);
}

export {};