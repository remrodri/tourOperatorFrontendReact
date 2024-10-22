import { useEffect, useState } from "react";
import { SecurityQuestionsService } from "../service/securityQuestionsService";
import { AnyObject } from "yup";
import { showToast } from "../../../shared/toast";

interface UseSecurityQuestionsProps {
  userId: string;
  token: string;
}
export const useSecurityQuestions = ({
  userId,
  token,
}: UseSecurityQuestionsProps) => {
  const [questions, setQuestions] = useState<AnyObject>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // const { questionsAnwers } =
        const questionsAnswers =
          await SecurityQuestionsService.getSecurityQuestions(userId, token);
        console.log("quationsAnswers::: ", questionsAnswers);
        // console.log("questions::: ", questions);
        setQuestions(questionsAnswers);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Falla al cargar las security questions");
        }
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [userId, token]);

  const submitAnswers = async (
    answers: { answerId: string; answerText: string }[]
  ) => {
    // console.log("answers::: ", answers);
    try {
      await SecurityQuestionsService.submitSecurityAnswers(
        userId,
        answers,
        token
      );
      // console.log("response::: ", response);
      // return {response}
      // return { statusCode: response.statusCode, message: response.message };
      showToast("success","Respuestas registradas satisfactoriamente")

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to submit answers");
        showToast("error", "Error al registrar las respuestas");
      }
      // return { statusCode: 500, message: "Internal Server Error" };
    }
  };

  return { questions, loading, error, submitAnswers };
};
