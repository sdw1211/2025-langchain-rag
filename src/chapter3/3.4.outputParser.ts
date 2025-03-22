import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { HumanMessagePromptTemplate, ChatPromptTemplate, PromptTemplate } from '@langchain/core/prompts';

import {CommaSeparatedListOutputParser} from '@langchain/core/output_parsers';

import 'dotenv/config';


const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
const outputParser = new CommaSeparatedListOutputParser();

// const chatTemplate = ChatPromptTemplate.fromMessages([
//     new SystemMessage("너는 영화 전문가 AI야. 사용자가 원하는 장르의 영화를 리스트 형태로 추천해줘."),
//     new SystemMessage("ex) Query: SF 영화 3개 추천해줘 / 답변: ['인터스텔라', '스페이지오디세이', '혹성탈출']"),
//     HumanMessagePromptTemplate.fromTemplate('{text}')
// ]);

// const messages = await chatTemplate.formatMessages({
//     text: "액션 영화 5개를 추천해줘."
// });

// const answer = await model.invoke(messages);

// console.log(answer.content);


const prompt = PromptTemplate.fromTemplate("List {number} {subject}. answer in Korean.\n{formatInstructions}");

const chain = (await prompt
    .partial({formatInstructions: outputParser.getFormatInstructions()}))
    .pipe(model);

const result = await chain.invoke({subject: '공포 영화', number: '4'})

console.log(result.content);



