// react hook
import { useEffect, useState } from 'react';
// import Context from '../../context/Context';
// Context
// css
import './changecolorbody.css'

const ChangeColorBody = () => {
  // const { click } = useContext(Context);
  const [color, setColor] = useState();

  const click = color => {
      setColor(color)
  }

  useEffect(() => {
    // document.body.style.backgroundColor = color
    document.getElementById('every_site').style.backgroundColor = color
    document.getElementById('sidebar').style.backgroundColor = color
    document.getElementById('navbar').style.backgroundColor = color
}, [color])

  return (
    <div className='change_color_body'>
      <div className="change_color_body_box yellow" onClick={() => { click('yellow') }}></div>
      <div className="change_color_body_box red" onClick={() => { click('red') }}></div>
      <div className="change_color_body_box blue" onClick={() => { click('blue') }}></div>
      <div className="change_color_body_box orange" onClick={() => { click('orange') }}></div>
      <div className="change_color_body_box white" onClick={() => { click('white') }}></div>
    </div>
  )
}

export default ChangeColorBody;