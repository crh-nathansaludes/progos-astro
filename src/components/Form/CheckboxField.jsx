import Option from "./Option";

export default function CheckboxField({
  label,
  name,
  value,
  required = false,
  errorMessage = "必須のフィールドに入力してください。",
  alignment = ""
}) {
  return (
    <div class={`field-block ${alignment}`}>
      <Option type="checkbox" value={value} name={name}>{label}</Option>
    </div>
  )
}