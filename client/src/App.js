import AddBooks from "./Component/AddBooks";
import BookList from "./Component/BookList";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main class="py-12 2xl:px-6">
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList />
          <AddBooks/>
        </div>
      </main>
    </>
  );
}

export default App;
