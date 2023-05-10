import { For } from "solid-js";
import Option from "./Option";

export default function MultiRadioField({
  label = undefined,
  annotation = undefined,
  name,
  options = [],
  errorMessage = "必須のフィールドに入力してください。",
  required = false
}) {
  return (
    <div class={`field-block`}>
      {label && (
        <p class="field-label">
          <span class="text">{label}</span>
          {required ? <span class="badge required">必須</span> : <span class="badge">任意</span>}
        </p>
      )}
      {annotation && (
        <p class="field-annotation">{annotation}</p>
      )}
      {options.length > 0
        ? (
          <For each={options}>
            {({ value, label }) => <Option type="radio" value={value} name={name}>{label}</Option>}
          </For>
        )
        : (<span class="text-alert">(No options listed)</span>)
      }
      <span class="error-message">{errorMessage}</span>
    </div>
  )
}