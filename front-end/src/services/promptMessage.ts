import axios from 'axios';

export interface PromptResponse {
    message: string;
    success: boolean;
}

export default async function promptMessage(message: string): Promise<PromptResponse> {
  try{
    const serverRoute = 'http://localhost:5000/ask';
    const response = await axios.post<PromptResponse>(serverRoute, { message });
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Error', success: false };
  }
}
