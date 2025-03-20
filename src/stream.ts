import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config'

const model = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });



const streamResponse = async () => {
    const stream = await model.stream("달에 관한 시를 써줘");

    for await (const chunk of stream) {
        process.stdout.write(chunk.content as string);
    }
}

streamResponse();

export {};