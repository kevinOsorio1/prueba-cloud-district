import { renderHook, act } from '@testing-library/react-hooks';
import useTextInput from '../globals/hooks/useTextInput';
import { ChangeEvent } from 'react';
describe('ùseTextInput',()=>{
  test('default value of text should be "" ',()=>{
    const {result} = renderHook(()=>useTextInput())
    expect(result.current.text).toBe('')
  })
  test('change text state ',()=>{
    const {result} = renderHook(()=>useTextInput())
    
    act(()=>{

      result.current.handleChange('test')
    })
    expect(result.current.text).toBe('test')
  })
})