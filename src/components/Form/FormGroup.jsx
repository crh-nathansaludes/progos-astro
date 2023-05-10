export default function FormGroup(props) {
  return (
    <div class="form-group" cols={props.cols || 1}>
      <legend class="heading">{props.heading}</legend>
      <fieldset>
        {props.children}
      </fieldset>
    </div>
  )
}