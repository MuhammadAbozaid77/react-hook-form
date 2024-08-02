import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      // touchedFields,
      // dirtyFields,
      // isSubmitSuccessful,
      isDirty,
      isValid,
    },
    // getValues,
    // setValue,
    // reset,
    watch,
  } = useForm({
    defaultValues: {
      textInput: "",
      emailInput: "",
      passwordInput: "",
    },
    mode: "all",
  });

  const handelRegister = (dataValues) => {
    console.log(dataValues);
    // Calling API
  };
  const handelRegisterErrors = (errorsValues) => {
    console.log(errorsValues);
  };

  return (
    <>
      <div className="border p-5 w-[500px] rounded">
        <h1 className="my-5 text-[20px] font-bold"> Register </h1>
        <form onSubmit={handleSubmit(handelRegister, handelRegisterErrors)}>
          <FormInput error={errors?.textInput && errors?.textInput?.message}>
            <input
              className={`inputStyle ${errors?.textInput ? "inputError" : ""}`}
              {...register("textInput", {
                required: "This Field Is Required",
                minLength: {
                  value: 5,
                  message: "Length Of This Field Must Be Mخre Than 5 Char",
                },
                maxLength: {
                  value: 15,
                  message: "Length Of This Field Must Be Less Than 15 Char",
                },
                // validate: {
                //   onNameValue: (fieldValue) => {
                //     return fieldValue !== "muhammad" || "Try Another Name";
                //   },
                // },
              })}
              type="text"
              id=""
            />
          </FormInput>
          <div className="flex justify-center items-start flex-col mb-3">
            <label htmlFor="numberInput">UserNumber</label>
            <input
              className="border w-[100%] rounded p-2 text-gray-500 focus:outline-gray-400 shadow"
              type="number"
              //   name="numberInput"
              id="numberInput"
              {...register("numberInput", {
                disabled: watch("textInput") === "",
                valueAsNumber: true,
                required: "This Field Is Required",
              })}
            />
            {errors?.numberInput?.message && (
              <span className="text-red-500">
                {errors?.numberInput?.message}
              </span>
            )}
          </div>
          <div className="flex justify-center items-start flex-col mb-3">
            <label htmlFor="dateInput">UserDate</label>
            <input
              className="border w-[100%] rounded p-2 text-gray-500 focus:outline-gray-400 shadow"
              type="date"
              //   name="dateInput"
              id="dateInput"
              {...register("dateInput", {
                valueAsDate: true,
                required: "This Field Is Required",
              })}
            />
            {errors?.dateInput?.message && (
              <span className="text-red-500">{errors?.dateInput?.message}</span>
            )}
          </div>
          <div className="flex justify-center items-start flex-col mb-3">
            <label htmlFor="emailInput">UserEmail</label>
            <input
              className="border w-[100%] rounded p-2 text-gray-500 focus:outline-gray-400 shadow"
              type="email"
              //   name="emailInput"
              id="emailInput"
              {...register("emailInput", {
                required: "This Field Is Required",
                pattern: {
                  value: "",
                  message: "This Email Invalid",
                },
                validate: (inputValue) => {
                  return (
                    inputValue !== "admin@gmail.com" || "Enter Another Email"
                  );
                },
                // validate: {
                //   notThisEmail: (inputValue) => {
                //     return (
                //       inputValue !== "admin@gmail.com" || "Enter Another Email"
                //     );
                //   },
                //   notThisEmail2: (inputValue) => {
                //     return (
                //       inputValue !== "admin222@gmail.com" ||
                //       "Enter Another Email 2"
                //     );
                //   },
                // },
              })}
            />
            {errors?.emailInput?.message && (
              <span className="text-red-500">
                {errors?.emailInput?.message}
              </span>
            )}
          </div>
          <div className="flex justify-center items-start flex-col mb-3">
            <label htmlFor="passwordInput">UserPassword</label>
            <input
              className="border w-[100%] rounded p-2 text-gray-500 focus:outline-gray-400 shadow"
              type="password"
              //   name="passwordInput"
              id="passwordInput"
              {...register("passwordInput", {
                required: "This Field Is Required",
              })}
            />
            {errors?.passwordInput?.message && (
              <span className="text-red-500">
                {errors?.passwordInput?.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="formButton "
            disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

// Validate  : On another Validation You need on an input
// Nested Object Of   {...register(Social.twitter)}
// Array Of   {...register(Social.0)}   0 is an index of array
// disabled ,, Watch
