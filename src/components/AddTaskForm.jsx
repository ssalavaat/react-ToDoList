import Field from "./field"
import Button from "./Button"

const AddTaskForm = (props) => {
  const {
    onAddTaskInput,
    newTaskTitle,
    setNewTaskTitle,
  } = props

  const onSubmit = (event) => {
    event.preventDefault()
    onAddTaskInput()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm