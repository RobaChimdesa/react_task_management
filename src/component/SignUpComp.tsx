import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { forAuth } from "../assets/image";
import useUserForm from "../hooks/useUserForm";
import { API_URL } from "../config/dot-env.config";
const SignUpComp = () => {
  const navigate = useNavigate();
   const {
    formData,errors,isLoading,
    showPassword,
    handleSubmit,
    togglePasswordVisibility,
    getFieldProps,
    setIsLoading
  } = useUserForm("signup");
const handleSignUp = async (values:any) => {
    // e.preventDefault()
    try{

     const checkUser = await fetch(
      `${API_URL}/users?email=${values.email}`
    );
    const existingUsers = await checkUser.json();

    if (existingUsers.length > 0) {
      alert("Email already exists ❌");
      return;
    }    
    const response = await fetch(`${API_URL}/users`,{
        method:"POST",
         headers: {
        "Content-Type": "application/json",   // ← This line is usually missing
      },
        body: JSON.stringify(values),
    });
    const data = await response.json();
    
    console.log("Account created:",data);
    if (data.ok) {
        alert("Account created successfully!");     }
} catch(err){
    console.log("Error",err);
}}
   


 const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      console.log("Google sign up clicked");
      // Add Google sign up logic here
      // await signUpWithGoogle();
    } finally {
      setIsLoading(false);
    }
  };
  return (
   <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl  bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Sign Up Form */}
        <div className="flex-1 p-0 md:p-6">
          {/* Logo and Title */}
          <div className="mb-2">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Tasky</h2>
            <h3 className="text-2xl font-bold text-black mt-2">Create Account</h3>
            <p className="text-gray-500 mt-2">Please fill in your details below</p>

          </div>
        

          {/* Sign Up Form */}
          <form onSubmit={(e)=> handleSubmit(e, handleSignUp)} className="space-y-0">
            {/* Full Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                  {...getFieldProps("name")}
                // value={formData.name}
                // onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition  ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
              
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
               <input
                type="email"
                {...getFieldProps("email")}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...getFieldProps("password")}
                  placeholder="Create a password"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <p className="text-gray-400 text-xs mt-1">
                Password must be at least 6 characters
              </p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                {...getFieldProps("confirmPassword")}
                placeholder="Confirm your password"
                className={`w-full px-4 py-3 my-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or continue</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign Up Button */}
          <button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700">Sign up with Google</span>
          </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-600 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
        

        {/* Right Side - Illustration taking full height */}
         <div className="flex-1  flex items-center justify-center pl-0 p-4 rounded-3xl ">
                  <img
                    src={forAuth}
                    alt="Task Management Illustration"
                    className="w-full h-full object-cover round rounded-2xl"
                  />
            </div>
      </div>
    </div>

  );
};


export default SignUpComp