import React from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../services/api";
import { useMutation } from "@tanstack/react-query";
import { CreateUserForm } from "../../services/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faFileImage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateUserForm>();

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const watchPassword = watch("password", "");

  const mutation = useMutation<any, Error, CreateUserForm>({
    mutationFn: async (formData) => {
      const result = await addUser(formData);
      console.log(result); // Log the result
      return result;
    },
  });

  const onSubmit = (data: CreateUserForm) => {
    console.log("You want to submit?");
    const formData: any = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("passwordConfirmation", data.passwordConfirmation);
    formData.append("profile", data.profile[0]);

    console.log(formData);

    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.name?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}
      >
        <FontAwesomeIcon icon={faUser} />
        <input
          className="bg-inherit w-full focus:outline-none text-black"
          type="text"
          id="name"
          {...register("name", {
            required: true,
            minLength: 8,
            maxLength: 100,
          })}
          aria-invalid={errors.name ? "true" : "false"}
          placeholder={
            errors.name?.type === "required"
              ? "First name is required"
              : "Please Enter Full Name"
          }
        />
      </div>

      {/* Last Name */}
      <div
        className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.name?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}
      >
        <FontAwesomeIcon icon={faUser} />
        <input
          className="bg-inherit w-full focus:outline-none text-black"
          type="text"
          id="lastName"
          {...register("username", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          placeholder={
            errors.username?.type === "required"
              ? "Username is required"
              : "Please Enter Username"
          }
        />
      </div>

      {/* Email */}

      <div
        className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.email?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          className="bg-inherit w-full focus:outline-none text-black"
          type="text"
          id="email"
          {...register("email", {
            required: true,
            minLength: 8,
            maxLength: 100,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          })}
          placeholder={
            errors.email?.type === "required"
              ? "Email is required"
              : "Please Enter Email"
          }
        />
      </div>

      <div
        className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.profile?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}
      >
        <FontAwesomeIcon icon={faFileImage} />
        <input
          className="bg-inherit w-full"
          type="file"
          id="email"
          accept="image/*"
          {...register("profile", {})}
          placeholder="Upload Profile Picture"
        />
      </div>

      {/* Password */}

      <div
        className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.password?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}
      >
        <FontAwesomeIcon icon={faLock} />
        <input
          className="bg-inherit w-full focus:outline-none text-black"
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("password", {
            required: true,
            minLength: 4,
            maxLength: 100,
          })}
          placeholder={
            errors.email?.type === "required"
              ? "Password is required"
              : "Please Create a Password"
          }
        />
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={showPassword ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
        />
      </div>

      <div
        className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.passwordConfirmation?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}
      >
        <FontAwesomeIcon icon={faLock} />
        <input
          className="bg-inherit w-full focus:outline-none text-black"
          type="password"
          id="passwordConfirmation"
          {...register("passwordConfirmation", {
            required: true,
            minLength: 4,
            maxLength: 100,
            validate: (value) =>
              value === watchPassword || "Passwords do not match",
          })}
          placeholder={
            errors.email?.type === "required"
              ? "Passwords do not match"
              : "Please confirm password"
          }
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}
      </div>

      <button
        className="w-full text-white bg-colorPrimary rounded-full py-4 px-5 hover:drop-shadow-xl hover:opacity-9"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
