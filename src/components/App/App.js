//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

//Компоненты
import NoLogined from '../NoLogined/NoLogined';

function App() {

  // Для работы с состоянием
  const user = useSelector((state) => state.user);

  console.log(user)

  return (
    <>
      <NoLogined/>
    </>
  );
}

export default App;
