"use client";
import { useSubmit } from "@formspree/react";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  message: string;
  name: string;
};

export default function ContactFormPage() {
  const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm<Inputs>();
  console.log(process.env.REACT_APP_REACT_HOOK_FORM_ID);
  const submit = useSubmit<Inputs>("mvoegyzq", {
    onError(errs) {
      const formErrs = errs.getFormErrors();
      for (const { code, message } of formErrs) {
        setError(`root.${code}`, {
          type: code,
          message,
        });
      }

      const fieldErrs = errs.getAllFieldErrors();
      for (const [field, errs] of fieldErrs) {
        setError(field, {
          message: errs.map((e) => e.message).join(", "),
        });
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        {isSubmitSuccessful ? (
          <p className="text-green-600 mb-4">
            Your message has been sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.root && (
              <div className="mb-4">
                <ul className="text-red-500 text-sm">
                  {Object.values(errors.root).map((err) => {
                    if (typeof err !== "object") {
                      return <li key={err}>{err}</li>;
                    }
                    const { type, message } = err;
                    return <li key={type}>{message}</li>;
                  })}
                </ul>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
