
const axios = require('axios');
exports.getFreeAiModels = async (req, res) => {
    try {
        const response = await axios.get('https://openrouter.ai/api/v1/models');
        const allModels = response.data.data;

        // console.log('free model response', response.data.data);


        const freeModels = allModels
            .filter(model => model.id.endsWith(':free'))
            .map(model => model.id);


        freeModels.forEach(model => console.log(`'${model}',`));


        return res.status(200).json({ success: true, response: freeModels })

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}


/// keep all models in this format:
const MODEL_CONFIGS = [
    { model: 'nvidia/nemotron-3-8b-instruct:free', delay: 1000 },
    { model: 'google/gemini-2.0-flash-exp:free', delay: 1500 },
    { model: 'google/gemini-2.0-pro-exp-02-05:free', delay: 2000 },
    { model: 'gryphe/mythomax-l2-13b:free', delay: 3000 },
    { model: 'openchat/openchat-3.5:free', delay: 2500 },
    { model: 'nousresearch/nous-hermes-2-mistral-dpo:free', delay: 3000 },
    { model: 'cognitivecomputations/dolphin-2.6-mistral:free', delay: 3000 },
    { model: 'shisa-ai/shisa-v2-llama3.3-70b:free', delay: 3000 },
    { model: 'arliai/qwq-32b-arliai-rpr-v1:free', delay: 3000 },
    { model: 'agentica-org/deepcoder-14b-preview:free', delay: 3000 },
    { model: 'moonshotai/kimi-vl-a3b-thinking:free', delay: 3000 },
    { model: 'nvidia/llama-3.1-nemotron-nano-8b-v1:free', delay: 3000 },
    { model: 'nvidia/llama-3.3-nemotron-super-49b-v1:free', delay: 3000 },
    { model: 'nvidia/llama-3.1-nemotron-ultra-253b-v1:free', delay: 3000 },
    { model: 'meta-llama/llama-4-maverick:free', delay: 3000 },
    { model: 'meta-llama/llama-4-scout:free', delay: 3000 },
    { model: 'deepseek/deepseek-v3-base:free', delay: 3000 },
    { model: 'allenai/molmo-7b-d:free', delay: 3000 },
    { model: 'bytedance-research/ui-tars-72b:free', delay: 3000 },
    { model: 'qwen/qwen2.5-vl-3b-instruct:free', delay: 3000 },
    { model: 'google/gemini-2.5-pro-exp-03-25:free', delay: 3000 },
    { model: 'qwen/qwen2.5-vl-32b-instruct:free', delay: 3000 },
    { model: 'deepseek/deepseek-chat-v3-0324:free', delay: 3000 },
    { model: 'mistralai/mistral-small-3.1-24b-instruct:free', delay: 3000 },
    { model: 'open-r1/olympiccoder-7b:free', delay: 3000 },
    { model: 'open-r1/olympiccoder-32b:free', delay: 3000 },
    { model: 'google/gemma-3-1b-it:free', delay: 3000 },
    { model: 'google/gemma-3-4b-it:free', delay: 3000 },
    { model: 'google/gemma-3-12b-it:free', delay: 3000 },
    { model: 'rekaai/reka-flash-3:free', delay: 3000 },
    { model: 'google/gemma-3-27b-it:free', delay: 3000 },
    { model: 'deepseek/deepseek-r1-zero:free', delay: 3000 },
    { model: 'qwen/qwq-32b:free', delay: 3000 },
    { model: 'moonshotai/moonlight-16b-a3b-instruct:free', delay: 3000 },
    { model: 'nousresearch/deephermes-3-llama-3-8b-preview:free', delay: 3000 },
    { model: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free', delay: 3000 },
    { model: 'cognitivecomputations/dolphin3.0-mistral-24b:free', delay: 3000 },
    { model: 'qwen/qwen2.5-vl-72b-instruct:free', delay: 3000 },
    { model: 'mistralai/mistral-small-24b-instruct-2501:free', delay: 3000 },
    { model: 'deepseek/deepseek-r1-distill-qwen-32b:free', delay: 3000 },
    { model: 'deepseek/deepseek-r1-distill-qwen-14b:free', delay: 3000 },
    { model: 'deepseek/deepseek-r1-distill-llama-70b:free', delay: 3000 },
    { model: 'google/gemini-2.0-flash-thinking-exp:free', delay: 3000 },
    { model: 'deepseek/deepseek-r1:free', delay: 3000 },
    { model: 'sophosympatheia/rogue-rose-103b-v0.2:free', delay: 3000 },
    { model: 'deepseek/deepseek-chat:free', delay: 3000 },
    { model: 'google/gemini-2.0-flash-thinking-exp-1219:free', delay: 3000 },
    { model: 'meta-llama/llama-3.3-70b-instruct:free', delay: 3000 },
    { model: 'qwen/qwq-32b-preview:free', delay: 3000 },
    { model: 'google/learnlm-1.5-pro-experimental:free', delay: 3000 },
    { model: 'qwen/qwen-2.5-coder-32b-instruct:free', delay: 3000 },
    { model: 'qwen/qwen-2.5-7b-instruct:free', delay: 3000 },
    { model: 'nvidia/llama-3.1-nemotron-70b-instruct:free', delay: 3000 },
    { model: 'meta-llama/llama-3.2-3b-instruct:free', delay: 3000 },
    { model: 'meta-llama/llama-3.2-1b-instruct:free', delay: 3000 },
    { model: 'meta-llama/llama-3.2-11b-vision-instruct:free', delay: 3000 },
    { model: 'qwen/qwen-2.5-72b-instruct:free', delay: 3000 },
    { model: 'qwen/qwen-2.5-vl-7b-instruct:free', delay: 3000 },
    { model: 'meta-llama/llama-3.1-8b-instruct:free', delay: 3000 },
    { model: 'mistralai/mistral-nemo:free', delay: 3000 },
    { model: 'google/gemma-2-9b-it:free', delay: 3000 },
];


let currentModelIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




async function modelRequest(inputText) {
    while (currentModelIndex < MODEL_CONFIGS.length) {
        const { model, delay } = MODEL_CONFIGS[currentModelIndex];
        console.log('🧠 active model:', model);

        try {
            await sleep(delay);

            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`, /// get apiKey in openrouter dashboard
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost',
                    'X-Title': 'LoanClassifier'
                },
                body: JSON.stringify({
                    model,
                    messages: [
                        {
                            role: 'system',
                            content: ` do something. `
                        },
                        {
                            role: 'user',
                            content: inputText
                        }
                    ],
                    temperature: 0.2,
                    max_tokens: 20000
                })
            });

            const data = await response.json();
            console.log('pure data ', data);

            if (data?.error) {
                const code = data.error.code || response.status;
                console.warn(`⚠️ model error ${model} - (code: ${code}) - response ${data}`);
                const message = data.error.message || 'Unknown model error';



                const retryableErrors = [400, 401, 402, 403, 404, 429, 500, 503];

                if (retryableErrors.includes(code)) {
                    currentModelIndex++;
                    continue;
                } else {
                    throw new Error(`❌Error in model: ${model}: ${JSON.stringify(data.error)}`);
                }
            }

            return { response: new Response(JSON.stringify(data)), modelUsed: model };
        } catch (error) {
            console.warn(`Error catched in ${model}:`, error.message);

            currentModelIndex++;
            continue;
        }
    }

    throw new Error('❌ Models finished or got other error');
}

exports.aiContentCleaner = async (req, res) => {
    try {
        const inputText = req.body
        let result = {
            data: [],
            cleaned: false,
            error: false,
            errorMessage: ''
        };

        const response = await modelRequest(inputText);
        console.log('reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesponse ', response);
        const data = JSON.parse(await response.text());

        const output = data?.choices?.[0]?.message?.content;
        console.log('#################### output', output);

        return res.status(200).json({ success: true, output })

    } catch (e) {
        console.error('❌ error in OpenRouter:', e);
        return res.status(500).json({ error: e.message })
    }
}
