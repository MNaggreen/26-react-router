import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* импорт BrowserRouter 
для дальнейшего его использования */
/* Route работает только вместе с Routes и 
не может быть отрендерен вне него */

import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* тут унас сбудет компонент
        обьект у которого будет свойство div 
        со значением children тот див что ниже
        у нас появились доступ к 
        к поиску, хэшу, путь,
        и navigater, push, replace,
        можно самостоятельно выполнять 
        навигуцию между страницами
        это делает при помощт определенного метода
        все что дает BrowserRouter*/}
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          {/* </Route> */}
          {/* Напрямую теги нельзя размещать в Route 
          но можно это сделать добавив как свойство со
          значением, также закрывающий тег можно опустить*/}
          {/* path необходим чтобы сказать reactRouter
          где и как отображать компонент
          в данном случае / это значить
          домашняя страница котора идет сразу после
          название.ru/ */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
