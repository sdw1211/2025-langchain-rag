import {PromptTemplate, FewShotPromptTemplate} from '@langchain/core/prompts';
import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config';

const examples = [{
    question: '아이유로 삼행시 만들어줘',
    answer: `
        아: 아이유는
        이: 이런 강의를 들을 이
        유: 유가 없다.
    `,
}];

const examplePrompt = PromptTemplate.fromTemplate("Question: {question}\nAnswer: {answer}");

// console.log(await examplePrompt.format(examples[0]));

const fewPrompt = new FewShotPromptTemplate({
    examples,
    examplePrompt,
    suffix: "Question: {input}",
    inputVariables: ["input"]
});

// console.log(await fewPrompt.format({input: "호날두로 삼행시 만들어줘"}));

const model = new ChatOpenAI({ model: "gpt-4o-mini" });

const result = await model.invoke(await fewPrompt.format({input: "호날두로 삼행시 만들어줘"}));

console.log(result.content);