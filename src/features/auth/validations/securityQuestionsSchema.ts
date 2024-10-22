import * as Yup from "yup";
export const securityQuestionsSchema = Yup.object().shape({
  answers: Yup.array()
    .of(Yup.string().required("Answers is required"))
    .min(3, "All three questions must be answered"),
});
