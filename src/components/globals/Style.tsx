import { useDispatch } from 'react-redux'
//import { styleKey } from '../../config'
//import { setStyle } from '../../stores/styleSlice'

export default function GlobalStyle() {
  const dispatch = useDispatch()
  
  //dispatch(
  //  setStyle(
  //    typeof localStorage !== "undefined" && localStorage[styleKey] 
  //      ? localStorage[styleKey] 
  //      : "basic"
  //  )
  //)

  return null;
}