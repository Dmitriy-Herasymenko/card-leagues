import CardList from './components/CardList'


export default function Home() {
  return (
    <div className="min-h-screen ">
      <CardList />

      <div className="fixed bottom-0 left-0 right-0 mb-4 flex justify-center">
  <div className="bg-white rounded-full shadow-lg w-[300px] p-4">
    <div className="flex justify-between">
      <button className="text-blue-500 hover:text-blue-700">Пункт 1</button>
      <button className="text-blue-500 hover:text-blue-700">Пункт 2</button>
    </div>
    <div className="flex justify-between mt-4">
      <button className="text-blue-500 hover:text-blue-700">Пункт 3</button>
      <button className="text-blue-500 hover:text-blue-700">Пункт 4</button>
    </div>
  </div>
</div>
    </div>
  );
}
