import { CSSProperties } from "preact/compat";

type InputType =
  | "text"
  | "password"
  | "file"
  | "reset"
  | "submit"
  | "hidden"
  | "radio"
  | "checkbox"
  | "button"
  | "date"
  | "datetime-local"
  | "color"
  | "email"
  | "image"
  | "month"
  | "number"
  | "range"
  | "search"
  | "tel"
  | "time"
  | "url"
  | "week";

{
  /*
    Chứa các thuộc tính chung có thể áp dụng
    cho hầu hết các loại input.
**/
}
interface BaseInputProps {
  type: InputType;
  placeholder?: string;
  autocomplete?: "on" | "off";
  autofocus?: boolean;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  formnovalidate?: boolean;
  list?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string | number;
  name?: string;
  pattern?: string;
  min?: number | string;
  max?: number | string;
  minlength?: number;
  maxlength?: number;
  size?: number;
  step?: number;
  style?: CSSProperties;
}

{
  /*
     Kế thừa từ BaseInputProps với thuộc tính checked.
  **/
}
interface CheckboxInputProps extends BaseInputProps {
  type: "checkbox";
  checked?: boolean;
}

{
  /*
      Kế thừa từ BaseInputProps với type dành riêng cho
      các input dạng văn bản.
  **/
}
interface TextInputProps extends BaseInputProps {
  type: "text" | "password" | "email" | "url" | "tel" | "search";
}

{
  /*
      Kế thừa từ BaseInputProps với các thuộc tính
      multiple và accept dành riêng cho input tệp tin.
  **/
}
interface FileInputProps extends BaseInputProps {
  type: "file";
  multiple?: boolean;
  accept?: string;
}

{
  /*
      Kế thừa từ BaseInputProps với các thuộc tính dành
      riêng cho input hình ảnh (src, alt, height, width,
        align, formaction, formenctype, formmethod,
        và formtarget).
  **/
}
interface ImageInputProps extends BaseInputProps {
  type: "image";
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
  align?: "left" | "right" | "top" | "middle" | "bottom";
  formaction?: string;
  formenctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  formmethod?: "get" | "post";
  formtarget?: "_blank" | "_self" | "_parent" | "_top" | string;
}

{
  /*
      Bao gồm các loại input còn lại với BaseInputProps.
  **/
}
interface OtherInputProps extends BaseInputProps {
  type:
    | "reset"
    | "submit"
    | "hidden"
    | "radio"
    | "button"
    | "date"
    | "datetime-local"
    | "color"
    | "month"
    | "number"
    | "range"
    | "time"
    | "week";
}

type InputProps =
  | CheckboxInputProps
  | TextInputProps
  | FileInputProps
  | ImageInputProps
  | OtherInputProps;

const Input: React.FC<InputProps> = (props) => {
  const { type, placeholder, style, ...rest } = props;

  switch (type) {
    case "checkbox":
      return <input type="checkbox" style={style} {...rest} />;
    case "text":
    case "password":
    case "email":
    case "url":
    case "tel":
    case "search":
      return (
        <input type={type} placeholder={placeholder} style={style} {...rest} />
      );
    case "file":
      return <input type="file" style={style} {...rest} />;
    case "image":
      return <input type="image" style={style} {...rest} />;
    default:
      return <input type={type} style={style} {...rest} />;
  }
};

export default Input;
