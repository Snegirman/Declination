import store from './app/store';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import Result from './Components/Result';
import {Provider} from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <main className='content'>
          <InputForm />
          <Result />
        </main>
      </div>
    </Provider>
  );
}

export default App;
