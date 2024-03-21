//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import setCookie from '../../functions/setCookie';
import getCookie from '../../functions/getCookie';

//Компоненты
import NoLogined from '../NoLogined/NoLogined';

function App() {

  // Для работы с состоянием
  const user = useSelector((state) => state.user);

  // Если передается текст ошибки
  if(user.error.text != undefined){
    alert(user.error.text)
  }

  // Если в состоянии появляется сессия
  if(user.sid != undefined){
    // Сохраняем сессию в куки
    setCookie('sid', user.sid, 30)
  }
  
  console.log(getCookie('sid'))

  return (
    <>
      <NoLogined/>
    </>
  );
}

export default App;
