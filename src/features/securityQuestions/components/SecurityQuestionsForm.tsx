import { ErrorMessage, Field, Form, Formik } from "formik";
import { securityQuestionsSchema } from "../../auth/validations/securityQuestionsSchema";
import { useSecurityQuestions } from "../hooks/useSecurityQuestions";
import { AnyObject } from "yup";
import "../styles/securityQuestionsForm.css";
import { Button } from "@mui/material";


interface SecurityQuestionsFormProps {
  userId: string;
  token: string;
}
export const SecurityQuestionsForm: React.FC<SecurityQuestionsFormProps> = ({
  userId,
  token,
}) => {
  const { questions, loading, error, submitAnswers } = useSecurityQuestions({
    userId,
    token,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const addAnswerId = (answers: string[]) => {
    // console.log("answers::: ", answers);
    // console.log("questions::: ", questions);
    const answersIds = questions.map(
      (questionsAnswer: AnyObject) => questionsAnswer.answer
    );
    console.log("answersIds::: ", answersIds);
    // const completeAnswers = [];
    // const completeAnswers = answers.forEach((answer, index) => {
    //   completeAnswers.push({
    //     answerId: answersIds[index],
    //     answerText: answer,
    //   });
    // });
    const answersWithId = answers.map((answerText, index) => ({
      answerId: answersIds[index],
      answerText,
    }));
    // console.log("answersWithId::: ", answersWithId);
    return answersWithId;
  };

  return (
    <div className="security-questions-form">
      <div className="security-questions-form-title-container">
        <h2 className="security-questions-form-title">
          Preguntas de seguridad
        </h2>
      </div>
      <div className="security-questions-form-info">
        <span>
          Debes responder a las siguientes antes de acceder a tu cuenta
        </span>
      </div>
      <div className="security-questions-form-container">
        <Formik
          initialValues={{ answers: ["", "", ""] }}
          validationSchema={securityQuestionsSchema}
          onSubmit={(values, { setSubmitting }) => {
            // console.log("answers::: ", values.answers);
            // submitAnswers(values.answers);
            submitAnswers(addAnswerId(values.answers));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {questions.map(
                (
                  questionAnswer: {
                    answer: string;
                    question: { _id: string; questionText: string };
                    _id: string;
                  },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="security-questions-forms-field-container"
                  >
                    <label>{questionAnswer.question.questionText}</label>
                    <Field
                      className="security-questions-forms-field-style"
                      name={`answers.${index}`}
                      type="text"
                    />
                    <ErrorMessage name={`answers.${index}`} component="div" />
                  </div>
                )
              )}
              <div className="security-questions-form-button-container">
                {/* <button type="submit" disabled={isSubmitting}>
                  Submit answers
                </button> */}
                <Button type="submit" variant="contained" disabled={isSubmitting} >
                  Enviar respuestas
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
