import React from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../services/api";
import { useMutation } from "@tanstack/react-query";
import { CreateUserForm } from "../../services/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileImage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// interface CreateUserForm {
//     firstName: string;
//     lastName: string;
//     email: string;
//     profile: FileList;
//     password: string;
//     passwordConfirmation: string;
// }

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateUserForm>();

  const watchPassword = watch("password", "");

  // const SignIn = async (formData: FormData) => {
  //     const { title, description, image, tags } = formData;

  //     const postData = new FormData();
  //     postData.append('title', title);
  //     postData.append('description', description);
  //     postData.append('image', image[0]);
  //     postData.append('tags', tags);

  //     const response = await axios.post('/api/posts', postData);
  //     return response.data;
  // }

  //const mutation = useMutation<any, Error, FormData>(SignIn);

  const mutation = useMutation<any, Error, CreateUserForm>({
    mutationFn: (formData) => addUser(formData),
  });

  const onSubmit = (data: CreateUserForm) => {
    console.log(data);
    const formData: any = new FormData();
    formData.append("name", data.name);
    formData.append("name", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("passwordConfirmation", data.passwordConfirmation);
    formData.append("profile", data.profile[0]);
    mutation.mutate(formData);
  };

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = event.target;
  //     console.log(`name: ${name}`);
  //     console.log(`value: ${value}`);
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormControl isRequired>
        <Input
          {...register("firstName", { required: "FirstName is required" })}
          placeholder="First Name"
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl> */}
      {/* First Name */}
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
      {/* <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl> */}

      <div  className={`py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4 border-2 ${
          errors.email?.type === "required" &&
          "text-colorSecondary border-colorSecondary placeholder:text-colorSecondary"
        }`}>
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

      <div className="py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4">
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
      {/* <FormControl isRequired>
        <FormLabel>Profile Picture</FormLabel>
        <Input
          {...register("profile", { required: "Profile is required" })}
          placeholder="Profile"
          type="file"
        />
        <FormErrorMessage>
          {errors.profile && errors.profile.message}
        </FormErrorMessage>
      </FormControl> */}

      {/* <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl> */}

      <div className="py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4">
        <FontAwesomeIcon icon={faLock} />
        <input
          className="bg-inherit w-full focus:outline-none text-black"
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 4,
            maxLength: 100,
          })}
          placeholder="Enter Password"
        />
      </div>

      {/* <FormControl isRequired>
        <FormLabel>Password Confirmation</FormLabel>
        <Input
          {...register("passwordConfirmation", {
            required: "Password Confirmation is required",
            validate: (value) =>
              value === watchPassword || "Passwords do not match",
          })}
          placeholder="Password"
        />
        <FormErrorMessage>
          {errors.passwordConfirmation && errors.passwordConfirmation.message}
        </FormErrorMessage>
      </FormControl> */}

      <div className="py-4 px-5 items-center mb-6 bg-greyLight text-greyDefault rounded-full w-full flex gap-4">
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
          placeholder="Confirm Password"
        />
      </div>

      <button
        className="w-full text-white bg-colorPrimary rounded-full py-4 px-5"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignIn;
