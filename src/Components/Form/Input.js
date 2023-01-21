import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { ErrorStyle, InputStyle } from "./FormStyle";

const Input = ({ name, label, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { type } = rest;

  const eyeHandler = () => {
    setPasswordVisible(() => !passwordVisible);
  };
  return (
    <>
      {type === "password" ? (
        <InputStyle>
          <label htmlFor={name}>{label}</label>
          <div className="passwordWrapper">
            <Field
              id={name}
              name={name}
              {...rest}
              type={passwordVisible ? "text" : "password"}
            />
            <div className="eyeWrapper">
              {!passwordVisible && (
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={eyeHandler}
                >
                  <path
                    d="M12.4999 15.6251C9.53702 15.6251 7.13859 13.3317 6.91788 10.4255L2.82023 7.2587C2.28156 7.93448 1.78585 8.64893 1.38585 9.43018C1.29649 9.60694 1.24994 9.80223 1.24994 10.0003C1.24994 10.1984 1.29649 10.3937 1.38585 10.5704C3.50421 14.7036 7.69796 17.5001 12.4999 17.5001C13.5511 17.5001 14.5652 17.3439 15.5425 17.0915L13.5155 15.5231C13.1808 15.5878 12.8408 15.6219 12.4999 15.6251ZM24.7585 17.8946L20.4402 14.5571C21.7519 13.4516 22.8308 12.0963 23.614 10.57C23.7033 10.3933 23.7499 10.198 23.7499 9.99991C23.7499 9.80184 23.7033 9.60655 23.614 9.42979C21.4956 5.29659 17.3019 2.5001 12.4999 2.5001C10.4888 2.50254 8.51031 3.00884 6.74523 3.97276L1.7757 0.131743C1.71089 0.0813164 1.63679 0.0441535 1.55762 0.022378C1.47844 0.000602454 1.39576 -0.0053588 1.31428 0.00483486C1.2328 0.0150285 1.15413 0.0411773 1.08277 0.0817869C1.0114 0.122396 0.948736 0.176671 0.898353 0.241509L0.131556 1.22862C0.0298368 1.35947 -0.015743 1.52537 0.00484145 1.68982C0.0254259 1.85428 0.110489 2.00383 0.241322 2.10557L23.2241 19.8685C23.2889 19.9189 23.363 19.9561 23.4422 19.9778C23.5214 19.9996 23.6041 20.0056 23.6856 19.9954C23.767 19.9852 23.8457 19.959 23.9171 19.9184C23.9884 19.8778 24.0511 19.8235 24.1015 19.7587L24.8687 18.7716C24.9703 18.6407 25.0159 18.4748 24.9952 18.3103C24.9745 18.1458 24.8894 17.9963 24.7585 17.8946ZM17.5819 12.3478L16.0468 11.161C16.1761 10.7874 16.2447 10.3954 16.2499 10.0001C16.2575 9.4213 16.1293 8.84877 15.8755 8.32852C15.6217 7.80826 15.2495 7.35477 14.7886 7.00448C14.3278 6.65419 13.7912 6.41687 13.2221 6.31156C12.6529 6.20626 12.0669 6.23591 11.5112 6.39815C11.7468 6.71733 11.8742 7.10342 11.8749 7.5001C11.8691 7.63211 11.8489 7.76309 11.8148 7.89073L8.93937 5.66846C9.93819 4.83378 11.1982 4.37606 12.4999 4.3751C13.2387 4.37469 13.9704 4.51991 14.653 4.80244C15.3356 5.08498 15.9559 5.4993 16.4783 6.02171C17.0007 6.54412 17.415 7.16438 17.6976 7.84702C17.9801 8.52966 18.1253 9.2613 18.1249 10.0001C18.1249 10.845 17.9183 11.6325 17.5819 12.3481V12.3478Z"
                    fill="black"
                  />
                </svg>
              )}
              {passwordVisible && (
                <svg
                  width="25"
                  height="17"
                  viewBox="0 0 25 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={eyeHandler}
                >
                  <path
                    d="M24.8489 7.69965C22.4952 3.1072 17.8355 0 12.5 0C7.16447 0 2.50345 3.10938 0.151018 7.70009C0.0517306 7.89649 0 8.11348 0 8.33355C0 8.55362 0.0517306 8.77061 0.151018 8.96701C2.50475 13.5595 7.16447 16.6667 12.5 16.6667C17.8355 16.6667 22.4965 13.5573 24.8489 8.96658C24.9482 8.77018 25 8.55319 25 8.33312C25 8.11304 24.9482 7.89605 24.8489 7.69965ZM12.5 14.5833C11.2638 14.5833 10.0555 14.2168 9.02766 13.53C7.99985 12.8433 7.19878 11.8671 6.72573 10.7251C6.25268 9.58307 6.12891 8.3264 6.37007 7.11402C6.61123 5.90164 7.20648 4.78799 8.08056 3.91392C8.95464 3.03984 10.0683 2.44458 11.2807 2.20343C12.493 1.96227 13.7497 2.08604 14.8917 2.55909C16.0338 3.03213 17.0099 3.83321 17.6967 4.86102C18.3834 5.88883 18.75 7.0972 18.75 8.33333C18.7504 9.15421 18.589 9.96711 18.275 10.7256C17.9611 11.484 17.5007 12.1732 16.9203 12.7536C16.3398 13.3341 15.6507 13.7944 14.8922 14.1084C14.1338 14.4223 13.3208 14.5837 12.5 14.5833ZM12.5 4.16667C12.1281 4.17186 11.7586 4.22719 11.4015 4.33116C11.6958 4.73119 11.8371 5.22347 11.7996 5.71873C11.7621 6.21398 11.5484 6.6794 11.1972 7.0306C10.846 7.38179 10.3806 7.5955 9.88537 7.63297C9.39012 7.67043 8.89784 7.52917 8.49781 7.23481C8.27001 8.07404 8.31113 8.96357 8.61538 9.77821C8.91962 10.5928 9.47167 11.2916 10.1938 11.776C10.916 12.2605 11.7719 12.5063 12.641 12.4788C13.5102 12.4514 14.3489 12.152 15.039 11.623C15.7291 11.0939 16.236 10.3617 16.4882 9.52951C16.7404 8.69729 16.7253 7.80694 16.445 6.98376C16.1647 6.16058 15.6333 5.44602 14.9256 4.94067C14.2179 4.43532 13.3696 4.16462 12.5 4.16667Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
          </div>

          <ErrorMessage name={name} component={ErrorStyle} />
        </InputStyle>
      ) : (
        <InputStyle>
          <label htmlFor={name}>{label}</label>
          <Field id={name} name={name} {...rest} />
          <ErrorMessage name={name} component={ErrorStyle} />
        </InputStyle>
      )}
    </>
  );
};

export default Input;
