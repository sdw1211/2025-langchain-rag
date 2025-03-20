import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

import 'dotenv/config'

const model = new ChatAnthropic({
    model: "claude-3-haiku-20240307",
    temperature: 0
});

const messages = [
    new SystemMessage("Translate the following from English into Korean"),
    new HumanMessage("hi!"),
];

const result = await model.invoke(messages);
console.log(result);
console.log('end of the script');
