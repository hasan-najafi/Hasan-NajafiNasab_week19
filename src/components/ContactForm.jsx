import { useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ContactContext } from "../context/ContactContext";

const schema = yup.object().shape({
  firstName: yup.string().required("نام الزامی است"),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
  email: yup
    .string()
    .required("ایمیل الزامی است")
    .email("ایمیل معتبر وارد کنید"),
  phone: yup
    .string()
    .required("شماره تلفن الزامی است")
    .matches(/^\d{10,}$/, "شماره تلفن معتبر وارد کنید"),
  category: yup
    .string()
    .required("دسته‌بندی را انتخاب کنید")
    .oneOf(["family", "friends", "work"], "دسته‌بندی معتبر انتخاب کنید"),
});

const ContactForm = ({ onCancel }) => {
  const { dispatch, modal } = useContext(ContactContext);

  return (
    <Formik
      initialValues={{
        firstName: modal.type === "edit" && modal.data ? modal.data.firstName : "",
        lastName: modal.type === "edit" && modal.data ? modal.data.lastName : "",
        email: modal.type === "edit" && modal.data ? modal.data.email : "",
        phone: modal.type === "edit" && modal.data ? modal.data.phone : "",
        category: modal.type === "edit" && modal.data ? modal.data.category : "none",
      }}
      validationSchema={schema}
      enableReinitialize
      onSubmit={(values) => {
        dispatch({
          type: "OPEN_MODAL",
          payload: {
            type: modal.type === "edit" ? "confirmEdit" : "confirmAdd",
            data: values,
          },
        });
      }}
    >
      {() => (
        <Form className="contact-form">
          <div className="form-group">
            <Field type="text" name="firstName" placeholder="نام" />
            <ErrorMessage name="firstName" component="span" className="error" />
          </div>
          <div className="form-group">
            <Field type="text" name="lastName" placeholder="نام خانوادگی" />
            <ErrorMessage name="lastName" component="span" className="error" />
          </div>
          <div className="form-group">
            <Field type="email" name="email" placeholder="ایمیل" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>
          <div className="form-group">
            <Field type="text" name="phone" placeholder="شماره تلفن" />
            <ErrorMessage name="phone" component="span" className="error" />
          </div>
          <div className="form-group">
            <Field as="select" name="category">
              <option value="none">بدون دسته‌بندی</option>
              <option value="family">خانواده</option>
              <option value="friends">دوستان</option>
              <option value="work">کار</option>
            </Field>
            <ErrorMessage name="category" component="span" className="error" />
          </div>
          <div className="form-actions">
            <button type="submit">
              {modal.type === "edit" ? "ثبت ویرایش" : "ثبت"}
            </button>
            <button type="button" onClick={onCancel}>
              انصراف
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;