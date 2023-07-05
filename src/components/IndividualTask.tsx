import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

import styles from './IndividualTask.module.css'
import { TaskType } from './Tasks'

interface IndividualTaskProps {
  id: number
  task: string
  completed: boolean
  onCheck: (id: number) => void
  onDelete: (id: number) => void
}

export function IndividualTask({
  id,
  task,
  completed,
  onCheck,
  onDelete,
}: IndividualTaskProps) {
  function handleCheck() {
    onCheck(id)
  }

  function handleDelete() {
    onDelete(id)
  }

  return (
    <div className={styles.individualTask}>
      <div className={styles.wrapperCheckAndLabel}>
        <Checkbox.Root
          checked={completed}
          onCheckedChange={handleCheck}
          id={id.toString()}
          className={
            completed ? styles.checkboxChecked : styles.checkboxUnchecked
          }
        >
          <div>
            <Checkbox.Indicator>
              <Check size={10} className={styles.checkIcon} />
            </Checkbox.Indicator>
          </div>
        </Checkbox.Root>
        <label htmlFor={id.toString()} className={styles.taskLabel}>
          {task}
        </label>
      </div>
      <div>
        <button
          title="Excluir tarefa"
          className={styles.iconIndividualTask}
          onClick={handleDelete}
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
