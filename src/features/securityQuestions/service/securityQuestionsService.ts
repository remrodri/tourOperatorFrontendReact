import axiosInstance from "../../../api/axiosConfig";

interface SecurityQuestionsResponse {
  questions: [];
}

interface SecurityAnswersResponse{
  statusCode: number;
  message:string
}

export const SecurityQuestionsService = {
  getSecurityQuestions: async (
    userId: string,
    token: string
  ): Promise<SecurityQuestionsResponse> => {
    const response = await axiosInstance.post(
      "/recovery-password",
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log('response::: ', response.data.data.questionsAnswers);
    return response.data.data.questionsAnswers;
  },

  submitSecurityAnswers: async (
    userId: string,
    answers: {answerId:string,answerText:string}[],
    token: string
  ): Promise<SecurityAnswersResponse> => {
    try {
      
      const response = await axiosInstance.post(
        "/recovery-password/submit-security-answers",
        { userId, answers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('response::: ', response.data);
      return response.data;
    } catch (error: unknown) {
      console.error(error);
      return {statusCode:500,message:"Error interno del servidor"}
    }
  },
};
