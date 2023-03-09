import NewChat from "./NewChat";

const Sidebar = () => {
  return (
    <section className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div className="">
          {/* New Chat */}
          <NewChat />

          <div className="">
            {/* AI Model Selection */}
          </div>

          {/* Map through the ChatRows */}
        </div>
      </div>
    </section>
  )
}

export default Sidebar;