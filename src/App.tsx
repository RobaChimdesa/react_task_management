import Button from "./component/ui/button"
import AppLayout from "./routes/AppLayout"
function App() {
 
  return (
 <AppLayout>
   <div>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
   <Button
    text="login"
    variant="primary"
    />
    <button className="text-white bg-blue-800 w-1/2 rounded p-3">login</button>
  </div>
 </AppLayout>
  )
}

export default App
