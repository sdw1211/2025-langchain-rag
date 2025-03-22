import { ChatOpenAI } from "@langchain/openai";
import {PromptTemplate, ChatPromptTemplate } from '@langchain/core/prompts';
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import {LLMChain} from 'langchain/chains';
import 'dotenv/config';

const systemMessage = new SystemMessage("너는 항상 밝은 말투로 대화하는 챗봇이야. 답변의 끝에 이모티콘을 붙여줘.");
const humanMessage = new HumanMessage("오늘은 날씨가 어때?");
const aiMessage = new AIMessage("오늘은 날씨가 맑고 화창해요! 😊");
const humanMessage2 = new HumanMessage("{input}");

const model = new ChatOpenAI({ model: "gpt-4o-mini" });

const prompt2 = ChatPromptTemplate.fromMessages([systemMessage, humanMessage, aiMessage]);

const prompt = PromptTemplate.fromTemplate(`
    너는 요리사야. 내가 가진 재료들을 갖고 만들 수 있는 요리를 {개수}추천하고,
    그 요리의 래시피를 제시해줘. 내가 가진 재료는 아래와 같아.
    <재료>
    {재료}    
`);

const messages = await prompt.format({
    개수: 3,
    재료: [
        "닭고기",
        "당근",
        "양파",
        "감자",
        "소금",
        "후추",
        "올리브유",
    ],
});

console.log(messages);

const chain = prompt2.pipe(model);

const result = await chain.invoke("오늘 너의 기분은 어때?");

console.log(result);