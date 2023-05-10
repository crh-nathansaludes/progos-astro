export default function SubmitButton({
  label,
  alignment = "center" // left | center | right
}) {
  return (
    <div class="field-block">
      <button class={`button submit-button${alignment && ` ${alignment}`}`} type="submit">{label}</button>
    </div>
  )
}