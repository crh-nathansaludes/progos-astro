export default function Form(props) {
  return (
    <form class="form" action="POST">
      {props.children}
    </form>
  )
}