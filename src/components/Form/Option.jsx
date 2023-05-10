export default function Option({
  type,
  name,
  value,
  children
}) {
  switch (type) {
    case "radio":
      return (
        <label class="radio-option" htmlFor={value}>
          <input class="radio-input" type="radio" id={value} value={value} name={name} />
          <span class="radio-label">{children}</span>
        </label>
      );
    case "checkbox":
      return (
        <label class="checkbox-option" htmlFor={name}>
          <input class="checkbox-input" type="checkbox" name={name} id={name} value={value} />
          <span class="checkbox-label">{children}</span>
        </label>
      )
    case "select":
      return (<option value={value}>{children}</option>);
    default:
      return "";
  }
}