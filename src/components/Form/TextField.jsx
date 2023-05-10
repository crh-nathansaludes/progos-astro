export default function TextField({
  label = undefined,
  annotation = undefined,
  type = "text",
  name = undefined,
  placeholder = undefined,
  required = false,
  errorMessage = "必須のフィールドに入力してください。",
  length = ""
}) {
  return (
    <div class={`field-block ${length}`}>
      {label && (
        <label class="field-label" htmlFor={name}>
          <span class="text">{label}</span>
          {required ? <span class="badge required">必須</span> : <span class="badge">任意</span>}
        </label>
      )}
      {annotation && (
        <p class="field-annotation">{annotation}</p>
      )}
      <input
        class="field-input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <span class="error-message">{errorMessage}</span>
    </div>
  )
}