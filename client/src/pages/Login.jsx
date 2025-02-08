import InputBox from '../components/fields/InputBox'
import Button from '../components/fields/Button';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const Login = () => {

  const { inputValues, handleChange, handleSubmit } = useContext(AppContext);

  const data = [
    { fieldName: "email", fieldType: "email", fieldPlaceholder: "enter your email", styles: "bg-[#F2F2F2] rounded-[2px] p-[12px] w-full" },
    { fieldName: "password", fieldType: "password", fieldPlaceholder: "enter your password", styles: "bg-[#F2F2F2] rounded-[2px] p-[12px] w-full" },
  ];

  return (
    <div className="min-h-screen bg-[#7EBC5D] flex flex-col gap-5 justify-center items-center px-4">
      <div className='flex justify-center flex-col text-white items-center gap-3'>
        <h1 className="font-bold text-3xl">WELCOME TO SAKTHI CABLE NETWORK</h1>
        <h2 className="font-semibold text-2xl">ADMIN LOGIN PAGE</h2>
      </div>
      <form action="" onSubmit={handleSubmit} className="bg-[#fff] p-[3%] flex flex-col gap-5 shadow-2xl w-[380px] rounded-[2px]">
        {data.map((input, index) => {
          return (
            <InputBox
              key={index}
              fieldName={input.fieldName}
              fieldType={input.fieldType}
              fieldPlaceholder={input.fieldPlaceholder}
              styles={input.styles}
              handleChange={handleChange}
              value={inputValues[input.fieldName] || ""}
            />
          )
        })}
        <Button styles="bg-[#53AF50] p-[12px] text-white rounded-[2px]" text="LOGIN" />
        <div className="flex justify-center">
          <p className="text-sm text-gray-400">Forgot Password ?</p>
        </div>
      </form>
      <h1>{inputValues.email}</h1>
      <h1>{inputValues.password}</h1>
    </div>
  )
}

export default Login
