import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import 'dotenv/config'

const model = new ChatOpenAI({ model: "gpt-4o-mini" });

const messages = [
    new SystemMessage("Translate the following from English into Korean"),
    new HumanMessage("hi!"),
];

const result = await model.invoke(messages);
console.log(result);
console.log('end of the script');

export {};