import { useState } from "react";

function useForm(initValue) {
  //initValue 초기값을 부모컴포넌트에서 전달받아 value상태변수에 전달
  const [value, setValue] = useState(initValue);
  const onChangeHandler = (e) => {
    e.target.type === "checkbox"
    ? setValue({ ...value, [e.target.name]: e.target.checked }) : setValue({ ...value, [e.target.name]: e.target.value });
  };
  return [value, onChangeHandler, setValue];
}
export default useForm;
