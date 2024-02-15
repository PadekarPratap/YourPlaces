import { useForm } from "react-hook-form";
import Card from "../../shared/components/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/user/useSignUp";
import ErrorModal from "../../shared/components/Modal/ErrorModal";
import useLogin from "../../hooks/user/useLogin";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

const Auth = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [showErrorModal, setShowErrorModal] = useState(false);

  const navigate = useNavigate();

  const { mutate, isPending, isSuccess, isError, error } = useSignUp();
  const {
    mutate: mutateLogin,
    isError: isLoginError,
    isPending: isLoginPending,
    error: loginError,
    isSuccess: isLoginSuccess,
  } = useLogin();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const { login } = useAuth();

  const toogleLoginMode = () => {
    reset();
    setIsLoginMode((prevMode) => !prevMode);
  };

  const onSubmit = (data) => {
    // login();
    // navigate("/");

    if (isLoginMode) {
      mutateLogin({
        email: data.email,
        password: data.password,
      });
    } else {
      console.log(data);
      const { username, email, password, image } = data;
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image[0]);
      mutate(formData);
    }
  };

  useEffect(() => {
    if (isError || isLoginError) setShowErrorModal(true);
    if (isSuccess || isLoginSuccess) {
      login();
      navigate("/");
    }
  }, [isError, isLoginError, isSuccess, isLoginSuccess, login, navigate]);

  return (
    <>
      {showErrorModal && (
        <ErrorModal
          errorMessage={
            error?.response?.data?.message ||
            loginError?.response?.data?.message
          }
          closeModal={
            <Button onClick={() => setShowErrorModal(false)} big danger>
              Close
            </Button>
          }
          closeModalState={() => setShowErrorModal(false)}
        />
      )}
      <Card style={{ maxWidth: "40rem", margin: "auto" }}>
        <h2 className="center" style={{ fontSize: "3rem", margin: 0 }}>
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLoginMode && (
            <ImageUpload
              id="user-avatar"
              imagePickerText="Pick Avatar"
              register={register}
              registerText="image"
              isError={errors.image}
              errorText={errors.image?.message}
              validator={{ required: "Avatar is a required field!" }}
            />
          )}
          {!isLoginMode && (
            <Input
              element="input"
              id="username"
              label="Username"
              register={register}
              text="username"
              placeholder="Enter a username"
              type="text"
              validator={{ required: "Username is required!" }}
              isError={errors.username}
              errorText={errors.username?.message}
            />
          )}
          <Input
            element="input"
            id="email"
            label="Email"
            register={register}
            text="email"
            placeholder="Enter your email"
            type="text"
            isError={errors.email}
            validator={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            errorText={errors.email?.message}
          />

          <Input
            element="input"
            type="password"
            id="password"
            register={register}
            label="Password"
            placeholder="Enter your password"
            text="password"
            validator={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have a min. 8 chars",
              },
              maxLength: {
                value: 18,
                message: "Password must have a max. 18 chars",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/, // Requires at least one special character
                message: "Password must contain a special character",
              },
            }}
            errorText={errors.password?.message}
            isError={errors.password}
          />

          <Button type="submit" disabled={isPending}>
            {isPending || isLoginPending ? (
              <div className="loader"></div>
            ) : isLoginMode ? (
              "Login"
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Card>
      <div className="center" style={{ marginTop: "3rem" }}>
        <Button big onClick={toogleLoginMode} inverse type="button">
          {isLoginMode
            ? "New to YourPlaces? Register"
            : "Already have an Account? Login"}
        </Button>
      </div>
    </>
  );
};
export default Auth;
