function App() {
  return (
    <>
      <div className="container-fixed">
        <div className="grid-layout grid-cols-layout">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-blue-500 p-4 rounded">Column 1</div>
            <div className="text-text-base-subtle text-heading-3 mt-4 font-inter font-bold">
              <a href="https://vite.dev" target="_blank">
                Hello
              </a>
              <button className="w-32 h-12 bg-bg-fill-brand-primary rounded ring-brand">
                Hello
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-red-500 p-4 rounded">Column 2</div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-green-500 p-4 rounded">Column 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
