//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import setCookie from '../../functions/setCookie';
import getCookie from '../../functions/getCookie';
import { updateErrorText } from '../../slices/userSlice';

//Компоненты
import NoLogined from '../NoLogined/NoLogined';

function App() {

  // Для работы с состоянием
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Если передается текст ошибки
  if(user.error.text != undefined){
    alert(user.error.text)
  }

  // Если в состоянии появляется сессия
  if(user.sid != undefined ){
    // Сохраняем сессию в куки
    setCookie('sid', user.sid, 30)
  }
  
  console.log(getCookie('sid'))

  // Отрисовка по условию
  switch(true){

    // В куки есть сессия
    case (getCookie('sid') != ''):
      return <>Есть куки</>
    
    // В куки нет сессии
    case (getCookie('sid') === ''):
      return <NoLogined/>

    // В других случаях
    default:
      dispatch.updateErrorText('Непредвиденная ошибка. На стороне клиента')
  }




  //return (
  //  <>
  //    <NoLogined/>
  //  </>
  //);
}

export default App;
