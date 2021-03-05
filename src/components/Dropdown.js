import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ name, className, options, defaultSelection, currentSelection=null, setter }) => {

  const input = useRef()
  const button = useRef()
  const outside = useRef()
  const wrapper = useRef()
  const optionsContainer = useRef()

  const [value, setValue] = useState(currentSelection)

  const closeOptions = () => {
    if(!wrapper.current.classList.contains('active')) return false
    wrapper.current.classList.remove('active')
  }

  const buttonClickHandler = () => {
    if(wrapper.current.classList.contains('active')) {
      closeOptions()
      return
    }
    wrapper.current.classList.add('active')
  }

  const optionClickHandler = e => {
    closeOptions()
    setValue(e.target.getAttribute('value'))
  }

  useEffect(() => {
    setter(value)
  }, [setter, value])

  useEffect(() => {
    setValue(currentSelection)
  }, [currentSelection])

  return (
    <span
      className={`dropdown ${className ? className : ''} ${value ? 'selected' : ''}`}
      ref={wrapper}
    >
      <input
        type='hidden'
        ref={input}
        value={value}
      />
      <span
        className='outside'
        ref={outside}
        onClick={closeOptions}
      />
      <button
        className='selection rounded'
        ref={button}
        onClick={buttonClickHandler}
      >
        <span className='value'>
          {value ? `${name}: ${value}` : name}
        </span>
        <FontAwesomeIcon icon={['fas', 'chevron-down']} />
      </button>
      <div className='options rounded shadow'
        ref={optionsContainer}
        onClick={optionClickHandler}
      >
        {!defaultSelection &&
          <span
            className='option'
            value={null}
          >
              'Select'
          </span>
        }
        {options.map((option, index) => {
          return (
            <span
              key={index}
              className='option'
              value={option}
            >
                {option.split('-').join(' ')}
            </span>
          )
        })}
      </div>
    </span>
  )
}

export default Dropdown