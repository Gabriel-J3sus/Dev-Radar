import { useState } from 'react'
import { SelectValuesButtonContainer } from './style'

interface SelectValuesButton {
  id: number
  data: number[]
  addOrRemove(): void
}

export const SelectValuesButton: React.FC<SelectValuesButton> = ({
  id,
  data,
  children,
  addOrRemove
}) => {
  const [isActive, setIsActive] = useState(!!data.find(e => e === id))

  return (
    <SelectValuesButtonContainer onClick={() => setIsActive(!isActive)}>
      <button
        type="button"
        className={isActive ? 'active' : ''}
        onClick={addOrRemove}
      >
        {children}
      </button>
    </SelectValuesButtonContainer>
  )
}
