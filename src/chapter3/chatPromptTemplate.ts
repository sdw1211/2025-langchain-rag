import {ChatPromptTemplate} from '@langchain/core/prompts';
import {ChatOpenAI} from '@langchain/openai';
import 'dotenv/config';

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful assistant"],
    ["user", "Tell me a joke about {topic}"],
]);

const messages = await promptTemplate.invoke({ topic: "cats" });

console.log(messages);


const model = new ChatOpenAI({ model: "gpt-4o-mini" });

const result = await model.invoke(messages);

console.log(result);





