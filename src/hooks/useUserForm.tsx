// hooks/useUserForm.ts
import { useState, useCallback } from "react";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  name?: string;
  confirmPassword?: string;
}

type FormType = "signin" | "signup";

const useUserForm = (type: FormType) => {
  // Initial state for Sign In
  const initialSignInState: SignInData = {
    email: "",
    password: "",
  };

  // Initial state for Sign Up
  const initialSignUpState: SignUpData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<SignInData | SignUpData>(
    type === "signin" ? initialSignInState : initialSignUpState,
  );

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error for this field when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  // Validate Sign In form
  const validateSignIn = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const data = formData as SignInData;

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "incorrect password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Validate Sign Up form
  const validateSignUp = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const data = formData as SignUpData;

    if (!data.name) {
      newErrors.name = "Full name is required";
    } else if (data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Submit handler
  const handleSubmit = useCallback(
    async (
      e: React.FormEvent,
      onSubmit: (data: SignInData | SignUpData) => Promise<void>,
    ) => {
      e.preventDefault();

      const isValid = type === "signin" ? validateSignIn() : validateSignUp();

      if (!isValid) return;

      setIsLoading(true);
      try {
        await onSubmit(formData);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, type, validateSignIn, validateSignUp],
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(type === "signin" ? initialSignInState : initialSignUpState);
    setErrors({});
  }, [type]);

  // Toggle password visibility
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  // Get field props for input elements
  const getFieldProps = useCallback(
    (fieldName: string) => ({
      name: fieldName,
      value: (formData as any)[fieldName] || "",
      onChange: handleChange,
      error: errors[fieldName as keyof FormErrors],
    }),
    [formData, handleChange, errors],
  );

  return {
    formData,
    errors,
    isLoading,
    setIsLoading,
    showPassword,
    handleChange,
    handleSubmit,
    resetForm,
    togglePasswordVisibility,
    validateForm: type === "signin" ? validateSignIn : validateSignUp,
    getFieldProps,
    setFormData,
    setErrors,
  };
};

export default useUserForm;
