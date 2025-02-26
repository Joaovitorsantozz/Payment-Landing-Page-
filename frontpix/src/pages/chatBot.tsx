/*
import axios from "axios";

export async function getGeneratedText(userInput: string): Promise<string> {
  console.log("A função foi chamada");
  try {
    // Enviar a solicitação para a API Hugging Face
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL_ID}`,
      {
        inputs: userInput, // Texto que o modelo vai processar
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    // Retornar o texto gerado
    return response.data[0]?.generated_text || "Sem resposta gerada";
  } catch (error) {
    console.error("Erro ao acessar a API do Hugging Face:", error);
    throw new Error("Erro ao acessar a API do Hugging Face");
  }
}
*/
