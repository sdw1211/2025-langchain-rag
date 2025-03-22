import {PromptTemplate} from '@langchain/core/prompts';
import dayjs from 'dayjs';
import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config';


const prompt = PromptTemplate.fromTemplate('나이: {age}\n직업: {job}');

const partialPrompt = await prompt.partial({age: '20'});
const result = await partialPrompt.format({job: "학생"});

console.log(result);

function getDatetime() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
}

const prompt2 = PromptTemplate.fromTemplate('Tell me a {adjective} joke the day {date}.');


const partialPrompt2 = await prompt2.partial({date: getDatetime()});
const result2 = await partialPrompt2.format({adjective: "funny"});

console.log(result2);




